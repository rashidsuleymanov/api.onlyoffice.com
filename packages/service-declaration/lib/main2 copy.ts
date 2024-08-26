// todo: resolve all components during parsing instead of resolving them during rendering

export type Declarations = Declaration[]

export type Declaration = DeclarationMap[keyof DeclarationMap]

export interface DeclarationMap {
  group: GroupDeclaration
  request: RequestDeclaration
}

export class GroupDeclaration implements DeclarationNode {
  id = ""
  type = "group" as const
  name = ""
}

export class RequestDeclaration implements DeclarationNode {
  id = ""
  type = "request" as const
  title = ""
  description = ""
  method = ""
  path = ""
  deprecated = false
  headerParameters: Parameter[] = []
  cookieParameters: Parameter[] = []
  pathParameters: Parameter[] = []
  queryParameters: Parameter[] = []
  bodyParameters: Parameter[] = []
  examples: unknown[] = []
  responses: ResponseRecord[] = []
}

export interface DeclarationNode {
  id: string
  type: string
}

export interface ComponentNode {
  type: string
}

export class ResponseRecord {
  status = -1
  self = new Response()
}

export class Response {
  description = ""
  body = new Model()
}

export class Parameter {
  identifier = ""
  description = ""
  required = false
  deprecated = false
  self = new Model()
}

export class PropertyRecord {
  identifier = ""
  // required = false
  self = new Model()
}

export class Model {
  description = ""
  deprecated = false
  type: Type = new NoopType()
}

export type Security = SecurityMap[keyof SecurityMap]

export interface SecurityMap {
  apiKey: ApiKeySecurity
  noop: NoopSecurity
}

export class ApiKeySecurity implements SecurityNode {
  type = "apiKey" as const
  "in" = ""
  identifier = ""
  description = ""
  scopes: string[] = []
}

export class NoopSecurity implements SecurityNode {
  type = "noop" as const
  description = ""
  scopes: string[] = []
}

export interface SecurityNode {
  type: string
  description: string
  scopes: string[]
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

export class ArrayType implements TypeNode {
  type = "array" as const
  items: Type = new NoopType()
}

export class BooleanType implements TypeNode {
  type = "boolean" as const
}

export class EnumType implements TypeNode {
  type = "enum" as const
  cases: LiteralType[] = []
}

export class IntegerType implements TypeNode {
  type = "integer" as const
  format = ""
}

export class LiteralType implements TypeNode {
  type = "literal" as const
  base: Type = new NoopType()
  "const": unknown = ""
}

export class NoopType implements TypeNode {
  type = "noop" as const
}

export class NullType implements TypeNode {
  type = "null" as const
}

export class NumberType implements TypeNode {
  type = "number" as const
  format = ""
}

export class ObjectType implements TypeNode {
  type = "object" as const
  properties: PropertyRecord[] = []
}

export class StringType implements TypeNode {
  type = "string" as const
  format = ""
}

export class UnionType implements TypeNode {
  type = "union" as const
  types: Type[] = []
}

export class UnknownType implements TypeNode {
  type = "unknown" as const
}

export interface TypeNode {
  type: string
}
