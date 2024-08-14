import {spawn} from "node:child_process"
import {type Writable} from "node:stream"
import {hasCommand} from "@onlyoffice/command"

export async function hasJQ(): Promise<boolean> {
  return await hasCommand("jq")
}

export async function jq(w: Writable, opts: string[] = []): Promise<void> {
  await new Promise((res, rej) => {
    const s = spawn("jq", ["--monochrome-output", ...opts], {shell: true})
    s.stdout.on("data", (ch) => {
      w.write(ch)
    })
    s.on("close", res)
    s.on("error", rej)
  })
}
