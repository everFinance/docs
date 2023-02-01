---
sidebar_position: 3
---

# 打包

因 everpay-js 引用的库中，使用很多 nodeJS 内置模块，例如 `buffer`, `stream`, `crypto`, `path` 等，所以需要引用部分包，配置 `vite.config.js` 或 `webapck.config.js` 来支持 nodeJS 语法。

## vite

打开 `vite.config.js` 进行配置

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

打开 `vue.config.js` 进行配置

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

后续若出现 `crypto` 等 `not defined`，可使用相同方法引入。参考 [https://github.com/Bundlr-Network/arbundles/blob/master/webpack.config.js](https://github.com/Bundlr-Network/arbundles/blob/master/webpack.config.js)

### create-react-app

通过 `yarn eject`，多出 `config` 文件夹 打开 `webpack.config.js`，找到 `reslove` 添加: `fallback` 和 `buffer`

```ts
// yarn add buffer
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

后续若出现 `crypto` 等 `not defined`，可使用相同方法引入。参考 [https://github.com/Bundlr-Network/arbundles/blob/master/webpack.config.js](https://github.com/Bundlr-Network/arbundles/blob/master/webpack.config.js)

## webpack@4.x

没问题，打包正常。
