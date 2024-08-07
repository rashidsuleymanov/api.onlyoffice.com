import {documentBuilder} from "@onlyoffice/document-builder-hast-element"
import {fileType} from "@onlyoffice/document-builder-utils"
import {Config} from "@onlyoffice/site-config"
import {template} from "@onlyoffice/template-hast-element"
import {toText} from "hast-util-to-text"
import {type Root} from "hast"
import {visit} from "unist-util-visit"
import {documentBuilderContainer} from "./hast.ts"

interface Transform {
  (tree: Root): void
}

export function rehypeDocumentBuilderContainer(): Transform {
  return function transform(tree) {
    const c = Config.shared

    visit(tree, "element", (node, index, parent) => {
      if (!(
        node.tagName === "pre" &&
        index !== undefined &&
        parent
      )) {
        return
      }

      const [code] = node.children
      if (!(
        code &&
        code.type === "element" &&
        code.tagName === "code" &&
        "dataDocumentBuilder" in code.properties
      )) {
        return
      }

      const s = toText(code, {whitespace: "pre-wrap"})
      const t = fileType(s)
      if (!t) {
        // todo?: throw error
        return
      }

      const dc = documentBuilderContainer()
      const te = template()
      const db = documentBuilder()
      db.data.documentServerUrl = c.playground.documentEditor.documentServerUrl
      db.data.config = {
        document: {
          fileType: t,
          key: "",
          title: "",
          url: "",
        },
        editorConfig: {
          customization: {
            anonymous:{
              request: false,
              label: "Guest"
            },
            compactHeader: true,
            compactToolbar: true,
            hideRightMenu: true,
            hideRulers: true,
            integrationMode: "embed",
            toolbarHideFileName: true,
            toolbarNoTabs: true,
          },
          callbackUrl: "",
        },
      }
      db.data.command = s.trim()
      te.children = [db]
      dc.children = [node, te]
      parent.children[index] = dc

      delete code.properties.dataDocumentBuilder
    })
  }
}
