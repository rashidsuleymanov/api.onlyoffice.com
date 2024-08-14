import {type JSX, h} from "preact"
import {type HTMLAttributes} from "preact/compat"

export function CodePreview(p: HTMLAttributes<HTMLDivElement>): JSX.Element {
  const {children, ...props} = p
  return <div class="code-preview" {...props}>{p.children}</div>
}
