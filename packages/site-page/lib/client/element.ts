import {type ChapterContainer} from "@onlyoffice/site-chapter/client.ts"

export class PageContainer extends HTMLElement {
  static get tagName(): string {
    return "page-container"
  }

  get #chapterNavigationToggler(): HTMLElement | null {
    return this.querySelector("[data-page-container-chapter-navigation-toggler]")
  }

  get #chapterContainer(): ChapterContainer | null {
    return this.querySelector("chapter-container")
  }

  connectedCallback(): void {
    this.#listen()
  }

  #listen(): void {
    this.addEventListener("click", this)
  }

  handleEvent(e: Event): void {
    if (
      e.type === "click" &&
      e.target &&
      e.target === this.#chapterNavigationToggler
    ) {
      const c = this.#chapterContainer
      if (!c) {
        return
      }
      c.toggleNavigationHidden()
      return
    }
  }
}
