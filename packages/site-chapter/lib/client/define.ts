import {ChapterContainer} from "./element.ts"

declare global {
  interface Window {
    ChapterContainer: typeof ChapterContainer
  }

  interface HTMLElementTagNameMap {
    "chapter-container": ChapterContainer
  }

  namespace preact {
    namespace JSX {
      interface IntrinsicElements {
        "chapter-container": HTMLAttributes<ChapterContainer>
      }
    }
  }
}

export function define(): void {
  if (window.customElements.get(ChapterContainer.tagName)) {
    return
  }
  window.ChapterContainer = ChapterContainer
  window.customElements.define(ChapterContainer.tagName, ChapterContainer)
}
