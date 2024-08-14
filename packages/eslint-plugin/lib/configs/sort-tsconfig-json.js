// Upstream:
// https://github.com/antfu/eslint-config/blob/f01bf012ed9f51662849052cdf76a09975ea42ba/src/configs/sort.ts

/* eslint-disable */
// @ts-nocheck

/**
 * MIT License
 *
 * Copyright (c) 2019-PRESENT Anthony Fu<https://github.com/antfu>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

export default {
  files: ['**/tsconfig.json', '**/tsconfig.*.json'],
  name: 'antfu/sort/tsconfig-json',
  rules: {
    'jsonc/sort-keys': [
      'error',
      {
        order: [
          'extends',
          'compilerOptions',
          'references',
          'files',
          'include',
          'exclude',
        ],
        pathPattern: '^$',
      },
      {
        order: [
          /* Projects */
          'incremental',
          'composite',
          'tsBuildInfoFile',
          'disableSourceOfProjectReferenceRedirect',
          'disableSolutionSearching',
          'disableReferencedProjectLoad',
          /* Language and Environment */
          'target',
          'jsx',
          'jsxFactory',
          'jsxFragmentFactory',
          'jsxImportSource',
          'lib',
          'moduleDetection',
          'noLib',
          'reactNamespace',
          'useDefineForClassFields',
          'emitDecoratorMetadata',
          'experimentalDecorators',
          /* Modules */
          'baseUrl',
          'rootDir',
          'rootDirs',
          'customConditions',
          'module',
          'moduleResolution',
          'moduleSuffixes',
          'noResolve',
          'paths',
          'resolveJsonModule',
          'resolvePackageJsonExports',
          'resolvePackageJsonImports',
          'typeRoots',
          'types',
          'allowArbitraryExtensions',
          'allowImportingTsExtensions',
          'allowUmdGlobalAccess',
          /* JavaScript Support */
          'allowJs',
          'checkJs',
          'maxNodeModuleJsDepth',
          /* Type Checking */
          'strict',
          'strictBindCallApply',
          'strictFunctionTypes',
          'strictNullChecks',
          'strictPropertyInitialization',
          'allowUnreachableCode',
          'allowUnusedLabels',
          'alwaysStrict',
          'exactOptionalPropertyTypes',
          'noFallthroughCasesInSwitch',
          'noImplicitAny',
          'noImplicitOverride',
          'noImplicitReturns',
          'noImplicitThis',
          'noPropertyAccessFromIndexSignature',
          'noUncheckedIndexedAccess',
          'noUnusedLocals',
          'noUnusedParameters',
          'useUnknownInCatchVariables',
          /* Emit */
          'declaration',
          'declarationDir',
          'declarationMap',
          'downlevelIteration',
          'emitBOM',
          'emitDeclarationOnly',
          'importHelpers',
          'importsNotUsedAsValues',
          'inlineSourceMap',
          'inlineSources',
          'mapRoot',
          'newLine',
          'noEmit',
          'noEmitHelpers',
          'noEmitOnError',
          'outDir',
          'outFile',
          'preserveConstEnums',
          'preserveValueImports',
          'removeComments',
          'sourceMap',
          'sourceRoot',
          'stripInternal',
          /* Interop Constraints */
          'allowSyntheticDefaultImports',
          'esModuleInterop',
          'forceConsistentCasingInFileNames',
          'isolatedDeclarations',
          'isolatedModules',
          'preserveSymlinks',
          'verbatimModuleSyntax',
          /* Completeness */
          'skipDefaultLibCheck',
          'skipLibCheck',
        ],
        pathPattern: '^compilerOptions$',
      },
    ],
  },
}
