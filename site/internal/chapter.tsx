import {Sitemap, type SitemapEntity} from "@onlyoffice/eleventy-sitemap"
import {type ChildrenIncludable} from "@onlyoffice/preact-types"
import {
  Chapter as SChapter,
  ChapterContent,
  ChapterNavigation as SChapterNavigation,
  SearchClear,
  SearchContainer,
  SearchField,
  SearchHidable,
  SearchOutput,
  SearchPlaceholder,
  SearchTemplate,
} from "@onlyoffice/site-kit"
import {
  Breadcrumb as UBreadcrumb,
  BreadcrumbCrumb,
  Content,
} from "@onlyoffice/ui-kit"
import {Fragment, type JSX, h} from "preact"
import {Tree} from "../components/tree/tree.ts"
import {TableOfContents} from "./table-of-contents.tsx"
import {Help} from "./help.tsx"

declare module "@onlyoffice/eleventy-types" {
  interface Data {
    chapter?: ChapterData
  }

  interface EleventyComputed {
    chapter?(data: Data): ChapterData | undefined
  }
}

export interface ChapterData {
  title?: string
  tableOfContents?: boolean
  help?: boolean
}

export class ChapterDatum implements ChapterData {
  title = ""
  tableOfContents = false
  help = true

  static merge(a: ChapterData, b: ChapterData): ChapterData {
    const c = new ChapterDatum()

    if (b.title) {
      c.title = b.title
    } else if (a.title) {
      c.title = a.title
    }

    if (b.tableOfContents) {
      c.tableOfContents = b.tableOfContents
    } else if (a.tableOfContents) {
      c.tableOfContents = a.tableOfContents
    }

    if (b.help) {
      c.help = b.help
    } else if (a.help) {
      c.help = a.help
    }

    return c
  }
}

export interface ChapterProperties extends ChildrenIncludable {
  url: string
}

export function Chapter(p: ChapterProperties): JSX.Element {
  const s = Sitemap.shared

  const ue = s.find(p.url, "url")
  if (!ue) {
    throw new Error(`Entity not found: ${p.url}`)
  }
  if (ue.type !== "page") {
    throw new Error(`Current entity is not a page: ${ue.type} (${ue.id})`)
  }

  const ud = ue.data.chapter
  if (!ud) {
    throw new Error(`Chapter data not found: ${ue.url} (${ue.id})`)
  }

  const ut = s.trace(ue)
  if (ut.length < 3) {
    throw new Error(`Chapter layout requires at least three levels: ${ue.url} (${ue.id})`)
  }

  const [, pi, hi] = ut

  const pe = s.find(pi, "id")
  if (!pe) {
    throw new Error(`Entity not found: ${pi}`)
  }
  if (pe.type !== "page") {
    throw new Error(`Part entity is not a page: ${pe.type} (${pe.id})`)
  }

  const he = s.find(hi, "id")
  if (!he) {
    throw new Error(`Entity not found: ${hi}`)
  }
  if (he.type !== "page") {
    throw new Error(`Chapter entity is not a page: ${he.type} (${he.id})`)
  }

  const hd = he.data.chapter
  if (!hd) {
    throw new Error(`Chapter data not found: ${he.url} (${he.id})`)
  }

  return <SChapter
    data-part={pe.title}
    data-chapter={hd.title}
    data-pagefind-filter="part[data-part], chapter[data-chapter]"
  >
    <SChapterNavigation>
      <SearchContainer
        search-options={{
          filters: {
            part: [pe.title],
            chapter: [hd.title],
          },
        }}
      >
        <SearchPlaceholder>Type <kbd>/</kbd> to search</SearchPlaceholder>
        <SearchField label="Search" />
        <SearchClear label="Clear" />
        <SearchTemplate>
          <li>
            <p><a data-search-container-link></a></p>
            <p data-search-container-matches></p>
          </li>
        </SearchTemplate>
      </SearchContainer>
      <ChapterNavigation level={2} url={p.url} />
    </SChapterNavigation>
    <ChapterContent>
      <Breadcrumb url={p.url} />
      <SearchHidable>
        <Content>
          <h1>{ud.title}</h1>
          {p.children}
          {ud.tableOfContents && <TableOfContents url={p.url} depth={1} />}
        </Content>
      </SearchHidable>
      <SearchOutput>
        <Content>
          <h1 aria-live="polite"><span data-search-container-counter></span> Results</h1>
          <ol data-search-container-results></ol>
        </Content>
      </SearchOutput>
      {ud.help && <Help current={p.url} />}
    </ChapterContent>
  </SChapter>
}

export interface ChapterNavigationProperties {
  level: number
  url: string
}

export function ChapterNavigation(p: ChapterNavigationProperties): JSX.Element | null {
  const s = Sitemap.shared

  let l = p.level
  let e = s.find("/", "url")
  while (true) {
    if (!e || l === 0) {
      break
    }
    for (const id of e.children) {
      const c = s.find(id, "id")
      if (!c) {
        continue
      }
      let u = ""
      if (c.type === "group") {
        const b = s.find(c.parent, "id")
        if (!b || b.type !== "page") {
          continue
        }
        u = b.url
      } else if (c.type === "page") {
        u = c.url
      } else {
        // @ts-expect-error
        throw new Error(`Unexpected entity type: ${c.type}`)
      }
      if (p.url.startsWith(u)) {
        e = c
        l -= 1
        break
      }
    }
  }

  if (!e) {
    return null
  }

  return <Tree>
    {e.children.map((id) => {
      const e = s.find(id, "id")
      if (!e || e.type !== "page") {
        return null
      }
      return <Tree.Group>
        <Tree.Link href={e.url} active={p.url === e.url}>{e.title}</Tree.Link>
        <Sub e={e} />
      </Tree.Group>
    })}
  </Tree>

  function Sub({e}: {e: SitemapEntity}): JSX.Element | null {
    return <>{e.children.map((id) => {
      const e = s.find(id, "id")
      if (!e) {
        return null
      }
      if (e.type === "group") {
        if (e.children.length === 0) {
          return null
        }
        const r = s.find(e.parent, "id")
        if (!r) {
          return null
        }
        if (r.type !== "page") {
          throw new Error(`Nested group is not supported: ${e.id}`)
        }
        const b = s.find(p.url, "url")
        if (!b) {
          return null
        }
        return <Tree.Item expanded={e.children.includes(b.id)}>
          <Tree.Link href="" active={false}>{e.title}</Tree.Link>
          <Sub e={e} />
        </Tree.Item>
      }
      if (e.type === "page") {
        return <Tree.Item expanded={p.url.startsWith(e.url)}>
          <Tree.Link href={e.url} active={p.url === e.url}>{e.title}</Tree.Link>
          {e.children.length !== 0 && <Sub e={e} />}
        </Tree.Item>
      }
      // @ts-expect-error
      throw new Error(`Unexpected entity type: ${e.type}`)
    })}</>
  }
}

export interface BreadcrumbProperties {
  url: string
}

export function Breadcrumb(p: BreadcrumbProperties): JSX.Element | null {
  const a: JSX.Element[] = []
  const s = Sitemap.shared

  let e = s.find(p.url, "url")
  while (true) {
    while (e && e.type === "group") {
      e = s.find(e.parent, "id")
    }
    if (!e || e.url === "/") {
      break
    }
    a.unshift(<BreadcrumbCrumb href={e.url}>{e.title}</BreadcrumbCrumb>)
    e = s.find(e.parent, "id")
  }

  if (a.length === 0) {
    return null
  }

  return <UBreadcrumb>{a}</UBreadcrumb>
}
