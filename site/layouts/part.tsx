import {type Context, type Data} from "@onlyoffice/eleventy-types"
import {type JSX, h} from "preact"
import {Part} from "../internal/part.tsx"

export function data(): Data {
  return {
    layout: "page",
  }
}

export function render(c: Context): JSX.Element {
  return <Part current={c.page.url} />
}
