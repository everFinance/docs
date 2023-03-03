---
sidebar_position: 3
---

# Package

Since everpay-js references libraries that use many nodeJS built-in modules, such as `buffer`, `stream`, `crypto`, `path`, etc., you need to configure `vite.config.js` or `webpack.config.js` to support nodeJS built-in modules.

## vite

Open `vite.config.js` to configure

```ts
// yarn add buffer
// yarn add --dev @esbuild-plugins/node-globals-polyfill
// yarn add --dev @esbuild-plugins/node-modules-polyfill
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
// You don't need to add this to deps, it's included by @esbuild-plugins/node-modules-polyfill
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd())
  const processEnvValues = {
    'process.env': Object.entries(env).reduce(
        (prev, [key, val]) => {
            return {
                ...prev,
                [key]: val,
            }
        },
        {},
    )
  }
  return {
    plugins: [
      vue(),
    ],
    define: Object.assign(processEnvValues, {global:{}}),
    resolve:{
      alias:{
        util: 'rollup-plugin-node-polyfills/polyfills/util',
        buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
        process: 'rollup-plugin-node-polyfills/polyfills/process-es6'
      }
    },
    optimizeDeps: {
      esbuildOptions: {
        plugins: [
          NodeGlobalsPolyfillPlugin({
              process: true,
              buffer: true,
            }),
          NodeModulesPolyfillPlugin()
        ]
      }
    },
    build: {
      rollupOptions: {
        plugins: [
          // Enable rollup polyfills plugin
          // used during production bundling
          rollupNodePolyFill()
        ]
      }
    }
  }
})
```

## webpack 5.x

### vue-cli@5.x

Open `vue.config.js` to configure

```ts
// yarn add buffer
// yarn add stream-browserify
const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias:{
        stream: 'stream-browserify'
      },
      fallback: {
        buffer: require.resolve('buffer/'),
        stream: require.resolve('stream-browserify')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer']
      })
    ]
  }
})
```

If `not defined` such as `crypto` appears later, you can use the same method to introduce it. Reference [https://github.com/Bundlr-Network/arbundles/blob/master/webpack.config.js](https://github.com/Bundlr-Network/arbundles/blob/master/webpack.config.js)

### create-react-app

With `yarn eject`, open the `config` folder, open `webpack.config.js`, find `reslove` and add: `fallback` and `buffer`

```ts
// yarn add buffer
// yarn add stream-browserify
{
  reslove:{
    // ...
    alias:{
      stream: 'stream-browserify'
    },
    fallback: {
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify')
    },
  },
  //...
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer']
    })
  ]
}
```

If `not defined` such as `crypto` appears later, you can use the same method to introduce it. Reference [https://github.com/Bundlr-Network/arbundles/blob/master/webpack.config.js](https://github.com/Bundlr-Network/arbundles/blob/master/webpack.config.js)

## webpack@4.x

No problem, packaged properly.
