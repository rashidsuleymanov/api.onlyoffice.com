import {type Data} from "@onlyoffice/eleventy-types"
import * as g from "@/generations/page.ts"

export function data(): Data {
  return g.data()
}
