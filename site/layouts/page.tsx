import {type Context, type Data} from "@onlyoffice/eleventy-types"
import {
  Page,
  PageFooter,
  PageFooterCopyright,
  PageFooterLinkContainer,
  PageFooterThemeSwitcher,
  PageHeader,
  PageHeaderLogo,
  PageHeaderMenu,
  ThemeSwitcher,
  ThemeSwitcherOption
} from "@onlyoffice/site-kit"
import {SrOnly} from "@onlyoffice/ui-kit"
import {OnlyofficeLogo} from "@onlyoffice/ui-logos"
import {type JSX, h} from "preact"
import {GlobalNavigation} from "@/internal/global-navigation.tsx"

export function data(): Data {
  return {
    layout: "html"
  }
}

export function render({content, ...ctx}: Context): JSX.Element {
  return <Page>
    <PageHeader>
      <SrOnly>
        <h2>Navigation Menu</h2>
      </SrOnly>
      <PageHeaderLogo>
        <a href="/"><OnlyofficeLogo height={38} /></a>
      </PageHeaderLogo>
      <PageHeaderMenu>
        <GlobalNavigation current={ctx.page.url} />
      </PageHeaderMenu>
    </PageHeader>
    <main>{content}</main>
    <PageFooter>
      <SrOnly>
        <h2>Site-wide Links</h2>
      </SrOnly>
      <PageFooterLinkContainer label="Links related to">
        <h3>Get Information</h3>
        <a href="https://www.onlyoffice.com/blog/category/for-developers?from=api" target="_blank">Blog for developers</a>
        <a href="https://www.onlyoffice.com/contribute.aspx?from=api" target="_blank">For contributors</a>
        <a href="https://www.onlyoffice.com/legalterms.aspx?from=api" target="_blank">Legal notice</a>
      </PageFooterLinkContainer>
      <PageFooterLinkContainer label="Links related to">
        <h3>Get Help</h3>
        <a href="https://forum.onlyoffice.com" target="_blank">Forum</a>
        <a href="https://github.com/ONLYOFFICE/" target="_blank">Code on GitHub</a>
        <a href="https://helpcenter.onlyoffice.com/installation/docs-developer-index.aspx?from=api" target="_blank">Installation guides</a>
        <a href="https://www.onlyoffice.com/support-contact-form.aspx?from=api" target="_blank">Support contact form</a>
      </PageFooterLinkContainer>
      <PageFooterThemeSwitcher>
        <ThemeSwitcher>
          <ThemeSwitcherOption value="light">Light</ThemeSwitcherOption>
          <ThemeSwitcherOption value="dark">Dark</ThemeSwitcherOption>
          <ThemeSwitcherOption value="auto">Auto</ThemeSwitcherOption>
        </ThemeSwitcher>
      </PageFooterThemeSwitcher>
      <PageFooterCopyright>
        <a href="/">onlyoffice.com</a>
        <p>© Ascensio System SIA 2024. All right reserved</p>
      </PageFooterCopyright>
    </PageFooter>
  </Page>
}
