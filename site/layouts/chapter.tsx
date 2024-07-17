import {type Context, type Data} from "@onlyoffice/eleventy-types"
import {type JSX, h} from "preact"
import {Chapter} from "../internal/chapter.tsx"

export function data(): Data {
  return {
    layout: "page",
  }
}

export function render(c: Context): JSX.Element {
  return <Chapter url={c.page.url}>{c.content}</Chapter>
}
