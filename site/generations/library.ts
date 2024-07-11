import {type Data} from "@onlyoffice/eleventy-types"
import {type Declaration, type Reference, type Token} from "@onlyoffice/library-declaration"
import {type Resource} from "@onlyoffice/library-resource"

export function data({list, retrieve}: Resource): Data {
  return {
    layout: "library-declaration",

    items: list(),
    pagination: {
      data: "items",
      size: 1,
      addAllPagesToCollections: true
    },

    slug(data): string {
      if (!data.pagination || !data.pagination.items) {
        throw new Error("No pagination")
      }
      const [d]: Declaration[] = data.pagination.items
      const p = d.id.split("#").join("/")
      return `${p}/index`
    },

    sitemap(data) {
      const s = data.defaultSitemap(data)

      s.groups = function groups() {
        const [d]: Declaration[] = data.pagination.items
        if (d.kind !== "class") {
          return []
        }
        return [
          {title: "Constructors"},
          {title: "Events"},
          {title: "Methods"},
          {title: "Properties"},
        ]
      }

      s.group = function group() {
        const [d]: Declaration[] = data.pagination.items
        switch (d.kind) {
        case "constructor":
          return "Constructors"
        case "event":
          return "Events"
        case "method":
          return "Methods"
        case "property":
          return "Properties"
        }
        return ""
      }

      return s
    },

    onRetrieve(r: Reference): Declaration | undefined {
      return retrieve(r.id)
    },

    eleventyComputed: {
      title(data) {
        if (!data || !data.pagination || !data.pagination.items) {
          throw new Error("No pagination")
        }
        return data.pagination.items[0].title
      },

      onLink(data) {
        return function onLink(t: Token): string | undefined {
          if (t.type !== "reference") {
            return
          }

          const d = retrieve(t.id)
          if (!d) {
            return
          }

          const s = d.id.split("#").join("/")
          return data.crosslink(data, `${s}/`)
        }
      }
    }
  }
}
