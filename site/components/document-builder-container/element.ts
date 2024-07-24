import {type Client} from "@onlyoffice/server-client"

declare global {
  interface Window {
    DocumentBuilderContainer: typeof DocumentBuilderContainer
  }

  interface HTMLElementTagNameMap {
    "document-builder-container": DocumentBuilderContainer
  }

  namespace preact {
    namespace JSX {
      interface IntrinsicElements {
        "document-builder-container": Partial<Omit<DocumentBuilderContainer, keyof HTMLElement>> & JSXBase["span"]
      }
    }

    type JSXBase = JSX.IntrinsicElements extends {span: unknown}
      ? JSX.IntrinsicElements
      : Record<string, Record<string, unknown>>
  }
}

function main(): void {
  if (window.customElements.get(DocumentBuilderContainer.tag)) {
    return
  }
  window.DocumentBuilderContainer = DocumentBuilderContainer
  window.customElements.define(DocumentBuilderContainer.tag, DocumentBuilderContainer)
}

export class DocumentBuilderContainer extends HTMLElement {
  static get tag(): string {
    return "document-builder-container"
  }

  client: Client | undefined

  async play(): Promise<void> {
    const cl = this.client
    if (!cl) {
      return
    }

    const te = this.querySelector("template")
    if (!te) {
      return
    }

    const tc = document.importNode(te.content, true)
    const db = tc.querySelector("document-builder")
    if (!db) {
      return
    }

    if (!db.config) {
      return
    }

    [db.config] = await cl.documentEditor.sign(db.config)
    this.insertBefore(db, this.firstChild)
  }
}

main()
