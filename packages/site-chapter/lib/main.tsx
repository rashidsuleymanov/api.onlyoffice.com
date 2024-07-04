import {type ChildrenIncludable} from "@onlyoffice/preact-types"
import {type HTMLAttributes} from "preact/compat"
import {type JSX, h} from "preact"

export function Chapter(p: HTMLAttributes<HTMLDivElement>): JSX.Element {
  const {children, ...props} = p
  return <div class="chapter" {...props}>{children}</div>
}

export function ChapterNavigation({children}: ChildrenIncludable): JSX.Element {
  return <div class="chapter__navigation">{children}</div>
}

export function ChapterContent({children}: ChildrenIncludable): JSX.Element {
  return <div class="chapter__content">{children}</div>
}
