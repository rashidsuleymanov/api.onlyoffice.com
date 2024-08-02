import {type ChildrenIncludable} from "@onlyoffice/preact-types"
import {type HTMLAttributes} from "preact/compat"
import {type JSX, h} from "preact"
import {type ChapterContainer} from "./client.ts"

export function Chapter(p: HTMLAttributes<ChapterContainer>): JSX.Element {
  const {children, ...props} = p
  return <chapter-container class="chapter" {...props}>{children}</chapter-container>
}

export function ChapterNavigation({children}: ChildrenIncludable): JSX.Element {
  return <div class="chapter__navigation">{children}</div>
}

export function ChapterContent({children}: ChildrenIncludable): JSX.Element {
  return <div class="chapter__content">{children}</div>
}
