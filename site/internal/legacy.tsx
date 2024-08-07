import {LinkButton} from "@onlyoffice/ui-kit"
import {type JSX, h} from "preact"

export function Legacy(): JSX.Element {
  return <legacy-container class="legacy">
    <LinkButton variant="accent">
      Old version
    </LinkButton>
  </legacy-container>
}
