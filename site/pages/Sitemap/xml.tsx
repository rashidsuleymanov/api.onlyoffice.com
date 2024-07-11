import {Sitemap} from "@onlyoffice/eleventy-sitemap"
import {type Data} from "@onlyoffice/eleventy-types"
import {Config} from "@onlyoffice/site-config"
import {Fragment, type JSX, h} from "preact"

export function data(): Data {
  return {
    permalink: "/sitemap.xml",
    layout: "xml",
    eleventyExcludeFromCollections: true
  }
}

export function render(): JSX.Element {
  const s = Sitemap.shared
  const c = Config.read()
  return <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {s.entities.map((e) => {
      if (e.type !== "page") {
        return <></>
      }
      return <url>
        <loc>{c.baseUrl}{e.url}</loc>
        <lastmod>{e.data.page.date.toISOString()}</lastmod>
      </url>
    })}
  </urlset>
}
