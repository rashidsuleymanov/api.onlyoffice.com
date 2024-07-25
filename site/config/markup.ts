import { tmpdir } from "node:os"
import type { UserConfig } from "@11ty/eleventy"
import { build } from "esbuild"
import requireFromString from "require-from-string"

// todo: refactor it.
// add support for hot reload
// profile memory usage

export function markupPlugin(uc: UserConfig): void {
  // https://github.com/11ty/eleventy/issues/235
  uc.addTemplateFormats("11ty.js")
  uc.addExtension("tsx", {
    key: "11ty.js"
  })

  uc.setDataFileSuffixes([".data"])
  uc.addDataExtension("ts", {
    async parser(_: string, f: string) {
      const r = await build({
        entryPoints: [f],
        format: "cjs",
        outdir: tmpdir(),
        write: false
      })
      const m = requireFromString(r.outputFiles[0].text)
      return m.data()
    }
  })
}
