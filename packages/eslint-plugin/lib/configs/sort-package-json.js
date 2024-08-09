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
  files: ['**/package.json'],
  name: 'antfu/sort/package-json',
  rules: {
    'jsonc/sort-array-values': [
      'error',
      {
        order: { type: 'asc' },
        pathPattern: '^files$',
      },
    ],
    'jsonc/sort-keys': [
      'error',
      {
        order: [
          'publisher',
          'name',
          'displayName',
          'type',
          'version',
          'private',
          'packageManager',
          'description',
          'author',
          'contributors',
          'license',
          'funding',
          'homepage',
          'repository',
          'bugs',
          'keywords',
          'categories',
          'sideEffects',
          'exports',
          'main',
          'module',
          'unpkg',
          'jsdelivr',
          'types',
          'typesVersions',
          'bin',
          'icon',
          'files',
          'engines',
          'activationEvents',
          'contributes',
          'scripts',
          'peerDependencies',
          'peerDependenciesMeta',
          'dependencies',
          'optionalDependencies',
          'devDependencies',
          'pnpm',
          'overrides',
          'resolutions',
          'husky',
          'simple-git-hooks',
          'lint-staged',
          'eslintConfig',
        ],
        pathPattern: '^$',
      },
      {
        order: { type: 'asc' },
        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$',
      },
      {
        order: { type: 'asc' },
        pathPattern: '^(?:resolutions|overrides|pnpm.overrides)$',
      },
      {
        order: [
          'types',
          'import',
          'require',
          'default',
        ],
        pathPattern: '^exports.*$',
      },
      {
        order: [
          // client hooks only
          'pre-commit',
          'prepare-commit-msg',
          'commit-msg',
          'post-commit',
          'pre-rebase',
          'post-rewrite',
          'post-checkout',
          'post-merge',
          'pre-push',
          'pre-auto-gc',
        ],
        pathPattern: '^(?:gitHooks|husky|simple-git-hooks)$',
      },
    ],
  },
}
