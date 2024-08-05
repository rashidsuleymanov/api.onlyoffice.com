import {ThemeSwitcher} from "./switcher.ts"

export class ThemeSwitcherContainer extends HTMLElement {
  static get tagName(): string {
    return "theme-switcher-container"
  }

  #t: ThemeSwitcher

  constructor() {
    super()
    this.#t = new ThemeSwitcher()
  }

  connectedCallback(): void {
    const s = this.#t.state
    this.#t.reflect(s)

    const rc = this.querySelector("radiogroup-container")
    if (!rc) {
      return
    }

    if (rc.radios.length !== 0) {
      for (const [i, r] of rc.radios.entries()) {
        if (r.dataset.value === s.themePreference) {
          rc.check(i)
          break
        }
      }
    } else {
      for (const r of rc.querySelectorAll<HTMLElement>('[role="radio"]')) {
        if (r.dataset.value === s.themePreference) {
          r.ariaChecked = "true"
        }
      }
    }

    rc.addEventListener("radiogroupcontainerchange", (ev) => {
      const s = this.#t.state
      s.themePreference = "auto"
      if (ev.radioValue) {
        s.themePreference = ev.radioValue
      }
      this.#t.state = s
      this.#t.reflect(s)
    })
  }
}
