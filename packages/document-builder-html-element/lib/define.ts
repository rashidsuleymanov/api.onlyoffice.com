import {DocumentBuilder, type DocumentBuilderAttributes} from "./element.ts"
import {DocumentBuilderErrorEvent, DocumentBuilderReadyEvent} from "./events.ts"

declare global {
  interface Window {
    DocumentBuilder: typeof DocumentBuilder
    DocumentBuilderErrorEvent: typeof DocumentBuilderErrorEvent
    DocumentBuilderReadyEvent: typeof DocumentBuilderReadyEvent
  }

  interface HTMLElementTagNameMap {
    "document-builder": DocumentBuilder
  }

  namespace preact {
    namespace JSX {
      interface IntrinsicElements {
        "document-builder": HTMLAttributes<DocumentBuilder> & DocumentBuilderAttributes
      }
    }
  }

  interface GlobalEventHandlersEventMap {
    documentbuildererror: DocumentBuilderErrorEvent
    documentbuilderready: DocumentBuilderReadyEvent
  }
}

export function define(): void {
  if (window.customElements.get(DocumentBuilder.tagName)) {
    return
  }
  window.DocumentBuilder = DocumentBuilder
  window.customElements.define(DocumentBuilder.tagName, DocumentBuilder)
  window.DocumentBuilderErrorEvent = DocumentBuilderErrorEvent
  window.DocumentBuilderReadyEvent = DocumentBuilderReadyEvent
}
