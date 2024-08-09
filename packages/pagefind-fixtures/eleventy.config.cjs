/**
 * @typedef {import("@onlyoffice/eleventy-types").UserConfig} UserConfig
 */

/**
 * @param {UserConfig} uc
 * @returns {unknown}
 */
module.exports = function config(uc) {
  uc.addTemplateFormats("txt")
  uc.addExtension("txt", {
    compile(c) {
      return () => {
        return c
      }
    },
  })

  uc.addGlobalData("layout", "html")

  return {
    templateFormats: ["njk"],
    dir: {
      layouts: "../layouts",
      input: "content",
      output: "dist",
    },
  }
}
