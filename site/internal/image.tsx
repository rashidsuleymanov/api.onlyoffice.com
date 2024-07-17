import path from "node:path"
import {rootDir} from "@onlyoffice/eleventy-env"
import {type ImageOptions} from "@11ty/eleventy-img"
import {modify} from "@onlyoffice/hast-util-eleventy-img"
import {generate} from "@onlyoffice/preact-eleventy-img"
import {useSuspense} from "@onlyoffice/preact-suspense"
import {type Root} from "hast"
import {type HTMLAttributes} from "preact/compat"
import {type JSX, h} from "preact"
import {visit} from "unist-util-visit"
import {type VFile} from "vfile"

export function Image(p: HTMLAttributes<HTMLImageElement>): JSX.Element {
  let r: JSX.Element | null = null

  p = Object.assign({}, p)
  p.style = Object.assign({}, p.style)

  // todo: this is a temporary solution during the migration.
  if (!p.alt) {
    p.alt = ""
  }

  if (p.src === undefined) {
    throw new Error("The 'src' attribute is required, but missing.")
  }
  if (typeof p.src !== "string") {
    throw new Error("The 'src' attribute must be a string.")
  }
  if (!URL.canParse(p.src) && !path.isAbsolute(p.src)) {
    throw new Error("The 'src' attribute must be an absolute URL.")
  }

  if (path.isAbsolute(p.src)) {
    p.src = decodeURIComponent(`.${p.src}`)
  }

  if (p.width !== undefined) {
    if (typeof p.style === "string") {
      throw new Error("The 'style' attribute must not be a string.")
    }
    if (typeof p.style === "object" && "peek" in p.style) {
      throw new Error("The 'style' attribute must not be a signal.")
    }
    if (typeof p.width === "object" && "peek" in p.width) {
      throw new Error("The 'width' attribute must not be a signal.")
    }
    if (p.width !== -1) {
      p.style.maxWidth = p.width
    }
  }

  if (p.height !== undefined) {
    if (typeof p.style === "string") {
      throw new Error("The 'style' attribute must not be a string.")
    }
    if (typeof p.style === "object" && "peek" in p.style) {
      throw new Error("The 'style' attribute must not be a signal.")
    }
    if (typeof p.height === "object" && "peek" in p.height) {
      throw new Error("The 'height' attribute must not be a signal.")
    }
    if (p.height !== -1) {
      p.style.maxHeight = p.height
    }
  }

  const o = options(p.src)
  const c = <img decoding="async" loading="lazy" {...p} />

  const Suspense = useSuspense(async () => {
    r = await generate({...o, children: c})
  })

  return <Suspense>{() => r}</Suspense>
}

export interface RehypeImageTransform {
  (tree: Root, file: VFile): Promise<unknown>
}

export function rehypeImage(): RehypeImageTransform {
  return async function (t, f) {
    let r = Promise.resolve()

    visit(t, "element", (n, i, pa) => {
      if (n.tagName !== "img") {
        return
      }

      const p = n.properties
      if (!p.style) {
        p.style = ""
      }

      // todo: this is temporary solutions during the migration.
      if (!p.alt) {
        p.alt = ""
      }
      if (p.src && typeof p.src === "string" && p.src.startsWith("/content")) {
        return
      }

      if (typeof p.src !== "string") {
        return
      }

      if (!URL.canParse(p.src)) {
        let u = ""
        if (path.isAbsolute(p.src)) {
          u = `.${p.src}`
        } else {
          u = path.dirname(f.path)
          u = path.resolve(u, p.src)
          u = u.replace(rootDir(), ".")
        }
        p.src = decodeURIComponent(u)
      }

      if (p.width !== undefined && p.width !== null) {
        if (typeof p.style !== "string") {
          throw new Error("The 'style' attribute must be a string.")
        }
        if (typeof p.width !== "string" && typeof p.width !== "number") {
          throw new Error("The 'width' attribute must be a string or a number.")
        }
        let v = ""
        if (typeof p.width === "number") {
          v = `${p.width}px`
        } else {
          v = p.width
        }
        p.style += `max-width: ${v};`
      }

      if (p.height !== undefined && p.height !== null) {
        if (typeof p.style !== "string") {
          throw new Error("The 'style' attribute must be a string.")
        }
        if (typeof p.height !== "string" && typeof p.height !== "number") {
          throw new Error("The 'height' attribute must be a string or a number.")
        }
        let v = ""
        if (typeof p.height === "number") {
          v = `${p.height}px`
        } else {
          v = p.height
        }
        p.style += `max-height: ${v};`
      }

      const o = options(p.src)
      n.properties = {decoding: "async", loading: "lazy", ...p}

      // @ts-ignore conflict with mdx extensions
      r = modify(o, n, i, pa)
    })

    await r
    return t
  }
}

function options(s: string): ImageOptions {
  const o: ImageOptions = {
    formats: ["jpg", "webp"],
    urlPath: "/assets/",
    outputDir: "dist/assets/",
    filenameFormat(id: string, s: string, w: number, f: string) {
      const e = path.extname(s)
      const n = path.basename(s, e)
      return `${n}-${w}w-${id}.${f}`
    },
  }

  const e = path.extname(s)
  if (e === ".svg") {
    o.formats = ["svg"]
  }

  return o
}
