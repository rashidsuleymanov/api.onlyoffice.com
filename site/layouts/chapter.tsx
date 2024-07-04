import {Sitemap, type SitemapEntity} from "@onlyoffice/eleventy-sitemap"
import type {Context, Data} from "@onlyoffice/eleventy-types"
import {
  Chapter,
  ChapterContent,
  ChapterNavigation,
  SearchClear,
  SearchContainer,
  SearchField,
  SearchHidable,
  SearchOutput,
  SearchPlaceholder,
  SearchTemplate,
  Help
} from "@onlyoffice/site-kit"
import {GithubIcon} from "@onlyoffice/ui-icons/rich/24.tsx"
import {Breadcrumb, BreadcrumbCrumb, Content} from "@onlyoffice/ui-kit"
import {type JSX, Fragment, h} from "preact"
import {Tree} from "../components/tree/tree.ts"

export function data(): Data {
  return {
    layout: "page"
  }
}

export function render({content, ...ctx}: Context): JSX.Element {
  const s = Sitemap.instance

  const pe = s.page(ctx.page.url)
  if (!pe) {
    throw new Error(`Page not found: ${ctx.page.url}`)
  }

  const pt = s.path(pe)
  if (pt.length < 3) {
    throw new Error(`Chapter layout requires at least three levels: ${pe.url}`)
  }

  const [, rd, cd] = pt

  const re = s.entity(rd)
  if (!re || re.type !== "page") {
    throw new Error(`Part not found: ${rd}`)
  }

  const ce = s.entity(cd)
  if (!ce || ce.type !== "page") {
    throw new Error(`Chapter not found: ${cd}`)
  }

  return <Chapter
    data-part={re.title}
    data-chapter={ce.title}
    data-pagefind-filter="part[data-part], chapter[data-chapter]"
  >
    <ChapterNavigation>
      <SearchContainer
        search-options={{
          filters: {
            part: [re.title],
            chapter: [ce.title],
          },
        }}
      >
        <SearchPlaceholder>Type <kbd>/</kbd> to search</SearchPlaceholder>
        <SearchField label="Search" />
        <SearchClear label="Clear" />
        <SearchTemplate>
          <li>
            <a data-search-container-link></a>
            <p data-search-container-matches></p>
          </li>
        </SearchTemplate>
      </SearchContainer>
      <InternalChapterNavigation level={2} url={ctx.page.url} />
    </ChapterNavigation>
    <ChapterContent>
      <InternalBreadcrumb url={ctx.page.url} />
      <SearchHidable>
        <Content>
          {ctx.title && <h1>{ctx.title}</h1>}
          {content}
        </Content>
      </SearchHidable>
      <SearchOutput>
        <Content>
          <h1 aria-live="polite"><span data-search-container-counter></span> Results</h1>
          <ol data-search-container-results></ol>
        </Content>
      </SearchOutput>
      {/* todo */}
      {/* <Help>
        <GithubIcon width={24} height={24} />
        <h2>Get Help</h2>
        <ul>
          <li>If you have any questions about ONLYOFFICE DocSpace, try the <a href="/">FAQ</a> section first.</li>
          <li>You can request a feature or report a bug by posting an issue on <a href="/">GitHub</a>.</li>
          <li>You can also ask our developers on <a href="/">ONLYOFFICE forum</a> (registration required).</li>
        </ul>
      </Help> */}
    </ChapterContent>
  </Chapter>
}

export interface InternalChapterNavigationProperties {
  level: number
  url: string
}

export function InternalChapterNavigation(p: InternalChapterNavigationProperties): JSX.Element | null {
  const s = Sitemap.instance

  let l = p.level
  let e: SitemapEntity | undefined = s.page("/")
  while (true) {
    if (!e || l === 0) {
      break
    }
    for (const id of e.children) {
      const c = s.entity(id)
      if (!c) {
        continue
      }
      let u = ""
      if (c.type === "group") {
        const b = s.page(c.parent)
        if (!b) {
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
      const e = s.entity(id)
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
      const e = s.entity(id)
      if (!e) {
        return null
      }
      if (e.type === "group") {
        if (e.children.length === 0) {
          return null
        }
        const r = s.entity(e.parent)
        if (!r) {
          return null
        }
        if (r.type !== "page") {
          throw new Error(`Nested group is not supported: ${e.id}`)
        }
        const b = s.page(p.url)
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

export interface InternalBreadcrumbProperties {
  url: string
}

export function InternalBreadcrumb(p: InternalBreadcrumbProperties): JSX.Element | null {
  const a: JSX.Element[] = []
  const s = Sitemap.instance

  let e: SitemapEntity | undefined = s.page(p.url)
  while (true) {
    while (e && e.type === "group") {
      e = s.entity(e.parent)
    }
    if (!e || e.url === "/") {
      break
    }
    a.unshift(<BreadcrumbCrumb href={e.url}>{e.title}</BreadcrumbCrumb>)
    e = s.entity(e.parent)
  }

  if (a.length === 0) {
    return null
  }

  return <Breadcrumb>{a}</Breadcrumb>
}
