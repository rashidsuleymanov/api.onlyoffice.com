export class ChapterContainer extends HTMLElement {
  static get tagName(): string {
    return "chapter-container"
  }

  get navigationHidden(): boolean {
    return this.#hasState("navigation-hidden")
  }

  set navigationHidden(s: boolean) {
    this.#changeState("navigation-hidden", s)
  }

  connectedCallback(): void {
    this.#attach()
    this.#setup()
  }

  #internals: ElementInternals | null = null

  #attach(): void {
    if (this.attachInternals) {
      this.#internals = this.attachInternals()
    }
  }

  #setup(): void {
    this.#setupState()
  }

  #setupState(): void {
    if (this.#internals && CSS.supports("selector(:state(_))")) {
      this.#hasState = this.#hasModernState
      this.#changeState = this.#changeModernState
      return
    }
    this.#hasState = this.#hasFallbackState
    this.#changeState = this.#changeFallbackState
  }

  toggleNavigationHidden(): void {
    this.navigationHidden = !this.navigationHidden
  }

  #hasState: (k: string) => boolean = () => false

  #hasFallbackState(k: string): boolean {
    const s = this.getAttribute(`state-${k}`)
    if (s === null) {
      return false
    }
    return true
  }

  #hasModernState(k: string): boolean {
    const t = this.#internals
    if (!t) {
      return false
    }
    return t.states.has(k)
  }

  #changeState: (k: string, v: boolean) => void = () => void 0

  #changeFallbackState(k: string, v: boolean): void {
    if (!v) {
      this.removeAttribute(`state-${k}`)
      return
    }
    this.setAttribute(`state-${k}`, "")
  }

  #changeModernState(k: string, v: boolean): void {
    const t = this.#internals
    if (!t) {
      return
    }
    if (!v) {
      t.states.delete(k)
      return
    }
    t.states.add(k)
  }
}
