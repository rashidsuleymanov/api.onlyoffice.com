import {PageContainer} from "./element.ts"

declare global {
  interface Window {
    PageContainer: typeof PageContainer
  }

  interface HTMLElementTagNameMap {
    "page-container": PageContainer
  }

  namespace preact {
    namespace JSX {
      interface IntrinsicElements {
        "page-container": HTMLAttributes<PageContainer>
      }
    }
  }
}

export function define(): void {
  if (window.customElements.get(PageContainer.tagName)) {
    return
  }
  window.PageContainer = PageContainer
  window.customElements.define(PageContainer.tagName, PageContainer)
}
