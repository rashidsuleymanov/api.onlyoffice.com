import {type Context, type Data} from "@onlyoffice/eleventy-types"
import {type JSX, h} from "preact"
import {Page} from "../internal/page.tsx"

export function data(): Data {
  return {
    layout: "html",
  }
}

export function render(c: Context): JSX.Element {
  return <Page url={c.page.url}>{c.content}</Page>
}
