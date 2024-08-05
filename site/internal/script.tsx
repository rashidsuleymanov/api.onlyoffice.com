import path from "node:path"
import {isBuild} from "@onlyoffice/eleventy-env"
import {EleventyEsbuild, type EleventyEsbuildOptions} from "@onlyoffice/eleventy-esbuild"
import {Config} from "@onlyoffice/site-config"
import {useSuspense} from "@onlyoffice/preact-suspense"
import {type HTMLAttributes} from "preact/compat"
import {type JSX, h} from "preact"

export interface ScriptProperties extends HTMLAttributes<HTMLScriptElement> {
  inline?: boolean
}

export function Script({...p}: ScriptProperties): JSX.Element {
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

  const n = p.inline
  const o: EleventyEsbuildOptions = {
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
  }
  if (!n) {
    o.urlPath = "/assets/"
    o.outputDir = "dist/assets/"
    o.filenameFormat = function filenameFormat(id, s) {
      const e = path.extname(s)
      const n = path.basename(s, e)
      return `${n}-${id}.js`
    }
  }
  delete p.inline

  const Suspense = useSuspense(async () => {
    const e = new EleventyEsbuild(o)
    const b = await e.build(f)
    if (!n) {
      r = <script type={b.type} src={b.src} {...p} />
    } else {
      r = <script type={b.type} {...p} dangerouslySetInnerHTML={{__html: b.content}} />
    }
  })

  return <Suspense>{() => r}</Suspense>
}
