import path from "node:path"
import {isBuild} from "@onlyoffice/eleventy-env"
import {EleventyEsbuild} from "@onlyoffice/eleventy-esbuild"
import {Config} from "@onlyoffice/site-config"
import {useSuspense} from "@onlyoffice/preact-suspense"
import {type HTMLAttributes} from "preact/compat"
import {type JSX, h} from "preact"

export function Script({...p}: HTMLAttributes<HTMLScriptElement>): JSX.Element {
  const c = Config.shared

  let r: JSX.Element | null = null

  let f = p.src
  if (!f) {
    throw new Error("The 'src' attribute is required, but missing.")
  }
  if (typeof f !== "string") {
    throw new Error("The 'src' attribute must be a string.")
  }
  if (path.isAbsolute(f)) {
    f = decodeURIComponent(`.${f}`)
  }
  delete p.src

  const Suspense = useSuspense(async () => {
    const e = new EleventyEsbuild({
      urlPath: "/assets/",
      outputDir: "dist/assets/",
      filenameFormat(id, s) {
        const e = path.extname(s)
        const n = path.basename(s, e)
        return `${n}-${id}.js`
      },
      buildOptions: {
        define: {
          "import.meta.env": JSON.stringify({
            DEV: !isBuild(),
            CONFIG_SERVER_BASE_URL: c.server.baseUrl,
          }),
        },
        format: "esm",
        minify: isBuild(),
        platform: "browser",
      },
    })
    const b = await e.build(f)
    r = <script defer type={b.type} src={b.src} {...p} />
  })

  return <Suspense>{() => r}</Suspense>
}
