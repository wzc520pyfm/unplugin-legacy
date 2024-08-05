# unplugin-legacy

[![NPM version](https://img.shields.io/npm/v/unplugin-legacy?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-legacy)

🍣 A universal bundler plugin which adds export declarations to legacy non-module scripts.

## Install

```bash
npm i unplugin-legacy
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import UnpluginLegacy from 'unplugin-legacy/vite'

export default defineConfig({
  plugins: [
    UnpluginLegacy({
      /* options */
    }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import UnpluginLegacy from 'unplugin-legacy/rollup'

export default {
  plugins: [
    UnpluginLegacy({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-legacy/webpack')({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    [
      'unplugin-legacy/nuxt',
      {
        /* options */
      },
    ],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-legacy/webpack')({
        /* options */
      }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import UnpluginLegacy from 'unplugin-legacy/esbuild'

build({
  plugins: [UnpluginLegacy()],
})
```

<br></details>

## Usage

### Options

For all options please refer to [docs](https://github.com/rollup/plugins/tree/master/packages/legacy#options).

This plugin accepts all [@rollup/plugin-legacy](https://github.com/rollup/plugins/tree/master/packages/legacy#options) options.
