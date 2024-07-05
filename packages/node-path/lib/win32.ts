import os from "node:os"

export function escape(p: string): string {
  if (!isWindows()) {
    return p
  }
  return p.replaceAll("\\", "\\\\")
}

function isWindows(): boolean {
  return os.platform() === "win32"
}
