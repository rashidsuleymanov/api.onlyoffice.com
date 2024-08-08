import path from "node:path"
import {URL} from "node:url"
import {Sitemap} from "@onlyoffice/eleventy-sitemap"
import {rootDir} from "@onlyoffice/eleventy-env"
import * as pate from "@onlyoffice/node-path"
import {cutPrefix, cutSuffix} from "@onlyoffice/strings"
import {type Root} from "hast"
import {type HTMLAttributes} from "preact/compat"
import {type JSX, h} from "preact"
import {visit} from "unist-util-visit"
import {type VFile} from "vfile"

export interface LinkProperties extends HTMLAttributes<HTMLAnchorElement> {
  file?: string
}

export function Link(p: LinkProperties): JSX.Element {
  p = {...p}
  if (!p.file) {
    p.file = ""
  }

  if (p.href === undefined) {
    throw new Error("The 'href' attribute is required, but missing.")
  }
  if (typeof p.href !== "string") {
    throw new Error("The 'href' attribute must be a string.")
  }

  p.href = resolve(p.file, p.href)

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

      if (p.href === undefined) {
        throw new Error("The 'href' attribute is required, but missing.")
      }
      if (typeof p.href !== "string") {
        throw new Error("The 'href' attribute must be a string.")
      }

      n.properties.href = resolve(f.path, p.href)
    })
  }
}

function resolve(a: string, b: string): string {
  const s = Sitemap.shared

  if (URL.canParse(b)) {
    return b
  }

  const h = pate.hash(b)
  if (h === b) {
    return b
  }

  let p = b

  if (!path.isAbsolute(b)) {
    if (!a) {
      throw new Error("The 'a' is required when the 'b' is relative.")
    }
    p = path.dirname(a)
    p = pate.resolve(p, b)
    p = cutPrefix(p, rootDir())
    p = cutSuffix(p, h)
  }

  p = decodeURIComponent(`.${p}`)

  const e = s.find(p, "path")
  if (!e) {
    throw new Error(`Expected an entity for the path: ${p}`)
  }
  if (e.type !== "page") {
    throw new Error(`Expected a page entity for the path: ${p}`)
  }

  return `${e.url}${h}`
}
