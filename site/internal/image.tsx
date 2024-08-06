import path from "node:path"
import {type ImageOptions} from "@11ty/eleventy-img"
import {isBuild, rootDir} from "@onlyoffice/eleventy-env"
import {type UserConfig} from "@onlyoffice/eleventy-types"
import {modify} from "@onlyoffice/hast-util-eleventy-img"
import * as pate from "@onlyoffice/node-path"
import {generate} from "@onlyoffice/preact-eleventy-img"
import {useSuspense} from "@onlyoffice/preact-suspense"
import {cutPrefix} from "@onlyoffice/strings"
import {type Root} from "hast"
import {type HTMLAttributes} from "preact/compat"
import {type JSX, h} from "preact"
import {visit} from "unist-util-visit"
import {type VFile} from "vfile"

export function Image(p: HTMLAttributes<HTMLImageElement>): JSX.Element {
  let r: JSX.Element | null = null

  p = Object.assign({}, p)
  p.style = Object.assign({}, p.style)

  if (!p.alt) {
    throw new Error("The 'alt' attribute is required, but missing.")
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

  p.src = resolve(p.src, "")

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

  p.decoding = "async"
  p.loading = "lazy"

  const c = <img {...p} />

  if (!isBuild()) {
    return c
  }

  const o = options(p.src)

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

      if (!p.alt) {
        throw new Error("The 'alt' attribute is required, but missing.")
      }

      if (p.src === undefined) {
        throw new Error("The 'src' attribute is required, but missing.")
      }
      if (typeof p.src !== "string") {
        throw new Error("The 'src' attribute must be a string.")
      }

      p.src = resolve(p.src, f.path)

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

      n.properties.decoding = "async"
      n.properties.loading = "lazy"

      if (!isBuild()) {
        return
      }

      const o = options(p.src)
      // @ts-ignore conflict with mdx extensions
      r = modify(o, n, i, pa)
    })

    await r
    return t
  }
}

export function eleventyImage(uc: UserConfig): void {
  if (!isBuild()) {
    uc.addPassthroughCopy("assets/images")
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
  switch (e) {
  case ".svg":
    o.formats = ["svg"]
    break
  case ".gif":
    o.formats = ["gif", "webp"]
    o.sharpOptions = {
      animated: true,
      limitInputPixels: false,
    }
    break
  }

  return o
}

function resolve(a: string, b: string): string {
  if (URL.canParse(a)) {
    return a
  }

  let p = a

  if (!path.isAbsolute(a)) {
    p = path.dirname(b)
    p = pate.resolve(p, a)
    p = cutPrefix(p, rootDir())
  }

  if (isBuild()) {
    p = decodeURIComponent(`.${p}`)
  }

  return p
}
