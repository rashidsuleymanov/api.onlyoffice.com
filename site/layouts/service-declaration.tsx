import {type Context, type Data} from "@onlyoffice/eleventy-types"
import {ServiceDeclaration} from "@onlyoffice/site-kit"
import {Fragment, type JSX, h} from "preact"
import {Markdown} from "@/internal/markdown.tsx"
import {SyntaxHighlight} from "@/internal/syntax-highlight.tsx"
import {TableOfContents} from "@/internal/table-of-contents.tsx"

export function data(): Data {
  return {
    layout: "chapter",
  }
}

export function render(ctx: Context): JSX.Element {
  const [d] = ctx.pagination.items

  switch (d.kind) {
  case "group":
    // todo: move to the ServiceDeclaration
    return <TableOfContents url={ctx.page.url} depth={1} />
  case "request":
    return <ServiceDeclaration
      declaration={d}
      onHighlightSyntax={SyntaxHighlight}
      onRenderDescription={Markdown}
      onRetrieve={ctx.onRetrieve}
    />
  }

  return <></>
}
