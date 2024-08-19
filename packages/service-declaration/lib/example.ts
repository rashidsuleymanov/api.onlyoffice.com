import {type Example, example} from "@onlyoffice/declaration-code-example"
import {HTTPSnippet} from "httpsnippet"
import {type RequestDeclaration} from "./main.ts"

export function httpExample(req: RequestDeclaration): Example {
  const e = example()
  e.syntax = "http"

  if (!req.endpoint) {
    return e
  }

  const s = toHttpsnippet(req)
  e.code = s.convert("http", "http1.1")

  return e
}

export function curlExample(req: RequestDeclaration): Example {
  const e = example()
  e.syntax = "shell"

  if (!req.endpoint) {
    return e
  }

  const s = toHttpsnippet(req)
  e.code = s.convert("shell")

  return e
}

function toHttpsnippet(req: RequestDeclaration): HTTPSnippet {
  const [m, p] = req.endpoint.split(" ")
  const u = new URL(p, "http://example.com")
  if (req.queryParameters) {
    for (const p of req.queryParameters) {
      u.searchParams.set(p.identifier, `{${p.identifier}}`)
    }
  }

  const h = []
  if (req.headerParameters) {
    for (const p of req.headerParameters) {
      h.push({
        name: p.identifier,
        value: p.cases.join(", "),
      })
    }
  }

  return new HTTPSnippet({
    method: m,
    url: u.toString(),
    headers: h,
  })
}
