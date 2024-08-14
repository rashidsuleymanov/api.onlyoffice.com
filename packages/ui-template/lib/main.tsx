import {type JSX, h} from "preact"
import {type HTMLAttributes} from "preact/compat"
import {renderToString} from "preact-render-to-string"

export function Template(p: HTMLAttributes<HTMLTemplateElement>): JSX.Element {
  const {children, ...o} = p
  // @ts-ignore children will be resolved inside renderToString
  const s = renderToString(children)
  return <template dangerouslySetInnerHTML={{__html: s}} {...o} />
}
