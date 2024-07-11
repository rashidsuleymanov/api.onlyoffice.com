import {type Data} from "@onlyoffice/eleventy-types"
import {Config} from "@onlyoffice/site-config"
import {DocumentEditorPlayground} from "@onlyoffice/site-kit"
import {type JSX, h} from "preact"

export function data(): Data {
  return {
    layout: "page"
  }
}

export function render(): JSX.Element {
  const c = Config.read()
  return <DocumentEditorPlayground config={c.playground} />
}
