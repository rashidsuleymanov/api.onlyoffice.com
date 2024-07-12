import {type SitemapData} from "@onlyoffice/eleventy-sitemap"
import {type Data} from "@onlyoffice/eleventy-types"
import {cutPrefix, cutSuffix} from "@onlyoffice/strings"
import {slug} from "github-slugger"
import {type GlobalNavigationData, GlobalNavigationDatum} from "@/internal/global-navigation.tsx"
import {type HelpData, HelpDatum} from "@/internal/help.tsx"
import {type HomeData, HomeDatum} from "@/internal/home.tsx"
import {type PartData, PartDatum} from "@/internal/part.tsx"

declare module "@onlyoffice/eleventy-types" {
  interface Data {
    title?: string
    items?: any[]
    crosslink?(data: Data, s: string): string
    slug?(data: Data): string
    defaultSitemap?(d: Data): SitemapData
    defaultHome?(data: Data): HomeData
    defaultPart?(data: Data): PartData
    defaultHelp?(data: Data): HelpData
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

    defaultPart(d) {
      const m = new PartDatum()
      m.title = d.title
      m.description = d.description
      return m
    },

    defaultHelp(d) {
      const m = new HelpDatum()
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

      part(d) {
        const a = d.defaultPart(d)
        const b = d.part
        if (!b) {
          return a
        }
        return PartDatum.merge(a, b)
      },

      help(d) {
        const a = d.defaultHelp(d)
        const b = d.help
        if (!b) {
          return
        }
        return HelpDatum.merge(a, b)
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
