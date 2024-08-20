import {starryNight} from "@onlyoffice/eleventy-starry-night"
import {type ChildrenIncludable} from "@onlyoffice/preact-types"
import {type Options, toJsxRuntime} from "hast-util-to-jsx-runtime"
import {Fragment, type JSX, h} from "preact"
import {jsx, jsxs} from "preact/jsx-runtime"

export interface SyntaxHighlightProperties extends ChildrenIncludable {
  syntax: string
}

export function SyntaxHighlight(p: SyntaxHighlightProperties): JSX.Element {
  const c = p.children
  if (!c || typeof c !== "string") {
    return <></>
  }

  const s = starryNight.flagToScope(p.syntax)
  if (!s) {
    throw new Error(`Unknown syntax: ${p.syntax}`)
  }

  const t = starryNight.highlight(c, s)
  const o = {Fragment, jsx, jsxs} as Options
  return toJsxRuntime(t, o)
}
