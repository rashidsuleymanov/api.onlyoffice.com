import {TextInputContainer} from "./element.ts"

declare global {
  interface Window {
    TextInputContainer: typeof TextInputContainer
  }

  interface HTMLElementTagNameMap {
    "text-input-container": TextInputContainer
  }

  namespace preact {
    namespace JSX {
      interface IntrinsicElements {
        "text-input-container": HTMLAttributes<TextInputContainer>
      }
    }
  }
}

export function define(): void {
  if (window.customElements.get(TextInputContainer.tagName)) {
    return
  }
  window.TextInputContainer = TextInputContainer
  window.customElements.define(TextInputContainer.tagName, TextInputContainer)
}
