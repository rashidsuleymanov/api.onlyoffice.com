import {type ChildrenIncludable} from "@onlyoffice/preact-types"
// import {Content} from "@onlyoffice/ui-kit"
import {type Meta} from "@storybook/preact"
import {type JSX, h} from "preact"
// import {Default as DocumentEditorPlaygroundStory} from "../../site-document-editor-playground/lib/main.story.tsx"
// import {Playground, PlaygroundBefore, PlaygroundContent} from "./main.tsx"

export default {
  title: "Site/Playground",
  tags: ["!dev"],
} satisfies Meta

export function Default(_: ChildrenIncludable): JSX.Element {
  return <div />
  // return <Playground>
  //   <PlaygroundBefore>
  //     <Content>
  //       <h1>Playground</h1>
  //     </Content>
  //   </PlaygroundBefore>
  //   <PlaygroundContent>
  //     {p.children ?? "content"}
  //   </PlaygroundContent>
  // </Playground>
}

export function WithDocumentEditor(): JSX.Element {
  return <div />
  // return <Default><DocumentEditorPlaygroundStory /></Default>
}
