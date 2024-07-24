import {type Element} from "hast"

export interface DocumentBuilderContainerElement extends Element {}

export function documentBuilderContainer(): DocumentBuilderContainerElement {
  return {
    type: "element",
    tagName: "document-builder-container",
    properties: {},
    children: [],
  }
}
