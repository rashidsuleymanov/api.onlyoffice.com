import {createHash} from "node:crypto"
import {writeFile} from "node:fs/promises"
import {tmpdir} from "node:os"
import path from "node:path"
import process from "node:process"
import {Console} from "@onlyoffice/console"
import {type BuildOptions, build} from "esbuild"
import {default as PQueue} from "p-queue"
import pack from "../package.json" with {type: "json"}

// In the future, we should replace our custom logger with the eleventy one
// (see for the ConsoleLogger type for the @onlyoffice/eleventy-types).
const console = new Console(pack.name, process.stdout, process.stderr)

export interface EleventyEsbuildOptions {
  urlPath: string
  outputDir: string
  filenameFormat?(id: string, src: string): string
  buildOptions?: BuildOptions
}

export class BuildResult {
  type = ""
  src = ""
}

export class EleventyEsbuild {
  static #queue = new PQueue({concurrency: 1})
  static #cache = new Map<string, BuildResult>()

  #opts: EleventyEsbuildOptions

  constructor(opts: EleventyEsbuildOptions) {
    this.#opts = opts
  }

  async build(f: string): Promise<BuildResult> {
    return EleventyEsbuild.#queue.add(async () => {
      const c = EleventyEsbuild.#cache.get(f)
      if (c !== undefined) {
        return c
      }

      // Esbuild populates the console itself.
      const a = await build({
        bundle: true,
        entryPoints: [f],
        outdir: tmpdir(),
        write: false,
        ...this.#opts.buildOptions,
      })
      if (a.errors.length !== 0) {
        return
      }
      if (!a.outputFiles) {
        console.error("No output files")
        return
      }

      const s = a.outputFiles[0].contents

      const h = this.#hash(s)
      let b = this.#base(f, h)
      if (this.#opts.filenameFormat) {
        b = this.#opts.filenameFormat(h, f)
      }
      const o = path.join(this.#opts.outputDir, b)
      await writeFile(o, s)

      const r = new BuildResult()
      if (this.#opts.buildOptions && this.#opts.buildOptions.format === "esm") {
        r.type = "module"
      }
      r.src = `${this.#opts.urlPath}${b}`

      EleventyEsbuild.#cache.set(f, r)

      return r
    })
  }

  #base(f: string, h: string): string {
    const p = path.parse(f)
    p.name = `${p.name}-${h}`
    p.base = `${p.name}${p.ext}`
    return p.base
  }

  // https://github.com/sindresorhus/rev-hash/
  #hash(c: string | Uint8Array): string {
    return createHash("md5").update(c).digest("hex").slice(0, 10)
  }
}
