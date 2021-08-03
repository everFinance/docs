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
yarn start --locale en
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### 注意事项
1. 拷贝文档至 `i18n/en/docusaurus-plugin-content-docs/current` 文件相应目录
2. 预览英文使用 `yarn start --locale en`
3. `yarn start` 预览时，只能预览一种语言。例如 `yarn run start` 启动的是，默认的 docs 文件夹内容