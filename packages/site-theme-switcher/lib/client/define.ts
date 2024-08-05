import {ThemeSwitcherContainer} from "./element.ts"

declare global {
  interface Window {
    ThemeSwitcherContainer: typeof ThemeSwitcherContainer
  }

  interface HTMLElementTagNameMap {
    "theme-switcher-container": ThemeSwitcherContainer
  }

  namespace preact {
    namespace JSX {
      interface IntrinsicElements {
        "theme-switcher-container": HTMLAttributes<ThemeSwitcherContainer>
      }
    }
  }
}

export function define(): void {
  if (window.customElements.get(ThemeSwitcherContainer.tagName)) {
    return
  }
  window.ThemeSwitcherContainer = ThemeSwitcherContainer
  window.customElements.define(ThemeSwitcherContainer.tagName, ThemeSwitcherContainer)
}
