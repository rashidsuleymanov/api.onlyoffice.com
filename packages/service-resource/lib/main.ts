import {readFile} from "node:fs/promises"
import path from "node:path"
import {URL, fileURLToPath} from "node:url"
import {escape} from "@onlyoffice/node-path/win32.ts"
import {type Component, type Declaration} from "@onlyoffice/service-declaration"

export interface Resource {
  list(this: void): Declaration[]
  resolve(this: void, id: string): Component | undefined
}

export function nop(): Resource {
  return {
    list() {
      return []
    },
    resolve(): undefined {
      return undefined
    },
  }
}

export async function resource(df: string, cf: string): Promise<string> {
  const rd = rootDir()
  const fd = fixturesDir(rd)
  const rf = resourceFile(fd)
  let rc = await readFile(rf, "utf8")

  const d = "const d: Declaration[] = require"
  rc = rc.replace(`${d}("")`, `${d}("${escape(df)}")`)

  const c = "const c: Record<string, Component> = require"
  rc = rc.replace(`${c}("")`, `${c}("${escape(cf)}")`)

  return rc
}

function rootDir(): string {
  const u = new URL("..", import.meta.url)
  return fileURLToPath(u)
}

function fixturesDir(d: string): string {
  return path.join(d, "fixtures")
}

function resourceFile(d: string): string {
  return path.join(d, "resource.ts")
}
