// todo: use async process instead of sync.

import {starryNight} from "@onlyoffice/eleventy-starry-night"
import {rehypePreact} from "@onlyoffice/rehype-preact"
import {Fragment, type JSX, jsx, jsxs} from "preact/jsx-runtime"
import {unified} from "unified"

export interface SyntaxHighlightProperties {
  syntax: string
  children: string
}

export function SyntaxHighlight(p: SyntaxHighlightProperties): JSX.Element {
  const v = unified()
    .use(function plugin() {
      // eslint-disable-next-line @typescript-eslint/no-invalid-this
      this.parser = function parser() {
        const s = starryNight.flagToScope(p.syntax)
        if (!s) {
          throw new Error(`Unknown syntax: ${p.syntax}`)
        }
        return starryNight.highlight(p.children, s)
      }
    })
    .use(rehypePreact, {Fragment, jsx, jsxs})
    .processSync(p.children)
  return v.result as JSX.Element
}
