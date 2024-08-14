declare global {
  namespace preact {
    namespace JSX {
      interface IntrinsicElements {}

      type JSXBase = IntrinsicElements extends {span: unknown}
        ? IntrinsicElements
        : Record<string, Record<string, unknown>>
    }
  }
}

export {}
