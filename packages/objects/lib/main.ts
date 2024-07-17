export function isEmpty(o: unknown): boolean {
  if (!isPlain(o)) {
    return false
  }

  for (const k in o) {
    if (Object.hasOwn(o, k)) {
      return false
    }
  }

  return true
}

export function isPlain(o: unknown): o is object {
  if (!o || typeof o !== "object") {
    return false
  }

  const p = Object.getPrototypeOf(o)
  if (!p && p !== Object.prototype) {
    return false
  }

  return true
}
