import {type Data} from "@onlyoffice/eleventy-types"
import {type JSX, h} from "preact"
import {Home} from "@/internal/home.tsx"

export function data(): Data {
  return {
    title: "Welcome to ONLYOFFICE API",
    layout: "page",
  }
}

export function render(): JSX.Element {
  return <Home />
}
