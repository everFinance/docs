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

### 注意事项
1. 因为我们编写的是中文文档，要翻译成默认的英文文档。我们需要先在 docs 底下编写中文，中文内容确定后
2. 拷贝至 `i18n/zh-cn/docusaurus-plugin-content-docs/current` 文件相应目录
3. 在原有 docs 底下原始目录翻译英文
4. 预览中文使用 `yarn start --locale zh-cn`
5. `yarn start` 预览时，只能预览一种语言。例如 `yarn run start` 启动的是，默认的 docs 文件夹内容