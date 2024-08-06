import {type Meta} from "@storybook/preact"
import {Fragment, type JSX, h} from "preact"
import {Button, LinkButton} from "./main.tsx"

export default {
  title: "UI/Button",
} satisfies Meta

export function Default(): JSX.Element {
  const r = window.location.href
  return <>
    <h2>Button</h2>
    <Button>Default</Button>
    <Button variant="accent">Accent</Button>
    <h2>Link Button</h2>
    <LinkButton href={r}>Default</LinkButton>
    <LinkButton href={r} variant="accent">Accent</LinkButton>
  </>
}
