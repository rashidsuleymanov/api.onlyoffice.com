import {test} from "uvu"
import {equal as eq, unreachable as un} from "uvu/assert"
import {fromKeys} from "./main.ts"

test("", () => {
  const o = fromKeys("")
  eq(o, {})
})

test("", () => {
  const o = fromKeys("k")
  eq(o, {})
})

test("", () => {
  const o = fromKeys("k j")
  eq(o, {})
})

test("", () => {
  const o = fromKeys("k=")
  eq(o, {})
})

test("", () => {
  const o = fromKeys("k=0")
  eq(o, {})
})

test("", () => {
  const o = fromKeys("k=v")
  eq(o, {})
})

test("", () => {
  const o = fromKeys("k={}")
  eq(o, {k: {}})
})

test("", () => {
  try {
    const o = fromKeys("k={a}")
    un(`Expected an error, but got ${JSON.stringify(o)}`)
  } catch (e) {
    eq(e instanceof Error && e.message, "Expected property name or '}' in JSON at position 1 (line 1 column 2)")
  }
})

test("", () => {
  const o = fromKeys('k={"a": 0}')
  eq(o, {k: {a: 0}})
})

test("", () => {
  const o = fromKeys('k={"a": 0, "b": 1}')
  eq(o, {k: {a: 0, b: 1}})
})

test("", () => {
  const o = fromKeys('k={"a": {"b": 0}}')
  eq(o, {k: {a: {b: 0}}})
})

test("", () => {
  const o = fromKeys('k={"a": 0} j={"b": 1}')
  eq(o, {k: {a: 0}, j: {b: 1}})
})

test("", () => {
  const o = fromKeys("k=[]")
  eq(o, {})
})

test.run()
