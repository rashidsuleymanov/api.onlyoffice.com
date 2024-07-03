import type {Context, Data} from "@onlyoffice/eleventy-types"
import {
  Chapter,
  ChapterContent,
  ChapterNavigation,
  SearchClear,
  SearchContainer,
  SearchField,
  SearchOutput,
  SearchPlaceholder,
  SearchTemplate
} from "@onlyoffice/site-kit"
import {Content} from "@onlyoffice/ui-kit"
import {type JSX, h} from "preact"
import {InternalChapterNavigation, InternalBreadcrumb} from "../../layouts/chapter.tsx"

export function data(): Data {
  return {
    layout: "page",
    eleventyExcludeFromCollections: true
  }
}

export function render({content, ...ctx}: Context): JSX.Element {
  return <Chapter>
    <ChapterNavigation>
      <SearchContainer>
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
      <InternalChapterNavigation level={0} url="/" />
    </ChapterNavigation>
    <ChapterContent>
      <InternalBreadcrumb url={ctx.page.url} />
      <SearchOutput hidden={false}>
        <Content>
          <h1 aria-live="polite"><span data-search-container-counter></span> Results</h1>
          <ol data-search-container-results></ol>
        </Content>
      </SearchOutput>
    </ChapterContent>
  </Chapter>
}
