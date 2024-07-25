import {type Context} from "@onlyoffice/eleventy-types"
// import {wait} from "@onlyoffice/documentation-utils/wait.ts"
import {Config} from "@onlyoffice/site-config"
import {h} from "preact"
import {GoogleTagManagerNoscript, GoogleTagManagerScript} from "../internal/google-tag-manager.tsx"
import {renderToString} from "../internal/preact.ts"
import {Script} from "../internal/script.tsx"
import {Style} from "../internal/style.tsx"

export async function render(
  {
    eleventy,
    title,
    description,
    content
  }: Context
): Promise<string> {
  // // todo: explain. DO NOT DELETE THE HACK BELLOW!
  // await wait()

  // todo: validate the context.
  // For example, if description is missing, print an error.

  const c = Config.shared

  const s = await renderToString(
    // todo: do not forget to change the lang after localization.
    <html
      lang="en"
      data-dark-theme="regular"
      data-light-theme="regular"
      data-theme-preference="auto"
    >
      <head>
        <meta charset="utf-8" />
        <title>{title}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="view-transition" content="same-origin" />
        <meta name="description" content={description} />
        <meta name="generator" content={eleventy.generator} />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {[
          "OpenSans-Regular.woff2",
          "OpenSans-Medium.woff2",
          "OpenSans-SemiBold.woff2",
          "OpenSans-Bold.woff2",
        ].map((f) => <link rel="preload" href={`/${f}`} crossorigin="" as="font" type="font/woff2" />)}

        <Style href="/assets/main.css" />
        {/* <meta name="theme-color" media="(prefers-color-scheme: light)" content="#000000" /> */}
        {/* <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000" /> */}
        {/* <style media="(prefers-color-scheme: dark)">{dark}</style> */}
        {/* <style media="(prefers-color-scheme: light)">{light}</style> */}
        {/* <style>{regular}</style> */}

        {c.analytics && <GoogleTagManagerScript />}
        <Script src="/assets/main.ts" />
      </head>
      <body>
        {c.analytics && <GoogleTagManagerNoscript />}
        {content}
      </body>
    </html>
  )
  return `<!DOCTYPE html>${s}`
}
