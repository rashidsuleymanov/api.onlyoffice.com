import {type Meta} from "@storybook/preact"
import {Fragment, type JSX, h} from "preact"
import {Button} from "./main.tsx"

export default {
  title: "UI/Button",
} satisfies Meta

export function Default(): JSX.Element {
  return <>
    <Button>Default</Button>
    <Button variant="accent">Accent</Button>
  </>
}
