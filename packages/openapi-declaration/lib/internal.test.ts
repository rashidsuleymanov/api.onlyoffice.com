import * as Service from "@onlyoffice/service-declaration/main2.ts"
import {isValidUUIDV4} from "is-valid-uuid-v4"
import {test} from "uvu"
import {equal as eq, is, unreachable as un} from "uvu/assert"
import {
  GroupDeclaration,
  ArrayType,
  BooleanType,
  EnumType,
  IntegerType,
  LiteralType,
  Model,
  NoopType,
  NullType,
  NumberType,
  ObjectType,
  Parameter,
  PropertyRecord,
  Reference,
  RequestDeclaration,
  Response,
  ResponseRecord,
  StringType,
  UnionType,
  UnknownType,
  declaration,
  type,
} from "./internal.ts"

test("Reference: initializes an empty instance", () => {
  const r = new Reference()
  const s = Object.keys(r)
  eq(s, ["id"])
  is(r.id, "")
})

test("Reference: initializes from an OpenApi.ReferenceObject", () => {
  const [a, ...es] = Reference.fromOpenApi({$ref: "$"})
  is(es.length, 0)

  const e = new Reference()
  e.id = "$"

  eq(a, e)
})

test("UnknownType: initializes an empty instance", () => {
  const t = new UnknownType()
  const s = Object.keys(t)
  eq(s, [])
})

test("UnknownType: converts to the Service.UnknownType", () => {
  const t = new UnknownType()
  const a = t.toService()
  const e = new Service.UnknownType()
  eq(a, e)
})

test("UnionType: initializes an empty instance", () => {
  const t = new UnionType()
  const s = Object.keys(t)
  eq(s, ["types"])
  eq(t.types, [])
})

test("UnionType: initializes from an OpenApi.SchemaObject with error if the `type` property is not defined", () => {
  const [a, ...es] = UnionType.fromOpenApi({})
  is(es.length, 1)

  const [er] = es
  is(er.message, "The `type` of the `SchemaObject` is missing")

  const e = new UnionType()
  e.types = [new UnknownType()]

  eq(a, e)
})

test("UnionType: initializes from an OpenApi.SchemaObject with error if the `type` property is not an array", () => {
  const [a, ...es] = UnionType.fromOpenApi({type: "string"})
  is(es.length, 1)

  const [er] = es
  is(er.message, "The `type` of the `SchemaObject` is not an array")

  const e = new UnionType()
  e.types = [new UnknownType()]

  eq(a, e)
})

test("UnionType: initializes from an OpenApi.SchemaObject with an array of types", () => {
  const [a, ...es] = UnionType.fromOpenApi({type: ["string", "number"]})
  is(es.length, 0)

  const e = new UnionType()
  e.types = [new StringType(), new NumberType()]

  eq(a, e)
})

test("UnionType: converts to the Service.UnionType with error if one of the types is a reference", () => {
  const t = new UnionType()
  t.types = [new StringType(), new Reference()]

  try {
    const s = t.toService()
    un(`Expected an error, but got '${s.types[1].type}'`)
  } catch (e) {
    is(e instanceof TypeError && e.message, "The type of `types` is a `Reference`, which cannot be converted to Service.Type")
  }
})

test("UnionType: converts to the Service.UnionType", () => {
  const t = new UnionType()
  t.types = [new StringType(), new NumberType()]

  const a = t.toService()

  const e = new Service.UnionType()
  e.types = [new Service.StringType(), new Service.NumberType()]

  eq(a, e)
})

test("StringType: initializes an empty instance", () => {
  const t = new StringType()
  const k = Object.keys(t)
  eq(k, [])
})

test("StringType: converts to the Service.StringType", () => {
  const t = new StringType()
  const a = t.toService()
  const e = new Service.StringType()
  eq(a, e)
})

test("ObjectType: initializes an empty instance", () => {
  const t = new ObjectType()
  const k = Object.keys(t)
  eq(k, ["properties"])
  eq(t.properties, [])
})

test("ObjectType: initializes from an OpenApi.SchemaObject with error if the `properties` property is not defined", () => {
  const [a, ...es] = ObjectType.fromOpenApi({})
  is(es.length, 1)

  const [er] = es
  is(er.message, "The `properties` of the `NonArraySchemaObject` is missing")

  const e = new ObjectType()
  eq(a, e)
})

test("ObjectType: initializes from an OpenApi.SchemaObject with properties", () => {
  const [a, ...es] = ObjectType.fromOpenApi({
    properties: {
      s: {type: "string"},
      n: {type: "number"},
    },
  })
  is(es.length, 0)

  const e = new ObjectType()
  e.properties = [s(), n()]

  eq(a, e)

  function s(): PropertyRecord {
    const p = new PropertyRecord()
    p.identifier = "s"
    p.self = new Model()
    p.self.type = new StringType()
    return p
  }

  function n(): PropertyRecord {
    const p = new PropertyRecord()
    p.identifier = "n"
    p.self = new Model()
    p.self.type = new NumberType()
    return p
  }
})

test("ObjectType: initializes from an OpenApi.SchemaObject with required properties", () => {
  const [a, ...es] = ObjectType.fromOpenApi({
    properties: {
      s: {type: "string"},
      n: {type: "number"},
    },
    required: ["s"],
  })
  is(es.length, 0)

  const e = new ObjectType()
  e.properties = [s(), n()]

  eq(a, e)

  function s(): PropertyRecord {
    const p = new PropertyRecord()
    p.identifier = "s"
    p.required = true
    p.self = new Model()
    p.self.type = new StringType()
    return p
  }

  function n(): PropertyRecord {
    const p = new PropertyRecord()
    p.identifier = "n"
    p.self = new Model()
    p.self.type = new NumberType()
    return p
  }
})

test("ObjectType: converts to the Service.ObjectType ", () => {
  const t = new ObjectType()
  t.properties = [iS(), iN()]

  const a = t.toService()

  const e = new Service.ObjectType()
  e.properties = [sS(), sN()]

  eq(a, e)

  function iS(): PropertyRecord {
    const p = new PropertyRecord()
    p.identifier = "s"
    p.required = true
    p.self = new Model()
    p.self.type = new StringType()
    return p
  }

  function iN(): PropertyRecord {
    const p = new PropertyRecord()
    p.identifier = "n"
    p.self = new Model()
    p.self.type = new NumberType()
    return p
  }

  function sS(): Service.Property {
    const p = new Service.Property()
    p.identifier = "s"
    p.required = true
    p.type = new Service.StringType()
    return p
  }

  function sN(): Service.Property {
    const p = new Service.Property()
    p.identifier = "n"
    p.type = new Service.NumberType()
    return p
  }
})

test("NumberType: initializes an empty instance", () => {
  const t = new NumberType()
  const k = Object.keys(t)
  eq(k, [])
})

test("NumberType: converts to the Service.NumberType", () => {
  const t = new NumberType()
  const a = t.toService()
  const e = new Service.NumberType()
  eq(a, e)
})

test("NullType: initializes an empty instance", () => {
  const t = new NullType()
  const k = Object.keys(t)
  eq(k, [])
})

test("NullType: converts to the Service.NullType", () => {
  const t = new NullType()
  const a = t.toService()
  const e = new Service.NullType()
  eq(a, e)
})

test("NoopType: initializes an empty instance", () => {
  const t = new NoopType()
  const k = Object.keys(t)
  eq(k, [])
})

test("NoopType: converts to the Service.NoopType", () => {
  const t = new NoopType()
  const a = t.toService()
  const e = new Service.NoopType()
  eq(a, e)
})

test("LiteralType: initializes an empty instance", () => {
  const t = new LiteralType()
  const k = Object.keys(t)
  eq(k, ["base", "const"])
  eq(t.base, new NoopType())
  is(t.const, "")
})

test("LiteralType: converts to the Service.LiteralType with error if the `base` is a reference", () => {
  const t = new LiteralType()
  t.base = new Reference()

  try {
    const s = t.toService()
    un(`Expected an error, but got '${s.base.type}'`)
  } catch (e) {
    is(e instanceof TypeError && e.message, "The `base` is a `Reference`, which cannot be converted to Service.Type")
  }
})

test("LiteralType: converts to the Service.LiteralType", () => {
  const t = new LiteralType()
  t.base = new StringType()
  t.const = "s"

  const a = t.toService()

  const e = new Service.LiteralType()
  e.base = new Service.StringType()
  e.const = "s"

  eq(a, e)
})

test("IntegerType: initializes an empty instance", () => {
  const t = new IntegerType()
  const k = Object.keys(t)
  eq(k, [])
})

test("IntegerType: converts to the Service.IntegerType", () => {
  const t = new IntegerType()
  const a = t.toService()
  const e = new Service.IntegerType()
  eq(a, e)
})

test("EnumType: initializes an empty instance", () => {
  const t = new EnumType()
  const k = Object.keys(t)
  eq(k, ["cases"])
  eq(t.cases, [])
})

test("EnumType: initializes from an OpenApi.SchemaObject with error if the `enum` property is not defined", () => {
  const [a, ...es] = EnumType.fromOpenApi({})
  is(es.length, 1)

  const [er] = es
  is(er.message, "The `enum` of the `SchemaObject` is missing")

  const e = new EnumType()
  eq(a, e)
})

test("EnumType: initializes from an OpenApi.SchemaObject with `enum` and `type` properties", () => {
  const [a, ...es] = EnumType.fromOpenApi({enum: ["s", "s"], type: "string"})
  is(es.length, 0)

  const e = new EnumType()
  e.cases = [s(), s()]

  eq(a, e)

  function s(): LiteralType {
    const t = new LiteralType()
    t.base = new StringType()
    t.const = "s"
    return t
  }
})

test("EnumType: converts to the Service.EnumType", () => {
  const t = new EnumType()
  t.cases = [iS(), iS()]

  const a = t.toService()

  const e = new Service.EnumType()
  e.cases = [sS(), sS()]

  eq(a, e)

  function iS(): LiteralType {
    const t = new LiteralType()
    t.base = new StringType()
    t.const = "s"
    return t
  }

  function sS(): Service.LiteralType {
    const t = new Service.LiteralType()
    t.base = new Service.StringType()
    t.const = "s"
    return t
  }
})

test("BooleanType: initializes an empty instance", () => {
  const t = new BooleanType()
  const k = Object.keys(t)
  eq(k, [])
})

test("BooleanType: converts to the Service.BooleanType", () => {
  const t = new BooleanType()
  const a = t.toService()
  const e = new Service.BooleanType()
  eq(a, e)
})

test("ArrayType: initializes an empty instance", () => {
  const t = new ArrayType()
  const k = Object.keys(t)
  eq(k, ["items"])
  eq(t.items, new NoopType())
})

test("ArrayType: initializes from an OpenApi.ArraySchemaObject", () => {
  const [a, ...es] = ArrayType.fromOpenApi({
    type: "array",
    items: {type: "string"},
  })
  is(es.length, 0)

  const e = new ArrayType()
  e.items = new StringType()

  eq(a, e)
})

test("ArrayType: converts to the Service.ArrayType with error if the `items` is a reference", () => {
  const t = new ArrayType()
  t.items = new Reference()

  try {
    const s = t.toService()
    un(`Expected an error, but got '${s.items.type}'`)
  } catch (e) {
    is(e instanceof TypeError && e.message, "The `items` is a `Reference`, which cannot be converted to Service.Type")
  }
})

test("ArrayType: converts to the Service.ArrayType", () => {
  const t = new ArrayType()
  t.items = new StringType()

  const a = t.toService()

  const e = new Service.ArrayType()
  e.items = new Service.StringType()

  eq(a, e)
})

test("type: creates a Reference instance", () => {
  const [a, ...es] = type({$ref: "$"})
  is(es.length, 0)

  const e = new Reference()
  e.id = "$"

  eq(a, e)
})

test("type: creates an EnumType instance", () => {
  const [a, ...es] = type({enum: ["s", "s"], type: "string"})
  is(es.length, 0)

  const e = new EnumType()
  e.cases = [s(), s()]

  eq(a, e)

  function s(): LiteralType {
    const t = new LiteralType()
    t.base = new StringType()
    t.const = "s"
    return t
  }
})

test("type: returns an error if the `type` property is not defined", () => {
  const [a, ...es] = type({})
  is(es.length, 1)

  const [er] = es
  is(er.message, "The `type` of the `SchemaObject` is missing")

  const e = new UnknownType()
  eq(a, e)
})

test("type: creates an UnionType instance", () => {
  const [a, ...es] = type({type: ["string", "number"]})
  is(es.length, 0)

  const e = new UnionType()
  e.types = [new StringType(), new NumberType()]

  eq(a, e)
})

test("type: creates an ArrayType instance", () => {
  const [a, ...es] = type({type: "array", items: {type: "string"}})
  is(es.length, 0)

  const e = new ArrayType()
  e.items = new StringType()

  eq(a, e)
})

test("type: creates a BooleanType instance", () => {
  const [a, ...es] = type({type: "boolean"})
  is(es.length, 0)

  const e = new BooleanType()
  eq(a, e)
})

test("type: creates an IntegerType instance", () => {
  const [a, ...es] = type({type: "integer"})
  is(es.length, 0)

  const e = new IntegerType()
  eq(a, e)
})

test("type: creates a NullType instance", () => {
  const [a, ...es] = type({type: "null"})
  is(es.length, 0)

  const e = new NullType()
  eq(a, e)
})

test("type: creates a NumberType instance", () => {
  const [a, ...es] = type({type: "number"})
  is(es.length, 0)

  const e = new NumberType()
  eq(a, e)
})

test("type: creates a ObjectType instance", () => {
  const [a, ...es] = type({
    type: "object",
    properties: {
      s: {type: "string"},
      n: {type: "number"},
    },
  })
  is(es.length, 0)

  const e = new ObjectType()
  e.properties = [s(), n()]

  eq(a, e)

  function s(): PropertyRecord {
    const p = new PropertyRecord()
    p.identifier = "s"
    p.self = new Model()
    p.self.type = new StringType()
    return p
  }

  function n(): PropertyRecord {
    const p = new PropertyRecord()
    p.identifier = "n"
    p.self = new Model()
    p.self.type = new NumberType()
    return p
  }
})

test("type: creates a StringType instance", () => {
  const [a, ...es] = type({type: "string"})
  is(es.length, 0)

  const e = new StringType()
  eq(a, e)
})

test("type: returns an error if type is not supported", () => {
  // @ts-expect-error
  const [a, ...es] = type({type: "unsupported"})
  is(es.length, 1)

  const [er] = es
  is(er.message, "The type 'unsupported' is not supported")

  const e = new UnknownType()
  eq(a, e)
})

test("Model: initializes an empty instance", () => {
  const m = new Model()
  const k = Object.keys(m)
  eq(k, ["description", "deprecated", "type"])
  is(m.description, "")
  is(m.deprecated, false)
  eq(m.type, new NoopType())
})

test("Model: initializes from an OpenApi.SchemaObject", () => {
  const [a, ...es] = Model.fromOpenApi({
    description: "d",
    deprecated: true,
    type: "string",
  })
  is(es.length, 0)

  const e = new Model()
  e.description = "d"
  e.deprecated = true
  e.type = new StringType()

  eq(a, e)
})

test("PropertyRecord: initializes an empty instance", () => {
  const p = new PropertyRecord()
  const k = Object.keys(p)
  eq(k, ["identifier", "required", "self"])
  is(p.identifier, "")
  is(p.required, false)
  eq(p.self, new Model())
})

test("PropertyRecord: initializes from an OpenApi.SchemaObject", () => {
  const [a, ...es] = PropertyRecord.fromOpenApi({type: "string"})
  is(es.length, 0)

  const e = new PropertyRecord()
  e.self = new Model()
  e.self.type = new StringType()

  eq(a, e)
})

test("PropertyRecord: initializes from an OpenApi.ReferenceObject", () => {
  const [a, ...es] = PropertyRecord.fromOpenApi({$ref: "$"})
  is(es.length, 0)

  const e = new PropertyRecord()
  e.self = new Reference()
  e.self.id = "$"

  eq(a, e)
})

test("PropertyRecord: converts to the Service.Property with error if the `self` is a reference", () => {
  const p = new PropertyRecord()
  p.self = new Reference()

  try {
    const s = p.toService()
    un(`Expected an error, but got '${s.type.type}'`)
  } catch (e) {
    is(e instanceof TypeError && e.message, "The `self` is a `Reference`, which cannot be converted to Service.Type")
  }
})

test("PropertyRecord: converts to the Service.Property with error if the `self.type` is a reference", () => {
  const p = new PropertyRecord()
  p.self = new Model()
  p.self.type = new Reference()

  try {
    const s = p.toService()
    un(`Expected an error, but got '${s.type.type}'`)
  } catch (e) {
    is(e instanceof TypeError && e.message, "The `self.type` is a `Reference`, which cannot be converted to Service.Type")
  }
})

test("PropertyRecord: converts to the Service.Property", () => {
  const p = new PropertyRecord()
  p.identifier = "s"
  p.required = true
  p.self = new Model()
  p.self.description = "d"
  p.self.type = new StringType()

  const a = p.toService()

  const e = new Service.Property()
  e.identifier = "s"
  e.description = "d"
  e.required = true
  e.type = new Service.StringType()

  eq(a, e)
})

test("Parameter: initializes an empty instance", () => {
  const p = new Parameter()
  const k = Object.keys(p)
  eq(k, ["identifier", "description", "required", "deprecated", "self"])
  is(p.identifier, "")
  is(p.description, "")
  is(p.required, false)
  is(p.deprecated, false)
  eq(p.self, new Model())
})

test("Parameter: initializes from an OpenApi.ParameterObject with an error if the `schema` property is not defined", () => {
  const [a, ...es] = Parameter.fromOpenApi({in: "", name: "n"})
  is(es.length, 1)

  const [er] = es
  is(er.message, "The `schema` of the `ParameterObject` is missing")

  const e = new Parameter()
  e.identifier = "n"
  e.self = new Model()
  e.self.type = new UnknownType()

  eq(a, e)
})

test("Parameter: initializes from an OpenApi.ParameterObject with a schema reference", () => {
  const [a, ...es] = Parameter.fromOpenApi({
    in: "",
    name: "n",
    schema: {$ref: "$"},
  })
  is(es.length, 0)

  const e = new Parameter()
  e.identifier = "n"
  e.self = new Reference()
  e.self.id = "$"

  eq(a, e)
})

test("Parameter: initializes from an OpenApi.ParameterObject with a schema type", () => {
  const [a, ...es] = Parameter.fromOpenApi({
    in: "",
    name: "n",
    schema: {type: "string"},
  })
  is(es.length, 0)

  const e = new Parameter()
  e.identifier = "n"
  e.self = new Model()
  e.self.type = new StringType()

  eq(a, e)
})

test("Parameter: initializes from an OpenApi.ParameterObject with additional properties", () => {
  const [a, ...es] = Parameter.fromOpenApi({
    in: "",
    name: "n",
    description: "d",
    required: true,
    deprecated: true,
    schema: {type: "string"},
  })
  is(es.length, 0)

  const e = new Parameter()
  e.identifier = "n"
  e.description = "d"
  e.required = true
  e.deprecated = true
  e.self = new Model()
  e.self.type = new StringType()

  eq(a, e)
})

test("Parameter: converts to the Service.Parameter with error if the `self` is a reference", () => {
  const p = new Parameter()
  p.self = new Reference()

  try {
    const s = p.toService()
    un(`Expected an error, but got '${s.type.type}'`)
  } catch (e) {
    is(e instanceof TypeError && e.message, "The `self` is a `Reference`, which cannot be converted to Service.Type")
  }
})

test("Parameter: converts to the Service.Parameter with error if the `self.type` is a reference", () => {
  const p = new Parameter()
  p.self = new Model()
  p.self.type = new Reference()

  try {
    const s = p.toService()
    un(`Expected an error, but got '${s.type.type}'`)
  } catch (e) {
    is(e instanceof TypeError && e.message, "The `self.type` is a `Reference`, which cannot be converted to Service.Type")
  }
})

test("Parameter: converts to the Service.Parameter", () => {
  const p = new Parameter()
  p.identifier = "n"
  p.description = "d"
  p.required = true
  p.deprecated = true
  p.self = new Model()
  p.self.type = new StringType()

  const a = p.toService()

  const e = new Service.Property()
  e.identifier = "n"
  e.description = "d"
  e.required = true
  e.deprecated = true
  e.type = new Service.StringType()

  eq(a, e)
})

test("Parameter: converts to the Service.Parameter with the Model description", () => {
  const p = new Parameter()
  p.self = new Model()
  p.self.description = "d"
  p.self.type = new StringType()

  const a = p.toService()

  const e = new Service.Property()
  e.description = "d"
  e.type = new Service.StringType()

  eq(a, e)
})

test("Parameter: converts to the Service.Parameter with both descriptions", () => {
  const p = new Parameter()
  p.description = "a"
  p.self = new Model()
  p.self.description = "b"
  p.self.type = new StringType()

  const a = p.toService()

  const e = new Service.Property()
  e.description = "a\n\nb"
  e.type = new Service.StringType()

  eq(a, e)
})

test("Response: initializes an empty instance", () => {
  const r = new Response()
  const k = Object.keys(r)
  const d = new RequestDeclaration()
  d.id = r.request.id
  eq(k, ["request", "description", "body"])
  eq(r.request, d)
  is(r.description, "")
  eq(r.body, new Model())
})

test("Response: initializes from an OpenApi.ResponseObject with an error if the `content` property is not defined", () => {
  const [a, ...es] = Response.fromOpenApi({description: ""})
  is(es.length, 1)

  const [er] = es
  is(er.message, "The `content` of the `ResponseObject` is missing")

  const e = new Response()
  e.request.id = a.request.id
  e.body = new Model()
  e.body.type = new UnknownType()

  eq(a, e)
})

test("Response: initializes from an OpenApi.ResponseObject with an error if the `content` property does not have a schema", () => {
  const [a, ...es] = Response.fromOpenApi({
    description: "",
    content: {
      "application/json": {},
    },
  })
  is(es.length, 1)

  const [er] = es
  is(er.message, "The `schema` of the `MediaTypeObject` is missing")

  const e = new Response()
  e.request.id = a.request.id
  e.request.headerParameters = [accept(aJ())]
  e.body = new Model()
  e.body.type = new UnknownType()

  eq(a, e)
})

test("Response: initializes from an OpenApi.ResponseObject with content reference", () => {
  const [a, ...es] = Response.fromOpenApi({
    description: "",
    content: {
      "application/json": {schema: {$ref: "$"}},
    },
  })
  is(es.length, 0)

  const e = new Response()
  e.request.id = a.request.id
  e.request.headerParameters = [accept(aJ())]
  e.body = new Reference()
  e.body.id = "$"

  eq(a, e)
})

test("Response: initializes from an OpenApi.ResponseObject with content type", () => {
  const [a, ...es] = Response.fromOpenApi({
    description: "",
    content: {
      "application/json": {schema: {type: "string"}},
    },
  })
  is(es.length, 0)

  const e = new Response()
  e.request.id = a.request.id
  e.request.headerParameters = [accept(aJ())]
  e.body = new Model()
  e.body.type = new StringType()

  eq(a, e)
})

test("Response: initializes from an OpenApi.ResponseObject with a first content only", () => {
  const [a, ...es] = Response.fromOpenApi({
    description: "",
    content: {
      "application/json": {schema: {type: "string"}},
      "application/xml": {schema: {type: "number"}},
    },
  })
  is(es.length, 0)

  const e = new Response()
  e.request.id = a.request.id
  e.request.headerParameters = [accept(aJ(), aX())]
  e.body = new Model()
  e.body.type = new StringType()

  eq(a, e)
})

test("Response: initializes from an OpenApi.ResponseObject with additional properties", () => {
  const [a, ...es] = Response.fromOpenApi({
    description: "d",
    content: {
      "application/json": {schema: {type: "string"}},
    },
  })
  is(es.length, 0)

  const e = new Response()
  e.request.id = a.request.id
  e.request.headerParameters = [accept(aJ())]
  e.description = "d"
  e.body = new Model()
  e.body.type = new StringType()

  eq(a, e)
})

test("ResponseRecord: initializes an empty instance", () => {
  const r = new ResponseRecord()
  const k = Object.keys(r)
  const d = new Response()
  d.request.id = (r.self as Response).request.id
  eq(k, ["status", "self"])
  is(r.status, -1)
  eq(r.self, d)
})

test("ResponseRecord: initializes from an OpenApi.ResponseObject", () => {
  const [a, ...es] = ResponseRecord.fromOpenApi({
    description: "d",
    content: {
      "application/json": {schema: {type: "string"}},
    },
  })
  is(es.length, 0)

  const e = new ResponseRecord()
  e.status = -1
  e.self = new Response()
  e.self.description = "d"
  e.self.request.id = (a.self as Response).request.id
  e.self.request.headerParameters = [accept(aJ())]
  e.self.body = new Model()
  e.self.body.type = new StringType()

  eq(a, e)
})

test("ResponseRecord: initializes from an OpenApi.ReferenceObject", () => {
  const [a, ...es] = ResponseRecord.fromOpenApi({$ref: "$"})
  is(es.length, 0)

  const e = new ResponseRecord()
  e.status = -1
  e.self = new Reference()
  e.self.id = "$"

  eq(a, e)
})

test("ResponseRecord: converts to the Service.ResponseRecord with error if the `self` is a reference", () => {
  const r = new ResponseRecord()
  r.self = new Reference()

  try {
    const s = r.toService()
    un(`Expected an error, but got '${s.body.type}'`)
  } catch (e) {
    is(e instanceof TypeError && e.message, "The `self` is a `Reference`, which cannot be converted to Service.Type")
  }
})

test("ResponseRecord: converts to the Service.ResponseRecord with error if the `self.body` is a reference", () => {
  const r = new ResponseRecord()
  r.self = new Response()
  r.self.body = new Reference()

  try {
    const s = r.toService()
    un(`Expected an error, but got '${s.body.type}'`)
  } catch (e) {
    is(e instanceof TypeError && e.message, "The `self.body` is a `Reference`, which cannot be converted to Service.Type")
  }
})

test("ResponseRecord: converts to the Service.ResponseRecord with error if the `self.body.type` is a reference", () => {
  const r = new ResponseRecord()
  r.self = new Response()
  r.self.body = new Model()
  r.self.body.type = new Reference()

  try {
    const s = r.toService()
    un(`Expected an error, but got '${s.body.type}'`)
  } catch (e) {
    is(e instanceof TypeError && e.message, "The `self.body.type` is a `Reference`, which cannot be converted to Service.Type")
  }
})

test("ResponseRecord: converts to the Service.ResponseRecord", () => {
  const r = new ResponseRecord()
  r.status = 200
  r.self = new Response()
  r.self.description = "d"
  r.self.request.headerParameters = [accept(aJ())]
  r.self.body = new Model()
  r.self.body.type = new StringType()

  const a = r.toService()

  const e = new Service.Response()
  e.status = 200
  e.description = "d"
  e.body = new Service.StringType()

  eq(a, e)
})

test("ResponseRecord: converts to the Service.ResponseRecord with the Model description", () => {
  const r = new ResponseRecord()
  r.status = 200
  r.self = new Response()
  r.self.description = ""
  r.self.request.headerParameters = [accept(aJ())]
  r.self.body = new Model()
  r.self.body.description = "d"
  r.self.body.type = new StringType()

  const a = r.toService()

  const e = new Service.Response()
  e.status = 200
  e.description = "d"
  e.body = new Service.StringType()

  eq(a, e)
})

test("ResponseRecord: converts to the Service.ResponseRecord with both descriptions", () => {
  const r = new ResponseRecord()
  r.status = 200
  r.self = new Response()
  r.self.description = "a"
  r.self.request.headerParameters = [accept(aJ())]
  r.self.body = new Model()
  r.self.body.description = "b"
  r.self.body.type = new StringType()

  const a = r.toService()

  const e = new Service.Response()
  e.status = 200
  e.description = "a\n\nb"
  e.body = new Service.StringType()

  eq(a, e)
})

test("RequestDeclaration: initializes an empty instance", () => {
  const r = new RequestDeclaration()
  const k = Object.keys(r)
  eq(k, [
    "id",
    "method",
    "path",
    "parent",
    "summary",
    "description",
    "deprecated",
    "headerParameters",
    "cookieParameters",
    "pathParameters",
    "queryParameters",
    "unknownParameters",
    "responses",
  ])
  is(isValidUUIDV4(r.id), true)
  is(r.method, "")
  is(r.path, "")
  is(r.parent, "")
  is(r.summary, "")
  is(r.description, "")
  is(r.deprecated, false)
  eq(r.headerParameters, [])
  eq(r.cookieParameters, [])
  eq(r.pathParameters, [])
  eq(r.queryParameters, [])
  eq(r.unknownParameters, [])
  eq(r.responses, [])
})

test("RequestDeclaration: initializes from an OpenApi.OperationObject with an error if the `summary` property is not defined", () => {
  const [a, ...es] = RequestDeclaration.fromOpenApi({})
  is(es.length, 1)

  const [er] = es
  is(er.message, "The `summary` of the `OperationObject` is missing")

  const e = new RequestDeclaration()
  e.id = a.id

  eq(a, e)
})

test("RequestDeclaration: initializes from an OpenApi.OperationObject with the `parameters` property of types", () => {
  const [a, ...es] = RequestDeclaration.fromOpenApi({
    summary: "s",
    parameters: [
      {in: "header", name: "a", schema: {type: "string"}},
      {in: "cookie", name: "b", schema: {type: "number"}},
      {in: "path", name: "c", schema: {type: "boolean"}},
      {in: "query", name: "d", schema: {type: "integer"}},
    ],
  })
  is(es.length, 0)

  const e = new RequestDeclaration()
  e.id = a.id
  e.summary = "s"
  e.headerParameters = [sP("a")]
  e.cookieParameters = [nP("b")]
  e.pathParameters = [bP("c")]
  e.queryParameters = [iP("d")]

  eq(a, e)
})

test("RequestDeclaration: initializes from an OpenApi.OperationObject with the `parameters` property of references", () => {
  const [a, ...es] = RequestDeclaration.fromOpenApi({
    summary: "s",
    parameters: [
      {$ref: "a"},
      {$ref: "b"},
      {$ref: "c"},
      {$ref: "d"},
    ],
  })
  is(es.length, 0)

  const e = new RequestDeclaration()
  e.id = a.id
  e.summary = "s"
  e.unknownParameters = [r("a"), r("b"), r("c"), r("d")]

  eq(a, e)

  function r(id: string): Reference {
    const r = new Reference()
    r.id = id
    return r
  }
})

test("RequestDeclaration: initializes from an OpenApi.OperationObject with an error if the `parameters.in` property is not supported", () => {
  const [a, ...es] = RequestDeclaration.fromOpenApi({
    summary: "s",
    parameters: [
      {in: "unsupported", name: "n", schema: {type: "string"}},
    ],
  })
  is(es.length, 1)

  const [er] = es
  is(er.message, "The parameter 'in' value 'unsupported' is not supported")

  const e = new RequestDeclaration()
  e.id = a.id
  e.summary = "s"

  eq(a, e)
})

test("RequestDeclaration: initializes from an OpenApi.OperationObject with the `responses` property", () => {
  const [a, ...es] = RequestDeclaration.fromOpenApi({
    summary: "s",
    responses: {
      200: {
        description: "d",
        content: {"application/json": {schema: {type: "string"}}},
      },
      400: {
        description: "d",
        content: {"application/xml": {schema: {type: "string"}}},
      },
    },
  })
  is(es.length, 0)

  const e = new RequestDeclaration()
  e.id = a.id
  e.summary = "s"
  e.headerParameters = [accept(aJ(), aX())]
  e.responses = [r(200), r(400)]

  for (const [i, x] of a.responses.entries()) {
    const y = e.responses[i]
    ;(y.self as Response).request.id = (x.self as Response).request.id
  }

  eq(a, e)

  function r(status: number): ResponseRecord {
    const r = new ResponseRecord()
    r.status = status
    r.self = new Response()
    r.self.description = "d"
    r.self.body = new Model()
    r.self.body.type = new StringType()
    return r
  }
})

test("RequestDeclaration: initializes from an OpenApi.OperationObject with additional properties", () => {
  const [a, ...es] = RequestDeclaration.fromOpenApi({
    summary: "s",
    description: "d",
    deprecated: true,
  })
  is(es.length, 0)

  const e = new RequestDeclaration()
  e.id = a.id
  e.summary = "s"
  e.description = "d"
  e.deprecated = true

  eq(a, e)
})

test("RequestDeclaration: initializes from a full featured OpenApi.OperationObject", () => {
  const [a, ...es] = RequestDeclaration.fromOpenApi({
    summary: "s",
    description: "d",
    deprecated: true,
    parameters: [
      {
        $ref: "$",
      },
      {
        in: "header",
        name: "a",
        description: "d",
        required: true,
        deprecated: true,
        schema: {
          type: "array",
          items: {
            type: "string",
          },
        },
      },
      {
        in: "cookie",
        name: "b",
        description: "d",
        schema: {
          type: "object",
          properties: {
            s: {
              type: "string",
            },
            n: {
              type: "number",
            },
          },
          required: ["s"],
        },
      },
      {
        in: "path",
        name: "c",
        description: "d",
        schema: {
          type: "string",
        },
      },
    ],
    responses: {
      200: {
        description: "d",
        content: {
          "application/json": {
            schema: {
              type: "string",
            },
          },
          "application/xml": {
            schema: {
              $ref: "$",
            },
          },
        },
      },
      400: {
        $ref: "$",
      },
    },
  })
  is(es.length, 0)

  const e = new RequestDeclaration()
  e.id = a.id
  e.summary = "s"
  e.description = "d"
  e.deprecated = true
  e.headerParameters = [hp(), accept(aJ(), aX())]
  e.cookieParameters = [cp()]
  e.pathParameters = [pp()]
  e.unknownParameters = [re()]
  e.responses = [r2(), r4()]

  for (const [i, x] of a.responses.entries()) {
    const y = e.responses[i]
    if (y.self instanceof Response && x.self instanceof Response) {
      y.self.request.id = x.self.request.id
    }
  }

  eq(a, e)

  function hp(): Parameter {
    const p = new Parameter()
    p.identifier = "a"
    p.description = "d"
    p.required = true
    p.deprecated = true
    p.self = new Model()
    p.self.type = new ArrayType()
    p.self.type.items = new StringType()
    return p
  }

  function cp(): Parameter {
    const p = new Parameter()
    p.identifier = "b"
    p.description = "d"
    p.self = new Model()
    p.self.type = new ObjectType()
    p.self.type.properties = [sp(), np()]
    return p
  }

  function sp(): PropertyRecord {
    const p = new PropertyRecord()
    p.identifier = "s"
    p.required = true
    p.self = new Model()
    p.self.type = new StringType()
    return p
  }

  function np(): PropertyRecord {
    const p = new PropertyRecord()
    p.identifier = "n"
    p.self = new Model()
    p.self.type = new NumberType()
    return p
  }

  function pp(): Parameter {
    const p = new Parameter()
    p.identifier = "c"
    p.description = "d"
    p.self = new Model()
    p.self.type = new StringType()
    return p
  }

  function r2(): ResponseRecord {
    const r = new ResponseRecord()
    r.status = 200
    r.self = new Response()
    r.self.description = "d"
    r.self.body = new Model()
    r.self.body.type = new StringType()
    return r
  }

  function r4(): ResponseRecord {
    const r = new ResponseRecord()
    r.status = 400
    r.self = re()
    return r
  }

  function re(): Reference {
    const r = new Reference()
    r.id = "$"
    return r
  }
})

test("RequestDeclaration: converts to the Service.RequestDeclaration with error if the `unknownParameters` contains a reference", () => {
  const r = new RequestDeclaration()
  r.unknownParameters = [new Reference()]

  try {
    const s = r.toService()
    un(`Expected an error, but got '${s.type}'`)
  } catch (e) {
    is(e instanceof TypeError && e.message, "The `unknownParameters` contains a `Reference`, which cannot be converted to Service.Parameter")
  }
})

test("RequestDeclaration: converts to the Service.RequestDeclaration", () => {
  const r = new RequestDeclaration()
  r.method = "GET"
  r.path = "/p"
  r.summary = "s"
  r.description = "d"
  r.deprecated = true
  r.headerParameters = [sP("a")]
  r.cookieParameters = [nP("b")]
  r.pathParameters = [bP("c")]
  r.queryParameters = [iP("d")]
  r.responses = [iR(200), iR(400)]

  const a = r.toService()

  const e = new Service.RequestDeclaration()
  e.id = a.id
  e.method = "GET"
  e.path = "/p"
  e.summary = "s"
  e.description = "d"
  e.deprecated = true
  e.headerParameters = [sP("a").toService()]
  e.cookieParameters = [nP("b").toService()]
  e.pathParameters = [bP("c").toService()]
  e.queryParameters = [iP("d").toService()]
  e.responses = [iR(200).toService(), iR(400).toService()]

  eq(a, e)

  function iR(status: number): ResponseRecord {
    const r = new ResponseRecord()
    r.status = status
    r.self = new Response()
    r.self.description = "d"
    r.self.body = new Model()
    r.self.body.type = new StringType()
    return r
  }
})

test("GroupDeclaration: initializes an empty instance", () => {
  const d = new GroupDeclaration()
  const k = Object.keys(d)
  eq(k, ["id", "name", "parent", "children"])
  is(isValidUUIDV4(d.id), true)
  is(d.name, "")
  is(d.parent, "")
  eq(d.children, [])
})

test("declaration: returns an error if the `tags` property is not defined", () => {
  const [ds, ...es] = declaration({})
  is(es.length, 1)
  is(ds.length, 0)

  const [e] = es
  is(e.message, "The `tags` of the `OperationObject` is missing")
})

test("declaration: ", () => {})

test.run()

function accept(...c: LiteralType[]): Parameter {
  const p = new Parameter()
  p.identifier = "Accept"
  p.self = new Model()
  p.self.type = new EnumType()
  p.self.type.cases = c
  return p
}

function aJ(): LiteralType {
  const t = new LiteralType()
  t.base = new StringType()
  t.const = "application/json"
  return t
}

function aX(): LiteralType {
  const t = new LiteralType()
  t.base = new StringType()
  t.const = "application/xml"
  return t
}

function sP(id = ""): Parameter {
  const p = new Parameter()
  p.identifier = id
  p.self = new Model()
  p.self.type = new StringType()
  return p
}

function nP(id = ""): Parameter {
  const p = new Parameter()
  p.identifier = id
  p.self = new Model()
  p.self.type = new NumberType()
  return p
}

function bP(id = ""): Parameter {
  const p = new Parameter()
  p.identifier = id
  p.self = new Model()
  p.self.type = new BooleanType()
  return p
}

function iP(id = ""): Parameter {
  const p = new Parameter()
  p.identifier = id
  p.self = new Model()
  p.self.type = new IntegerType()
  return p
}
