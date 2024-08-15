import {ESLint} from "@onlyoffice/eslint-config"
import {type Literal, type Node, type Root} from "mdast"
import {visit} from "unist-util-visit"
import {type MessageOptions, type VFile} from "vfile"
import pack from "../package.json" with {type: "json"}

const es = new ESLint()

export function remarkLintEslint(): (tree: Root, file: VFile) => Promise<void> {
  return async function transform(t, f) {
    const a: Promise<void>[] = []

    visit(t, "yaml", (n, _, p) => {
      const e = lint(f, ".yml", n, p)
      a.push(e)
    })

    await Promise.all(a)
  }
}

async function lint(f: VFile, e: string, n: Literal, p: Node | undefined): Promise<void> {
  const a = await es.lintText(n.value, {filePath: `embed${e}`})

  for (const r of a) {
    for (const m of r.messages) {
      if (!m.ruleId) {
        continue
      }

      let c = m.message
      if (m.suggestions) {
        for (const s of m.suggestions) {
          c += `\n\nDescription: ${s.desc}`
          c += `\n\nFix: ${s.fix.text}`
        }
      }

      const o: MessageOptions = {
        ancestors: [n],
        place: {line: m.line, column: m.column},
        ruleId: m.ruleId,
        source: pack.name,
      }
      if (o.ancestors && p) {
        o.ancestors.push(p)
      }
      if (o.place && "line" in o.place && n.position) {
        o.place.line += n.position.start.line
      }

      f.message(c, o)
    }
  }
}
