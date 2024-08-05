import path from "node:path"
import {URL} from "node:url"

export function relative(a: string, b: string): string {
  let r = path.relative(a, b)
  if (r.slice(0, 3) !== "../") {
    r = `./${r}`
  }
  return r
}

export function resolve(a: string, b: string): string {
  const r = path.resolve(a, b)
  return r.replaceAll("\\", "/")
}

export function hash(a: string): string {
  const u = new URL(a, "http://e.c/")
  return u.hash
}
