import {type Metadata, generateObject} from "@11ty/eleventy-img"
import {type Element} from "hast"

export interface ImageAttributes {
  alt: string
}

export function toHast(m: Metadata, a: ImageAttributes): Element {
  const o = generateObject(m, a)

  if ("picture" in o) {
    const r: Element = {
      type: "element",
      tagName: "picture",
      properties: {},
      children: [],
    }

    for (const e of o.picture) {
      if ("source" in e) {
        r.children.push({
          type: "element",
          tagName: "source",
          properties: e.source,
          children: [],
        })
        continue
      }

      if ("img" in e) {
        r.children.push({
          type: "element",
          tagName: "img",
          properties: {...a, ...e.img},
          children: [],
        })
        continue
      }
    }

    return r
  }

  if ("img" in o) {
    return {
      type: "element",
      tagName: "img",
      properties: {...a, ...o.img},
      children: [],
    }
  }

  throw new Error("Unexpected return value.")
}
