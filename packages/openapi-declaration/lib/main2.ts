import process from "node:process"
import {Transform, type TransformCallback} from "node:stream"
import {Console} from "@onlyoffice/console"
import * as Service from "@onlyoffice/service-declaration/main2.ts"
import {OpenAPIV3, type OpenAPIV3_1 as OpenApi} from "openapi-types"
import pack from "../package.json" with {type: "json"}

type OpenApiComponentsKey = keyof OpenApi.ComponentsObject
type ValueOf<T> = T[keyof T]

const {HttpMethods} = OpenAPIV3
const console = new Console(pack.name, process.stdout, process.stderr)

export interface ComponentChunk<K extends OpenApiComponentsKey> {
  key: K
  value: ValueOf<NonNullable<OpenApi.ComponentsObject[K]>>
}

export class ProcessComponent<K extends OpenApiComponentsKey> extends Transform {
  k: K

  constructor(k: K) {
    super({objectMode: true})
    this.k = k
  }

  _transform(ch: ComponentChunk<K>, _: BufferEncoding, cb: TransformCallback): void {
    const k = `#/components/${this.k}/${ch.key}`
    console.log(`Start processing '${k}'`)

    const [c, ...es] = component(this.k, ch.value)
    if (es.length !== 0) {
      for (const e of es) {
        console.error(e.message)
      }
    }

    // this.push({key: k, value: c})
    console.log(`Finish processing '${k}'`)

    cb()
  }
}

export interface PathChunk {
  key: string
  value: OpenApi.PathItemObject
}

export class ProcessPath extends Transform {
  constructor() {
    super({objectMode: true})
  }

  _transform(ch: PathChunk, _: BufferEncoding, cb: TransformCallback): void {
    console.log(`Start processing '${ch.key}'`)

    for (const m of Object.values(HttpMethods)) {
      const s = ch.value[m]
      if (!s) {
        continue
      }

      const n = `${m} ${ch.key}`
      console.log(`Start processing '${n}'`)

      if (!s.tags) {
        console.error("The `tags` of the `PathItemObject` is missing")
        console.log(`Finish processing '${n}'`)
        continue
      }

      const c = structuredClone(s)

      for (const t of s.tags) {
        const a = t.split("/")

        c.tags = [a[0]]

        const [d, ...es] = RequestDeclaration.fromOpenApi(c)
        if (es.length !== 0) {
          for (const e of es) {
            console.error(e.message)
          }
        }

        d.method = m
        d.path = ch.key
      }
    }

    cb()
  }
}
