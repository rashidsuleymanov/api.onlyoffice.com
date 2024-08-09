import {test} from "uvu"
import {is} from "uvu/assert"
import {isEmpty} from "./main.ts"

test("isEmpty(): returns false for a string", () => {
  const a = isEmpty("")
  is(a, false)
})

test("isEmpty(): returns false for a number", () => {
  const a = isEmpty(0)
  is(a, false)
})

test("isEmpty(): returns false for an arrow function", () => {
  const a = isEmpty(() => {})
  is(a, false)
})

test("isEmpty(): returns false for a function", () => {
  // eslint-disable-next-line prefer-arrow-callback
  const a = isEmpty(function _() {})
  is(a, false)
})

test("isEmpty(): returns false for a boolean", () => {
  const a = isEmpty(false)
  is(a, false)
})

test("isEmpty(): returns false for a null", () => {
  const a = isEmpty(null)
  is(a, false)
})

test("isEmpty(): returns false for an undefined", () => {
  // eslint-disable-next-line unicorn/no-useless-undefined
  const a = isEmpty(undefined)
  is(a, false)
})

test("isEmpty(): returns true for an empty object", () => {
  const a = isEmpty({})
  is(a, true)
})

test("isEmpty(): returns false for an object with properties", () => {
  const a = isEmpty({a: 1})
  is(a, false)
})

test.run()
