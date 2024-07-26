import path from "node:path"
import {isBuild} from "@onlyoffice/eleventy-env"
import {EleventyLightningcss} from "@onlyoffice/eleventy-lightningcss"
import {useSuspense} from "@onlyoffice/preact-suspense"
import browserslist from "browserslist"
import {browserslistToTargets} from "lightningcss"
import {type HTMLAttributes} from "preact/compat"
import {type JSX, h} from "preact"

export function Style({...p}: HTMLAttributes<HTMLLinkElement>): JSX.Element {
  let r: JSX.Element | null = null

  let f = p.href
  if (!f) {
    throw new Error("The 'href' attribute is required, but missing.")
  }
  if (typeof f !== "string") {
    throw new Error("The 'href' attribute must be a string.")
  }
  if (path.isAbsolute(f)) {
    f = decodeURIComponent(`.${f}`)
  }
  delete p.href

  const Suspense = useSuspense(async () => {
    const l = browserslist("> 0.2%")
    const t = browserslistToTargets(l)
    const e = new EleventyLightningcss({
      urlPath: "/assets/",
      outputDir: "dist/assets/",
      buildOptions: {
        drafts: {
          customMedia: true,
        },
        minify: isBuild(),
        targets: t,
      },
    })
    const b = await e.build(f)
    r = <link rel={b.rel} href={b.href} {...p} />
  })

  return <Suspense>{() => r}</Suspense>
}
