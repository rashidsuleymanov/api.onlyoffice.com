// The current global navigation relies on css, which is not the optimal
// solution. Creating a dedicated web component that implements the menubar
// pattern for global navigation would be beneficial.
//
// https://www.w3.org/WAI/ARIA/apg/patterns/menubar/

import {Sitemap} from "@onlyoffice/eleventy-sitemap"
import {type JSX, h} from "preact"
import {Icon} from "@/internal/icon.tsx"

export interface GlobalNavigationProperties {
  url: string
}

export function GlobalNavigation(p: GlobalNavigationProperties): JSX.Element {
  const s = Sitemap.shared

  const e = s.page("/")
  if (!e) {
    throw new Error("Root page not found")
  }

  return <nav class="global-navigation" aria-label="Global Navigation">
    <ul class="global-navigation__menu">
      {e.children.map((id) => {
        const e = s.entity(id)
        if (!e) {
          throw new Error(`Entity not found: ${id}`)
        }
        if (e.type !== "page") {
          throw new Error(`Entity is not a page: ${id}`)
        }

        let c = "global-navigation__menu-link"
        if (p.url.startsWith(e.url)) {
          c += " global-navigation__menu-link_active"
        }

        return <li class="global-navigation__menu-item">
          <a class={c} href={e.url}>{e.title}</a>
          <ul class="global-navigation__submenu">
            {e.children.map((id) => {
              const e = s.entity(id)
              if (!e) {
                throw new Error(`Entity not found: ${id}`)
              }
              if (e.type !== "page") {
                throw new Error(`Entity is not a page: ${id}`)
              }

              return <li class="global-navigation__submenu-item">
                <Icon src="rich24" name={e.data.icon} height={24} width={24} />
                <a class="global-navigation__submenu-link" href={e.url}>{e.title}</a>
              </li>
            })}
          </ul>
        </li>
      })}
    </ul>
  </nav>
}
