import {type SitemapData} from "@onlyoffice/eleventy-sitemap"
import {type Data} from "@onlyoffice/eleventy-types"
import {cutPrefix, cutSuffix} from "@onlyoffice/strings"
import {slug} from "github-slugger"
import {type GlobalNavigationData, GlobalNavigationDatum} from "@/internal/global-navigation.tsx"
import {type HomeData, HomeDatum} from "@/internal/home.tsx"

declare module "@onlyoffice/eleventy-types" {
  interface Data {
    title?: string
    items?: any[]
    crosslink?(data: Data, s: string): string
    slug?(data: Data): string
    defaultSitemap?(d: Data): SitemapData
    defaultHome?(data: Data): HomeData
    defaultGlobalNavigation?(data: Data): GlobalNavigationData
  }

  interface EleventyComputed {
    title?(data?: Data): string | undefined
    layout?(data?: Data): string | undefined
  }

  interface Pagination {
    items?: any[]
  }
}

export function data(): Data {
  return {
    layout: "chapter",
    tags: ["navigation"],

    permalink(data) {
      let p = data.page.filePathStem
      p = cutPrefix(p, "/pages")

      if (data.slug) {
        p = cutSuffix(p, data.page.fileSlug)
        p += data.slug(data)
      }

      p = p.split("/").map((s) => slug(s)).join("/")
      p += `.${data.page.outputFileExtension}`

      return p
    },

    crosslink(data, s) {
      let p = data.page.filePathStem
      p = cutPrefix(p, "/pages")
      p = cutSuffix(p, data.page.fileSlug)
      p += s
      p = p.split("/").map((s) => slug(s)).join("/")
      return p
    },

    defaultSitemap(d) {
      return {
        title: d.title,
        url: d.page?.url,
        path: d.page?.inputPath,
        order: d.order || 0,
        data: d,
      }
    },

    sitemap(d) {
      return d.defaultSitemap(d)
    },

    defaultHome(d) {
      const m = new HomeDatum()
      m.title = d.title
      return m
    },

    defaultGlobalNavigation(d) {
      const m = new GlobalNavigationDatum()
      m.icon = d.icon
      m.title = d.title
      m.path = d.page.inputPath.slice(1)
      return m
    },

    eleventyComputed: {
      title(data) {
        if (!data) {
          return undefined
        }
        if (!data.title) {
          return data.page.fileSlug
        }
        return data.title
      },

      layout(data) {
        if (!data || !data.layout) {
          return undefined
        }
        return `${data.layout}.tsx`
      },

      home(d) {
        const a = d.defaultHome(d)
        const b = d.home
        if (!b) {
          return a
        }
        return HomeDatum.merge(a, b)
      },

      globalNavigation(d) {
        const a = d.defaultGlobalNavigation(d)
        const b = d.globalNavigation
        if (!b) {
          return a
        }
        return GlobalNavigationDatum.merge(a, b)
      },
    },
  }
}
