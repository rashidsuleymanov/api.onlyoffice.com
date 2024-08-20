import {type Root} from "hast"
import {visit} from "unist-util-visit"

declare module "hast" {
  interface Properties {
    metastring?: string
  }
}

export interface RehypeMetastringTransform {
  (tree: Root): void
}

/**
 * Moves `data.meta` to `properties.metastring` for the `code` element node as
 * `rehype-raw` strips `data` from all nodes, which may contain useful
 * information.
 *
 * {@link https://github.com/syntax-tree/hast-util-raw/issues/13/ hast-util-raw Reference}
 */
export function rehypeMetastring(): RehypeMetastringTransform {
  return function transform(t) {
    visit(t, "element", (n) => {
      if (
        n.tagName !== "code" ||
        !n.data ||
        !n.data.meta
      ) {
        return
      }

      let p = n.properties
      if (!p) {
        p = {}
        n.properties = p
      }

      n.properties.metastring = n.data.meta
    })
  }
}
