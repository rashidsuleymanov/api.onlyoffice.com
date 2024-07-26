import {createHash} from "node:crypto"
import {writeFile} from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import {Console} from "@onlyoffice/console"
import {type BundleAsyncOptions, type CustomAtRules, bundleAsync} from "lightningcss"
import {default as PQueue} from "p-queue"
import pack from "../package.json" with {type: "json"}

// In the future, we should replace our custom logger with the eleventy one
// (see for the ConsoleLogger type for the @onlyoffice/eleventy-types).
const console = new Console(pack.name, process.stdout, process.stderr)

export interface EleventyLightningcssOptions {
  urlPath: string
  outputDir: string
  buildOptions?: Omit<BundleAsyncOptions<CustomAtRules>, "filename">
}

export class BuildResult {
  rel = ""
  href = ""
}

export class EleventyLightningcss {
  static #queue = new PQueue({concurrency: 1})
  static #cache = new Map<string, BuildResult>()

  #opts: EleventyLightningcssOptions

  constructor(opts: EleventyLightningcssOptions) {
    this.#opts = opts
  }

  async build(f: string): Promise<BuildResult> {
    return EleventyLightningcss.#queue.add(async () => {
      const c = EleventyLightningcss.#cache.get(f)
      if (c !== undefined) {
        return c
      }

      const a = await bundleAsync({
        filename: f,
        ...this.#opts.buildOptions,
      })
      if (a.warnings) {
        for (const w of a.warnings) {
          console.warn(w.message)
        }
      }

      const h = this.#hash(a.code)
      const b = this.#base(f, h)
      const o = path.join(this.#opts.outputDir, b)
      await writeFile(o, a.code)

      const r = new BuildResult()
      r.rel = "stylesheet"
      r.href = `${this.#opts.urlPath}${b}`

      EleventyLightningcss.#cache.set(f, r)

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
