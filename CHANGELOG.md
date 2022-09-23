All notable changes are described on the [Releases](https://github.com/simpleweb/romulus-cli/releases) page.

## 2.8.1

### Patch Changes

- 200f7ec: Switch to the correct async-storage package

## 2.8.0

### Minor Changes

- 501a92e: Correctly types the RequestExample saga
- d3077e1: Fixes TypeScript issues

  - Updates the `.eslintrc.js` as per latest version of react-native.
  - Fixes the issues that arose from the above change.
  - Converts components from `const` to `function`.
  - Installs types for `react-native-i18n`.

- f92a799: Removes the Layout components and replaces it with `@mobily/stacks`
- 15fdae0: Update the screen command
- c26e7ae: Move `Router.tsx` into components folder
- cc3b610: Remove react-native-make
- 8526774: Removes the `classComponent` option from component command
  Updates the stateless component to use `function` instead of `const`
