import path from "node:path"
import {URL} from "node:url"
import {Sitemap} from "@onlyoffice/eleventy-sitemap"
import {rootDir} from "@onlyoffice/eleventy-env"
import {type Root} from "hast"
import {type HTMLAttributes} from "preact/compat"
import {type JSX, h} from "preact"
import {visit} from "unist-util-visit"
import {type VFile} from "vfile"

export function Link(p: HTMLAttributes<HTMLAnchorElement>): JSX.Element {
  p = {...p}

  if (p.href === undefined) {
    throw new Error("The 'href' attribute is required, but missing.")
  }
  if (typeof p.href !== "string") {
    throw new Error("The 'href' attribute must be a string.")
  }
  if (!URL.canParse(p.href) && !path.isAbsolute(p.href)) {
    throw new Error("The 'href' attribute must be an absolute URL.")
  }

  if (path.isAbsolute(p.href)) {
    p.href = resolve(p.href, "")
  }

  return <a {...p}></a>
}

export interface RehypeLinkTransform {
  (tree: Root, file: VFile): void
}

export function rehypeLink(): RehypeLinkTransform {
  return function (t, f) {
    visit(t, "element", (n) => {
      if (n.tagName !== "a") {
        return
      }

      const p = n.properties
      if (
        typeof p.href !== "string" ||
        URL.canParse(p.href) ||
        p.href.startsWith("#")
      ) {
        return
      }

      n.properties.href = resolve(p.href, f.path)
    })
  }
}

function resolve(a: string, b: string): string {
  const s = Sitemap.shared

  const u = new URL(a, "http://e.c/")
  let t = ""
  if (path.isAbsolute(a)) {
    t = `.${u.pathname}`
  } else {
    t = path.dirname(b)
    t = path.resolve(t, a)
    t = t.replace(rootDir(), ".")
    t = t.replace(u.hash, "")
  }
  t = decodeURIComponent(t)

  const e = s.find(t, "path")
  if (!e) {
    throw new Error(`Expected an entity for the path: ${t}`)
  }
  if (e.type !== "page") {
    throw new Error(`Expected a page entity for the path: ${t}`)
  }

  return `${e.url}${u.hash}`
}
