import {Sitemap, type SitemapEntity} from "@onlyoffice/eleventy-sitemap"
import {Callback} from "@onlyoffice/preact-callback"
import {Fragment, type JSX, h} from "preact"

export interface TableOfContentsProperties {
  url: string
  depth?: number
}

export function TableOfContents(p: TableOfContentsProperties): JSX.Element {
  const s = Sitemap.shared
  const {url, depth = 1} = p
  const e = s.find(url, "url")
  if (!e || e.type !== "page" || e.children.length === 0) {
    return <></>
  }
  let c = -1
  return <List e={e} />

  function List({e}: {e: SitemapEntity}): JSX.Element {
    if (c === depth && depth !== -1) {
      return <></>
    }
    c += 1
    return <ul>
      {e.children.map((id) => <Item id={id} />)}
      <Callback>{() => {
        c -= 1
      }}</Callback>
    </ul>
  }

  function Item({id}: {id: string}): JSX.Element {
    const e = s.find(id, "id")
    if (!e || e.children.length === 0) {
      return <></>
    }
    if (e.type === "group") {
      return <li>
        <span>{e.title}</span>
        <List e={e} />
      </li>
    }
    if (e.type === "page") {
      return <li>
        <a href={e.url}>{e.title}</a>
        <List e={e} />
      </li>
    }
    // @ts-expect-error
    throw new Error(`Unexpected entity type: ${e.type}`)
  }
}
