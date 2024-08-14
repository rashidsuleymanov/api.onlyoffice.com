import sortPackageJson from "./configs/sort-package-json.js"
import sortTsconfigJson from "./configs/sort-tsconfig-json.js"
import noOptionalChaining from "./rules/no-optional-chaining.js"

export default {
  configs: {
    "sort-package-json": sortPackageJson,
    "sort-tsconfig-json": sortTsconfigJson,
  },
  rules: {
    "no-optional-chaining": noOptionalChaining,
  },
}
