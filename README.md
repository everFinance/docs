# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

### i18n
```console
yarn i18n
```

## Local Development

```console
yarn start

##
yarn start --locale zh-cn
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

注意：预览时，只能预览一种语言。例如 yarn run start 启动的是，默认的 docs 文件夹内容。

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


### 注意事项
1. 因为我们编写的是中文文档，要翻译成默认的英文文档。我们需要在 `i18n/zh-cn/docusaurus-plugin-content-docs/current` 文件下，创建相应目录，来编写文档。
2. 预览使用 `yarn run start --locale zh-cn`
3. 要翻译的时候，将整体文档拷贝至 `docs 对应目录下`