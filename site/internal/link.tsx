import path from "node:path"
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
    console.log(p.href)
    throw new Error("The 'href' attribute must be an absolute URL.")
  }

  if (path.isAbsolute(p.href)) {
    const s = Sitemap.shared
    const u = decodeURIComponent(`.${p.href}`)

    const e = s.find(u, "path")
    if (!e) {
      throw new Error(`Expected an entity for the path: ${u}`)
    }
    if (e.type !== "page") {
      throw new Error(`Expected a page entity for the path: ${u}`)
    }

    p.href = e.url
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

      const s = Sitemap.shared

      let u = ""
      if (path.isAbsolute(p.href)) {
        u = `.${p.href}`
      } else {
        u = path.dirname(f.path)
        u = path.resolve(u, p.href)
        u = u.replace(rootDir(), ".")
      }
      u = decodeURIComponent(u)

      const e = s.find(u, "path")
      if (!e) {
        // todo: this is a temporary solution during the migration.
        return
        // throw new Error(`Expected an entity for the path: ${u}`)
      }
      if (e.type !== "page") {
        throw new Error(`Expected a page entity for the path: ${u}`)
      }

      n.properties.href = e.url
    })
  }
}
