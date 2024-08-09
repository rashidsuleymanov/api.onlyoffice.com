import {readFile} from "node:fs/promises"
import {argv} from "node:process"
import {remarkConfig} from "@onlyoffice/remark-config"
import {remarkDocumentBuilder} from "@onlyoffice/remark-document-builder"
import glob, {type Pattern} from "fast-glob"
import remarkFrontmatter from "remark-frontmatter"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkStringify from "remark-stringify"
import sade from "sade"
import {unified} from "unified"
import {VFile} from "vfile"
import {reporterPretty} from "vfile-reporter-pretty"

function main(): void {
  sade("remark.config.ts", true)
    .action(async ({_: s}: {_: string[]}) => {
      if (s.length === 0) {
        s = ["site/pages/**/*.md"]
      }
      await action(s)
    })
    .parse(argv)
}

async function action(s: Pattern[]): Promise<void> {
  let x = false

  const a = await glob(s)
  await Promise.all(a.map(async (f) => {
    const c = await readFile(f, "utf8")
    const v = new VFile(c)
    v.path = f

    // Keep the list of plugins in sync with the site/internal/markdown.
    const m = unified()
      .use(remarkParse)
      .use(remarkFrontmatter)
      .use(remarkDocumentBuilder)
      .use(remarkGfm)
      .use(remarkConfig())
      .use(remarkStringify)
      .freeze()

    const r = await m.process(v)
    if (r.messages.length !== 0) {
      x = true
      const p = reporterPretty([r])
      console.log(p)
    }
  }))

  if (x) {
    throw new Error("Remark found mistakes")
  }
}

main()
