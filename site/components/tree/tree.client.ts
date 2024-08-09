declare global {
  interface Window {
    ChapterNavigation: typeof ChapterNavigation
  }

  interface HTMLElementTagNameMap {
    "chapter-navigation": ChapterNavigation
  }

  namespace preact {
    namespace JSX {
      interface IntrinsicElements {
        "chapter-navigation": HTMLAttributes<ChapterNavigation>
      }
    }
  }
}

function define(): void {
  if (window.customElements.get("chapter-navigation")) {
    return
  }
  window.ChapterNavigation = ChapterNavigation
  window.customElements.define("chapter-navigation", ChapterNavigation)
}

export class ChapterNavigation extends HTMLElement {
  connectedCallback(): void {
    this.#setup()
    this.#listen()
  }

  disconnectedCallback(): void {
    this.#delisten()
  }

  #setup(): void {
    const c = this.querySelector(".tree__leaf_current")
    if (c instanceof HTMLElement && this.parentElement) {
      this.parentElement.scrollTo({top: c.offsetTop - window.innerHeight / 6})
    }
  }

  #listen(): void {
    this.addEventListener("click", this)
  }

  #delisten(): void {
    this.removeEventListener("click", this)
  }

  handleEvent(e: Event): void {
    if (e.type === "click") {
      const b = e.target
      if (!(
        b instanceof HTMLButtonElement &&
        b.classList.contains("tree__fruit")
      )) {
        return
      }

      const d = b.parentElement
      if (!d) {
        return
      }
      if (!d.classList.contains("tree__twig")) {
        return
      }

      if (d.classList.contains("tree__twig_closed")) {
        d.classList.remove("tree__twig_closed")
      } else {
        d.classList.add("tree__twig_closed")
      }
    }
  }
}

define()
