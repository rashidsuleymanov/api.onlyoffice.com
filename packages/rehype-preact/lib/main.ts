// Inspired by the rehype-react.
// https://github.com/rehypejs/rehype-react/blob/main/lib/index.js#L18

import {type Root} from "hast"
import {type Options, toJsxRuntime} from "hast-util-to-jsx-runtime"
import {type JSX} from "preact"
import {type Processor} from "unified"

declare module "unified" {
  interface CompileResultMap {
    "JSX.Element": JSX.Element
  }
}

export function rehypePreact(this: void, options: unknown): void {
  const c = this as unknown as Processor<undefined, undefined, undefined, Root, JSX.Element>
  const o = options as Options
  c.compiler = function compiler(t, f): JSX.Element {
    return toJsxRuntime(t, {filePath: f.path, ...o})
  }
}
