/// <reference types="@onlyoffice/document-builder-html-element" />
/// <reference types="@onlyoffice/document-editor-html-element" />
/// <reference types="@onlyoffice/preact-types/reference" />

interface ImportMeta {
  readonly env?: ImportMetaEnv
}

interface ImportMetaEnv {
  readonly DEV?: boolean
  readonly CONFIG_SERVER_BASE_URL?: string
}
