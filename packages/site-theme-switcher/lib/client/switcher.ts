export interface ThemeSwitcherState {
  darkTheme: string
  lightTheme: string
  themePreference: string
}

export class ThemeSwitcher {
  static get #key(): string {
    return "theme-switcher"
  }

  get state(): ThemeSwitcherState {
    const d = localStorage.getItem(ThemeSwitcher.#key)
    if (!d) {
      return {
        darkTheme: "regular",
        lightTheme: "regular",
        themePreference: "auto",
      }
    }
    return JSON.parse(d)
  }

  set state(s: ThemeSwitcherState | null) {
    if (!s) {
      localStorage.removeItem(ThemeSwitcher.#key)
      return
    }
    const d = JSON.stringify(s)
    localStorage.setItem(ThemeSwitcher.#key, d)
  }

  reflect(s: ThemeSwitcherState): void {
    const d = document.documentElement.dataset
    d.darkTheme = s.darkTheme
    d.lightTheme = s.lightTheme
    d.themePreference = s.themePreference
  }
}
