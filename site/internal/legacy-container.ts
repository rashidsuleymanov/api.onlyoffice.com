import Cookie from "js-cookie"

declare global {
  interface Window {
    LegacyContainer: typeof LegacyContainer
  }

  interface HTMLElementTagNameMap {
    "legacy-container": LegacyContainer
  }

  namespace preact {
    namespace JSX {
      interface IntrinsicElements {
        "legacy-container": HTMLAttributes<LegacyContainer>
      }
    }
  }
}

function define(): void {
  if (window.customElements.get(LegacyContainer.tagName)) {
    return
  }
  window.LegacyContainer = LegacyContainer
  window.customElements.define(LegacyContainer.tagName, LegacyContainer)
}

class LegacyContainer extends HTMLElement {
  static get tagName(): string {
    return "legacy-container"
  }

  get #anchor(): HTMLAnchorElement | null {
    return this.querySelector("a")
  }

  connectedCallback(): void {
    this.#setup()
    this.#listen()
  }

  #setup(): void {
    const a = this.#anchor
    if (!a) {
      return
    }

    const u = new URL(window.location.href)
    a.href = `${u.origin}/`
  }

  #listen(): void {
    this.addEventListener("click", this)
  }

  handleEvent(e: Event): void {
    if (e.type === "click" && e.target) {
      const a = this.#anchor
      if (e.target === a) {
        e.preventDefault()
        Cookie.remove("X-OO-API")
        window.location.href = a.href
        return
      }
    }
  }
}

define()
