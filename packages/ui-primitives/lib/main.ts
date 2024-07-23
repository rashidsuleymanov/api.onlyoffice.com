import {mkdir, readFile, rm, writeFile} from "node:fs/promises"
import {existsSync} from "node:fs"
import {join} from "node:path"
import {argv} from "node:process"
import {URL, fileURLToPath} from "node:url"
import sade from "sade"
import {Colors} from "./colors.ts"

function main(): void {
  sade("ui-primitives", true)
    .action(build)
    .parse(argv)
}

async function build(): Promise<void> {
  await prepare()
  const c = await readColors()
  const s = await readStyles()
  await writeStyles(c, s)
}

async function prepare(): Promise<void> {
  const rd = rootDir()
  const dd = distDir(rd)
  if (existsSync(dd)) {
    await rm(dd, {recursive: true})
  }
  await mkdir(dd)
}

async function readStyles(): Promise<string> {
  const rd = rootDir()
  const dd = libDir(rd)
  const sf = stylesFile(dd)
  return await readFile(sf, "utf8")
}

async function readColors(): Promise<Colors> {
  const rd = rootDir()
  const dd = libDir(rd)
  const cf = colorsFile(dd)
  const cc = await readFile(cf, "utf8")
  return Colors.fromYaml(cc)
}

async function writeStyles(c: Colors, s: string): Promise<void> {
  const rd = rootDir()
  const dd = distDir(rd)
  const of = outputFile(dd)
  const oc = Colors.toStyles(c)
  await writeFile(of, `${oc}\n${s}`)
}

function rootDir(): string {
  const u = new URL("..", import.meta.url)
  return fileURLToPath(u)
}

function libDir(d: string): string {
  return join(d, "lib")
}

function colorsFile(d: string): string {
  return join(d, "colors.yml")
}

function stylesFile(d: string): string {
  return join(d, "main.css")
}

function distDir(d: string): string {
  return join(d, "dist")
}

function outputFile(d: string): string {
  return join(d, "main.css")
}

main()
