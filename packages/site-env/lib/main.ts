import {env} from "node:process"

export function configMode(): string {
  const m = env.SITE_CONFIG_MODE
  if (m === undefined) {
    return ""
  }
  return m
}
