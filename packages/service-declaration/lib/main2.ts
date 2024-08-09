// export class Value {
//   description = ""
//   // default
//   required = false
//   type: Type = new NoopType()
// }

export class RequestDeclaration implements DeclarationNode {
  id = ""
  kind = "request" as const
  title = ""
  description = ""
  endpoint = ""
  headerParameters: ParameterRecord[] = []
  cookieParameters: ParameterRecord[] = []
  pathParameters: ParameterRecord[] = []
  queryParameters: ParameterRecord[] = []
  bodyParameters: ParameterRecord[] = []
  examples: unknown[] = []
  responses: ResponseRecord[] = []
}

export interface DeclarationNode {
  id: string
  kind: string
  title: string
}

export class ResponseRecord {
  status = -1
  component = new ResponseComponent()
}

export class ResponseComponent {
  description = ""
  // body: Body = new Body()
}

export class ParameterRecord {
  identifier = ""
  component = new ParameterComponent()
}

export class ParameterComponent {
  description = ""
  required = false
  deprecated = false
  default: unknown = Symbol("noop")
  examples: unknown[] = []
  type: Type = new NoopType()
}

// export class PropertyRecord {
//   identifier = ""
//   component = new PropertyComponent()
// }

// export class PropertyComponent {
//   description = ""
//   default: unknown = Symbol("noop")
//   examples: unknown[] = []
//   type: Type = new NoopType()
// }

// export class Model {
//   description = ""
//   type: Type = new NoopType()
// }

// export class Body {
//   description = ""
//   required = false
//   type: Type = new NoopType()
// }

export type Type = TypeMap[keyof TypeMap]

export interface TypeMap {
  array: ArrayType
  boolean: BooleanType
  integer: IntegerType
  noop: NoopType
  null: NullType
  number: NumberType
  object: ObjectType
  string: StringType
  unknown: UnknownType
}

export class ArrayType implements TypeNode {
  type = "array" as const
  format = ""
  items: Type = new NoopType()
}

export class BooleanType implements TypeNode {
  type = "boolean" as const
  format = ""
}

export class IntegerType implements TypeNode {
  type = "integer" as const
  format = ""
}

export class NoopType implements TypeNode {
  type = "noop" as const
  format = ""
}

export class NullType implements TypeNode {
  type = "null" as const
  format = ""
}

export class NumberType implements TypeNode {
  type = "number" as const
  format = ""
}

export class ObjectType implements TypeNode {
  type = "object" as const
  format = ""
  properties: PropertyRecord[] = []
  // required: string[] = []
}

export class StringType implements TypeNode {
  type = "string" as const
  format = ""
}

export class UnknownType implements TypeNode {
  type = "unknown" as const
  format = ""
}

export interface TypeNode {
  type: string
  format: string
}
