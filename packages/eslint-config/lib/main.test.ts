import {test} from "uvu"
import {is} from "uvu/assert"
import {ESLint} from "./main.js"

test("lints JavaScript source", async () => {
  const e = new ESLint({fix: true})
  const [r] = await e.lintText("var x = 1", {filePath: "__fixture__.js"})
  is(r.output, "const x = 1\n")
})

test("lints TypeScript source", async () => {
  const e = new ESLint({fix: true})
  const [r] = await e.lintText("var x = 1", {filePath: "__fixture__.ts"})
  is(r.output, "const x = 1\n")
})

test("lints JSON source", async () => {
  const e = new ESLint({fix: true})
  const [r] = await e.lintText("{'x': 1}", {filePath: "__fixture__.json"})
  is(r.output, '{"x": 1}')
})

test("lints YAML source", async () => {
  const e = new ESLint({fix: true})
  const [r] = await e.lintText("x : 1", {filePath: "__fixture__.yaml"})
  is(r.output, "x: 1")
})

test.run()
