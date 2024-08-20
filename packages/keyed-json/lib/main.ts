export function fromKeys(s: string): Record<string, unknown> {
  const r: Record<string, unknown> = {}
  let i = 0

  while (i < s.length) {
    while (i < s.length && s[i] === " ") {
      i += 1
    }

    const a = i
    while (i < s.length && s[i] !== "=") {
      i += 1
    }

    const k = s.slice(a, i)

    i += 1

    if (s[i] === "{") {
      const a = i
      let n = 1

      i += 1

      while (n > 0 && i < s.length) {
        if (s[i] === "{") {
          n += 1
        } else if (s[i] === "}") {
          n -= 1
        }
        i += 1
      }

      const c = s.slice(a, i)
      r[k] = JSON.parse(c)
    }
  }

  return r
}
