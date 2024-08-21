// This page aims to provide information about the specific commit upon which
// the site is based. This is likely a temporary solution, as it does not feel
// right.

import {exec} from "node:child_process"
import {type Writable} from "node:stream"
import {type Data} from "@onlyoffice/eleventy-types"
import {StringWritable} from "@onlyoffice/stream-string"
import {cutPrefix, cutSuffix} from "@onlyoffice/strings"

export function data(): Data {
  return {
    layout: null,
    permalink: "/postscript.html",
    eleventyExcludeFromCollections: true,
  }
}

export async function render(): Promise<string> {
  const c = new StringWritable()
  await git(c, "rev-parse HEAD")
  c.buf = c.buf.trim()

  const o = new StringWritable()
  await git(o, "config --get remote.origin.url")
  o.buf = o.buf.trim()

  let [s, f] = cutPrefix(o.buf, "git@github.com:")
  if (!f) {
    return ""
  }

  [s, f] = cutSuffix(s, ".git")
  if (!f) {
    return ""
  }

  const u = new URL(`${c.buf}/`, `https://github.com/${s}/tree/`)
  return `<a href="${u.toString()}">${c.buf}</a>`
}

async function git(w: Writable, cmd: string): Promise<void> {
  await new Promise((res, rej) => {
    const e = exec(`git ${cmd}`)
    if (e.stdout) {
      e.stdout.on("data", (ch) => {
        w.write(ch)
      })
    }
    e.on("close", res)
    e.on("error", rej)
  })
}
