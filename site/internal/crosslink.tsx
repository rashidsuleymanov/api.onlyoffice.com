import path from "node:path"
import {Sitemap} from "@onlyoffice/eleventy-sitemap"
import {rootDir} from "@onlyoffice/eleventy-env"
import {type Element, type Root} from "hast"
import {visit} from "unist-util-visit"
import {type VFile} from "vfile"

export interface RehypeCrosslinkTransform {
  (tree: Root, file: VFile): void
}

export function rehypeCrosslink(): RehypeCrosslinkTransform {
  return function (t, f) {
    visit(t, "element", (n) => {
      switch (n.tagName) {
      case "a":
        a(f, n)
        break
      case "img":
        img(f, n)
        break
      }
    })
  }

  function a(f: VFile, n: Element): void {
    const s = Sitemap.shared

    const u = n.properties.href
    if (!u || typeof u !== "string") {
      return
    }

    if (URL.canParse(u) || u.startsWith("#")) {
      return
    }

    const p = resolve(f, u)
    if (!p) {
      return
    }

    const e = s.find(p, "path")
    if (!e || e.type !== "page") {
      return
    }

    n.properties.href = e.url
  }

  function img(f: VFile, n: Element): void {
    const u = n.properties.src
    if (!u || typeof u !== "string") {
      return
    }

    if (URL.canParse(u)) {
      return
    }

    const p = resolve(f, u)
    if (!p) {
      return
    }

    n.properties.src = p
  }

  function resolve(f: VFile, u: string): string {
    let p = ""

    if (path.isAbsolute(u)) {
      p = `.${u}`
    } else {
      p = path.dirname(f.path)
      p = path.resolve(p, u)
      p = p.replace(rootDir(), ".")
    }

    if (p) {
      p = decodeURIComponent(p)
    }

    return p
  }
}
