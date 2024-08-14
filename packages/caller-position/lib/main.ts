export function callerPosition(err: Error, off = 0): [number, number] {
  if (!err.stack) {
    return [-1, -1]
  }

  const ls = err.stack.split("\n")
  if (ls[0].startsWith("Error")) {
    ls.shift()
  }

  const cl = ls[off]
  if (!cl) {
    return [-1, -1]
  }

  const pm = /(\d*:\d*)\)?$/.exec(cl)
  if (!(pm && pm[1])) {
    return [-1, -1]
  }

  const [lr, cr] = pm[1].split(":")
  if (lr === undefined || cr === undefined) {
    return [-1, -1]
  }

  const ln = Number(lr)
  const cn = Number(cr)
  if (Number.isNaN(ln) || Number.isNaN(cn)) {
    return [-1, -1]
  }

  return [ln, cn]
}
