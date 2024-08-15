import {remarkConfig} from "@onlyoffice/remark-config"
import remarkFrontmatter from "remark-frontmatter"
import remarkGfm from "remark-gfm"

const c = remarkConfig()

export default {
  settings: c.settings,
  plugins: [
    remarkFrontmatter,

    // Keep the list of plugins in sync with the site/internal/markdown.
    remarkGfm,

    // @ts-ignore i am sure of it
    ...c.plugins,
  ],
}
