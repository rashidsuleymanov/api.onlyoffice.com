import {type StorybookConfig} from "@storybook/preact-vite"
import {Fragment, h} from "preact"
import {renderToString} from "preact-render-to-string"

export default {
  framework: "@storybook/preact-vite",
  addons: [
    "@storybook/addon-essentials"
  ],
  stories: [
    "../../packages/site-*/lib/*.story.tsx",
    "../../packages/ui-*/lib/*.story.tsx"
  ],
  staticDirs: [
    {from: "../../packages/pagefind-fixtures/dist/pagefind", to: "pagefind"},
    "../../site/assets/images",
    "../../site/static",
  ],
  previewHead(head) {
    return head + renderToString(<>
      {[
        "OpenSans-Regular.woff2",
        "OpenSans-Medium.woff2",
        "OpenSans-SemiBold.woff2",
        "OpenSans-Bold.woff2",
      ].map((f) => <link rel="preload" href={`/${f}`} crossorigin="" as="font" type="font/woff2" />)}
    </>)
  }
} satisfies StorybookConfig
