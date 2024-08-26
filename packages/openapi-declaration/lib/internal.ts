import {randomUUID} from "node:crypto"
import * as Service from "@onlyoffice/service-declaration/main2.ts"
import {type OpenAPIV3_1 as OpenApi} from "openapi-types"

// type OpenApiComponentsKey = keyof OpenApi.ComponentsObject
// type ValueOf<T> = T[keyof T]

// Create groups while parsing a request. Create parent-child relationships.
// For multiple tags duplicate the request and assign it to each group.
// Throw group into stream. And check in cache if group with the same name already exists.
// group, group, request, <reset the group cache here> group...

// export function component<K extends OpenApiComponentsKey>(
//   k: K,
//   s: ValueOf<NonNullable<OpenApi.ComponentsObject[K]>>,
// ): [Component, ...Error[]] {
//   if (k === "schemas") {
//     const v = s as ValueOf<NonNullable<OpenApi.ComponentsObject["schemas"]>>
//     return Model.fromOpenApi(v)
//   }
//   if (k === "responses") {
//     const v = s as ValueOf<NonNullable<OpenApi.ComponentsObject["responses"]>>
//     return ResponseComponent.fromOpenApi(v)
//   }

//   const e = new Error(`The component '${k}' is not supported`)
//   return [new NoopComponent(), e]
// }

// export type Components = Record<string, Component>

// export type Component = ComponentMap[keyof ComponentMap]

// export interface ComponentMap {
//   model: Model
//   noop: NoopComponent
//   response: ResponseComponent
//   // security: SecurityComponent
// }

// export class NoopComponent {}

// export class ResponseComponent {
//   self: Response | Reference = new Response()

//   static fromOpenApi(
//     s: OpenApi.ResponseObject | OpenApi.ReferenceObject,
//   ): [ResponseComponent, ...Error[]] {
//     const es: Error[] = []
//     const c = new ResponseComponent()

//     if ("$ref" in s) {
//       [c.self] = Reference.fromOpenApi(s)
//     } else {
//       const [r, ...ne] = Response.fromOpenApi(s)
//       if (ne.length !== 0) {
//         es.push(...ne)
//       }
//       c.self = r
//     }

//     return [c, ...es]
//   }
// }

// export class SecurityComponent implements ComponentNode {
//   type = "security" as const
//   self: next.Security = new next.NoopSecurity()
// }

export function declaration(s: OpenApi.OperationObject): [Declaration[], ...Error[]] {
  if (!s.tags) {
    const e = new Error("The `tags` of the `OperationObject` is missing")
    return [[], e]
  }

  const ds: Declaration[] = []
  const es: Error[] = []

  for (const t of s.tags) {
    for (const n of t.split("/")) {
      const g = new GroupDeclaration()
      g.name = n.trim()
      ds.push(g)
    }
  }

  const [r, ...ne] = RequestDeclaration.fromOpenApi(s)
  if (ne.length !== 0) {
    es.push(...ne)
  }

  const l = ds.length
  for (let i = 0; i < l; i += 1) {
    const g = ds[i] as GroupDeclaration
    const c = RequestDeclaration.clone(r)
    g.children.push(c.id)
    c.parent = g.id
    ds.push(c)
  }

  return [ds, ...es]
}

export type Declarations = Declaration[]

export type Declaration = DeclarationMap[keyof DeclarationMap]

export interface DeclarationMap {
  group: GroupDeclaration
  request: RequestDeclaration
}

export class GroupDeclaration implements DeclarationNode {
  id = randomUUID()
  name = ""
  parent = ""
  children: string[] = []
}

export class RequestDeclaration implements DeclarationNode {
  id = randomUUID()
  method = ""
  path = ""
  parent = ""
  summary = ""
  description = ""
  deprecated = false
  headerParameters: Parameter[] = []
  cookieParameters: Parameter[] = []
  pathParameters: Parameter[] = []
  queryParameters: Parameter[] = []
  // bodyParameters: (Parameter | Reference)[] = []
  unknownParameters: Reference[] = []
  // examples: unknown[] = []
  responses: ResponseRecord[] = []

  static clone(a: RequestDeclaration): RequestDeclaration {
    const b = new RequestDeclaration()
    b.method = a.method
    b.path = a.path
    b.summary = a.summary
    b.description = a.description
    b.deprecated = a.deprecated
    b.headerParameters = a.headerParameters
    b.cookieParameters = a.cookieParameters
    b.pathParameters = a.pathParameters
    b.queryParameters = a.queryParameters
    // b.bodyParameters = a.bodyParameters
    b.unknownParameters = a.unknownParameters
    // b.examples = a.examples
    b.responses = a.responses
    return b
  }

  static fromOpenApi(s: OpenApi.OperationObject): [RequestDeclaration, ...Error[]] {
    const es: Error[] = []
    const d = new RequestDeclaration()

    if (!s.summary) {
      const e = new Error("The `summary` of the `OperationObject` is missing")
      es.push(e)
    } else {
      d.summary = s.summary
    }

    if (s.description) {
      d.description = s.description
    }

    if (s.deprecated) {
      d.deprecated = s.deprecated
    }

    if (s.parameters) {
      for (const o of s.parameters) {
        if ("$ref" in o) {
          const [r] = Reference.fromOpenApi(o)
          d.unknownParameters.push(r)
          continue
        }

        const [p, ...ne] = Parameter.fromOpenApi(o)
        if (ne.length !== 0) {
          es.push(...ne)
        }

        switch (o.in) {
        case "cookie":
          d.cookieParameters.push(p)
          continue
        case "header":
          d.headerParameters.push(p)
          continue
        case "path":
          d.pathParameters.push(p)
          continue
        case "query":
          d.queryParameters.push(p)
          continue
        }

        const e = new Error(`The parameter 'in' value '${o.in}' is not supported`)
        es.push(e)
      }
    }

    // if (s.requestBody) {
    //   if ("$ref" in s.requestBody) {
    //     const [r] = Reference.fromOpenApi(s.requestBody)
    //     // d.bodyParameters.push(r)
    //   } else {
    //     const n = Object.entries(s.requestBody.content)
    //     const [[_, o]] = n

    //     if (!o.schema) {
    //       const e = new Error("The `schema` of the `MediaTypeObject` is missing")
    //       es.push(e)
    //     } else if ("$ref" in o.schema) {
    //       // [r.body] = Reference.fromOpenApi(o.schema)
    //     } else {
    //       // const [m, ...ne] = Model.fromOpenApi(o.schema)
    //       // if (ne.length !== 0) {
    //       //   es.push(...ne)
    //       // }
    //       // r.body = m
    //     }
    //   }
    // }

    if (s.responses) {
      for (const [k, v] of Object.entries(s.responses)) {
        const [r, ...ne] = ResponseRecord.fromOpenApi(v)
        if (ne.length !== 0) {
          es.push(...ne)
        }

        r.status = Number(k)

        if (!(r.self instanceof Reference)) {
          if (d.headerParameters.length === 0) {
            d.headerParameters = r.self.request.headerParameters
          } else {
            for (const b of r.self.request.headerParameters) {
              const l = d.headerParameters.length
              for (let i = 0; i < l; i += 1) {
                const a = d.headerParameters[i]
                if (b.identifier === a.identifier) {
                  const c = Parameter.merge(a, b)
                  d.headerParameters[i] = c
                  continue
                }
                d.headerParameters.push(b)
              }
            }
          }
          r.self.request.headerParameters = []
        }

        d.responses.push(r)
      }
    }

    return [d, ...es]
  }

  toService(): Service.RequestDeclaration {
    if (this.unknownParameters.length !== 0) {
      throw new TypeError("The `unknownParameters` contains a `Reference`, which cannot be converted to Service.Parameter")
    }

    const d = new Service.RequestDeclaration()

    d.method = this.method
    d.path = this.path
    d.summary = this.summary
    d.description = this.description
    d.deprecated = this.deprecated

    for (const p of this.headerParameters) {
      const s = p.toService()
      d.headerParameters.push(s)
    }

    for (const p of this.cookieParameters) {
      const s = p.toService()
      d.cookieParameters.push(s)
    }

    for (const p of this.pathParameters) {
      const s = p.toService()
      d.pathParameters.push(s)
    }

    for (const p of this.queryParameters) {
      const s = p.toService()
      d.queryParameters.push(s)
    }

    for (const r of this.responses) {
      const s = r.toService()
      d.responses.push(s)
    }

    return d
  }
}

export interface DeclarationNode {
  id: string
}

export class ResponseRecord {
  status = -1
  self: Response | Reference = new Response()

  static fromOpenApi(
    s: OpenApi.ResponseObject | OpenApi.ReferenceObject,
  ): [ResponseRecord, ...Error[]] {
    const es: Error[] = []
    const r = new ResponseRecord()

    if ("$ref" in s) {
      [r.self] = Reference.fromOpenApi(s)
    } else {
      const [o, ...ne] = Response.fromOpenApi(s)
      if (ne.length !== 0) {
        es.push(...ne)
      }
      r.self = o
    }

    return [r, ...es]
  }

  toService(): Service.Response {
    const r = new Service.Response()

    if (this.self instanceof Reference) {
      throw new TypeError("The `self` is a `Reference`, which cannot be converted to Service.Type")
    }
    if (this.self.body instanceof Reference) {
      throw new TypeError("The `self.body` is a `Reference`, which cannot be converted to Service.Type")
    }
    if (this.self.body.type instanceof Reference) {
      throw new TypeError("The `self.body.type` is a `Reference`, which cannot be converted to Service.Type")
    }

    r.status = this.status
    r.description = this.self.description
    r.body = this.self.body.type.toService()

    if (this.self.body.description) {
      if (r.description.length !== 0) {
        r.description += "\n\n"
      }
      r.description += this.self.body.description
    }

    return r
  }
}

export class Response {
  request = new RequestDeclaration()
  description = ""
  body: Model | Reference = new Model()

  static fromOpenApi(s: OpenApi.ResponseObject): [Response, ...Error[]] {
    const es: Error[] = []
    const r = new Response()

    if (s.description) {
      r.description = s.description
    }

    if (!s.content) {
      const e = new Error("The `content` of the `ResponseObject` is missing")
      es.push(e)

      const m = new Model()
      m.type = new UnknownType()
      r.body = m
    } else {
      const n = Object.entries(s.content)
      const [[_, o]] = n

      if (!o.schema) {
        const e = new Error("The `schema` of the `MediaTypeObject` is missing")
        es.push(e)

        const m = new Model()
        m.type = new UnknownType()
        r.body = m
      } else if ("$ref" in o.schema) {
        [r.body] = Reference.fromOpenApi(o.schema)
      } else {
        const [m, ...ne] = Model.fromOpenApi(o.schema)
        if (ne.length !== 0) {
          es.push(...ne)
        }
        r.body = m
      }

      const p = new Parameter()
      p.identifier = "Accept"
      p.self = new Model()
      p.self.type = new EnumType()

      for (const [k] of n) {
        const t = new LiteralType()
        t.base = new StringType()
        t.const = k
        p.self.type.cases.push(t)
      }

      r.request.headerParameters.push(p)
    }

    return [r, ...es]
  }
}

export class Parameter {
  identifier = ""
  description = ""
  required = false
  deprecated = false
  self: Model | Reference = new Model()

  static merge(a: Parameter, b: Parameter): Parameter {
    if (a.identifier !== b.identifier) {
      throw new Error("The `identifier` of the `Parameter` is different")
    }

    if (a.self instanceof Reference) {
      throw new TypeError("The `a.self` is a `Reference`, which is not supported")
    }
    if (b.self instanceof Reference) {
      throw new TypeError("The `b.self` is a `Reference`, which is not supported")
    }

    const c = new Parameter()
    c.identifier = b.identifier
    c.description = b.description
    c.required = b.required
    c.deprecated = b.deprecated
    c.self = Model.merge(a.self, b.self)

    return c
  }

  static fromOpenApi(s: OpenApi.ParameterObject): [Parameter, ...Error[]] {
    const es: Error[] = []
    const p = new Parameter()
    p.identifier = s.name

    if (s.description) {
      p.description = s.description
    }

    if (s.required) {
      p.required = s.required
    }

    if (s.deprecated) {
      p.deprecated = s.deprecated
    }

    if (!s.schema) {
      const e = new Error("The `schema` of the `ParameterObject` is missing")
      es.push(e)

      const m = new Model()
      m.type = new UnknownType()
      p.self = m
    } else if ("$ref" in s.schema) {
      [p.self] = Reference.fromOpenApi(s.schema)
    } else {
      const [m, ...ne] = Model.fromOpenApi(s.schema)
      if (ne.length !== 0) {
        es.push(...ne)
      }
      p.self = m
    }

    return [p, ...es]
  }

  toService(): Service.Property {
    const p = new Service.Property()

    if (this.self instanceof Reference) {
      throw new TypeError("The `self` is a `Reference`, which cannot be converted to Service.Type")
    }
    if (this.self.type instanceof Reference) {
      throw new TypeError("The `self.type` is a `Reference`, which cannot be converted to Service.Type")
    }

    p.identifier = this.identifier
    p.description = this.description
    p.required = this.required
    p.deprecated = this.deprecated
    p.type = this.self.type.toService()

    if (this.self.description) {
      if (p.description.length !== 0) {
        p.description += "\n\n"
      }
      p.description += this.self.description
    }

    return p
  }
}

export class PropertyRecord {
  identifier = ""
  required = false
  self: Model | Reference = new Model()

  static fromOpenApi(
    s: OpenApi.SchemaObject | OpenApi.ReferenceObject,
  ): [PropertyRecord, ...Error[]] {
    const es: Error[] = []
    const p = new PropertyRecord()

    if ("$ref" in s) {
      [p.self] = Reference.fromOpenApi(s)
    } else {
      const [m, ...ne] = Model.fromOpenApi(s)
      if (ne.length !== 0) {
        es.push(...ne)
      }
      p.self = m
    }

    return [p, ...es]
  }

  toService(): Service.Property {
    const p = new Service.Property()

    if (this.self instanceof Reference) {
      throw new TypeError("The `self` is a `Reference`, which cannot be converted to Service.Type")
    }
    if (this.self.type instanceof Reference) {
      throw new TypeError("The `self.type` is a `Reference`, which cannot be converted to Service.Type")
    }

    p.identifier = this.identifier
    p.description = this.self.description
    p.required = this.required
    p.type = this.self.type.toService()

    return p
  }
}

export class Model {
  description = ""
  deprecated = false
  type: Type | Reference = new NoopType()

  static merge(a: Model, b: Model): Model {
    if (a.type instanceof Reference) {
      throw new TypeError("The `a.self.type` is a `Reference`, which is not supported")
    }
    if (b.type instanceof Reference) {
      throw new TypeError("The `b.self.type` is a `Reference`, which is not supported")
    }

    if (!(a.type instanceof EnumType)) {
      throw new TypeError("The `a.self.type` is not an `EnumType`, which is not supported")
    }
    if (!(b.type instanceof EnumType)) {
      throw new TypeError("The `b.self.type` is not an `EnumType`, which is not supported")
    }

    const c = new Model()
    c.description = b.description
    c.deprecated = b.deprecated
    c.type = EnumType.merge(a.type, b.type)

    return c
  }

  static fromOpenApi(s: OpenApi.SchemaObject): [Model, ...Error[]] {
    const es: Error[] = []
    const m = new Model()

    const [t, ...ne] = type(s)
    if (ne.length !== 0) {
      es.push(...ne)
    }

    if (s.description) {
      m.description = s.description
    }
    if (s.deprecated) {
      m.deprecated = s.deprecated
    }

    m.type = t

    return [m, ...es]
  }
}

export type Type = TypeMap[keyof TypeMap]

export interface TypeMap {
  array: ArrayType
  boolean: BooleanType
  enum: EnumType
  integer: IntegerType
  literal: LiteralType
  noop: NoopType
  null: NullType
  number: NumberType
  object: ObjectType
  string: StringType
  union: UnionType
  unknown: UnknownType
}

export function type(
  s: OpenApi.SchemaObject | OpenApi.ReferenceObject,
): [Type | Reference, ...Error[]] {
  if ("$ref" in s) {
    return Reference.fromOpenApi(s)
  }

  if (s.enum) {
    return EnumType.fromOpenApi(s)
  }

  if (!s.type) {
    const e = new Error("The `type` of the `SchemaObject` is missing")
    return [new UnknownType(), e]
  }

  if (Array.isArray(s.type)) {
    return UnionType.fromOpenApi(s)
  }

  switch (s.type) {
  case "array":
    return ArrayType.fromOpenApi(s)
  case "boolean":
    return [new BooleanType()]
  case "integer":
    return [new IntegerType()]
  case "null":
    return [new NullType()]
  case "number":
    return [new NumberType()]
  case "object":
    return ObjectType.fromOpenApi(s)
  case "string":
    return [new StringType()]
  default:
    break
  }

  const e = new Error(`The type '${s.type}' is not supported`)
  return [new UnknownType(), e]
}

export class ArrayType {
  items: Type | Reference = new NoopType()

  static fromOpenApi(s: OpenApi.ArraySchemaObject): [ArrayType, ...Error[]] {
    const es: Error[] = []
    const t = new ArrayType()

    const [n, ...ne] = type(s.items)
    if (ne.length !== 0) {
      es.push(...ne)
    }
    t.items = n

    return [t, ...es]
  }

  toService(): Service.ArrayType {
    const t = new Service.ArrayType()

    if (this.items instanceof Reference) {
      throw new TypeError("The `items` is a `Reference`, which cannot be converted to Service.Type")
    }

    t.items = this.items.toService()

    return t
  }
}

export class BooleanType {
  toService(): Service.BooleanType {
    return new Service.BooleanType()
  }
}

export class EnumType {
  cases: LiteralType[] = []

  static merge(a: EnumType, b: EnumType): EnumType {
    const c = new EnumType()
    const t = new Map<unknown, LiteralType>()

    for (const c of a.cases) {
      t.set(c.const, c)
    }

    for (const c of b.cases) {
      if (t.has(c.const)) {
        throw new Error("The `const` of the `LiteralType` is duplicated")
      }
      t.set(c.const, c)
    }

    c.cases = [...t.values()]

    return c
  }

  static fromOpenApi(s: OpenApi.SchemaObject): [EnumType, ...Error[]] {
    const es: Error[] = []
    const t = new EnumType()

    if (!s.enum) {
      const e = new Error("The `enum` of the `SchemaObject` is missing")
      es.push(e)
    } else {
      const c = structuredClone(s)
      delete c.enum

      const [b, ...ne] = type(c)
      if (ne.length !== 0) {
        es.push(...ne)
      }

      for (const c of s.enum) {
        const n = new LiteralType()
        n.base = b
        n.const = c
        t.cases.push(n)
      }
    }

    return [t, ...es]
  }

  toService(): Service.EnumType {
    const t = new Service.EnumType()

    for (const c of this.cases) {
      const s = c.toService()
      t.cases.push(s)
    }

    return t
  }
}

export class IntegerType {
  toService(): Service.IntegerType {
    return new Service.IntegerType()
  }
}

export class LiteralType {
  base: Type | Reference = new NoopType()
  "const": unknown = ""

  toService(): Service.LiteralType {
    const t = new Service.LiteralType()

    if (this.base instanceof Reference) {
      throw new TypeError("The `base` is a `Reference`, which cannot be converted to Service.Type")
    }

    t.base = this.base.toService()
    t.const = this.const

    return t
  }
}

export class NoopType {
  toService(): Service.NoopType {
    return new Service.NoopType()
  }
}

export class NullType {
  toService(): Service.NullType {
    return new Service.NullType()
  }
}

export class NumberType {
  toService(): Service.NumberType {
    return new Service.NumberType()
  }
}

export class ObjectType {
  properties: PropertyRecord[] = []

  static fromOpenApi(s: OpenApi.NonArraySchemaObject): [ObjectType, ...Error[]] {
    const es: Error[] = []
    const t = new ObjectType()

    if (!s.properties) {
      const e = new Error("The `properties` of the `NonArraySchemaObject` is missing")
      es.push(e)
    } else {
      for (const [k, v] of Object.entries(s.properties)) {
        const [p, ...ne] = PropertyRecord.fromOpenApi(v)
        if (ne.length !== 0) {
          es.push(...ne)
        }

        p.identifier = k

        if (s.required && s.required.includes(k)) {
          p.required = true
        }

        t.properties.push(p)
      }
    }

    return [t, ...es]
  }

  toService(): Service.ObjectType {
    const t = new Service.ObjectType()

    for (const p of this.properties) {
      const s = p.toService()
      t.properties.push(s)
    }

    return t
  }
}

export class StringType {
  toService(): Service.StringType {
    return new Service.StringType()
  }
}

export class UnionType {
  types: (Type | Reference)[] = []

  static fromOpenApi(s: OpenApi.SchemaObject): [UnionType, ...Error[]] {
    const es: Error[] = []
    const t = new UnionType()

    if (!s.type) {
      const e = new Error("The `type` of the `SchemaObject` is missing")
      es.push(e)
      t.types = [new UnknownType()]
    } else if (!Array.isArray(s.type)) {
      const e = new Error("The `type` of the `SchemaObject` is not an array")
      es.push(e)
      t.types = [new UnknownType()]
    } else {
      const c = structuredClone(s)

      for (const v of s.type) {
        c.type = v

        const [n, ...ne] = type(c)
        if (ne.length !== 0) {
          es.push(...ne)
        }

        t.types.push(n)
      }
    }

    return [t, ...es]
  }

  toService(): Service.UnionType {
    const t = new Service.UnionType()

    for (const u of this.types) {
      if (u instanceof Reference) {
        throw new TypeError("The type of `types` is a `Reference`, which cannot be converted to Service.Type")
      }

      const s = u.toService()
      t.types.push(s)
    }

    return t
  }
}

export class UnknownType {
  toService(): Service.UnknownType {
    return new Service.UnknownType()
  }
}

export class Reference {
  id = ""

  static fromOpenApi(s: OpenApi.ReferenceObject): [Reference] {
    const r = new Reference()
    r.id = s.$ref
    return [r]
  }
}
