import {type DocEditorConfig, type DocEditorConfigEvents} from "@onlyoffice/document-server-types"

export function cloneConfig(cf: DocEditorConfig): DocEditorConfig {
  let cp = {...cf}
  if (cp.events) {
    cp.events = {}
  }

  cp = structuredClone(cp)
  if (cp.events && cf.events) {
    for (const [k, v] of Object.entries(cf.events)) {
      cp.events[k as keyof DocEditorConfigEvents] = v
    }
  }

  return cp
}

export function mergeConfig(a: DocEditorConfig, b: DocEditorConfig): DocEditorConfig {
  const c = cloneConfig(a)

  if (a.document && b.document) {
    c.document = {...a.document, ...b.document}
  } else if (a.document) {
    c.document = a.document
  } else if (b.document) {
    c.document = b.document
  }

  return c
}
