const util = require('util');
const child_process = require('child_process');
const exec = util.promisify(child_process.exec);

const run = async () => {
  // theme
  await exec(`docusaurus write-translations --locale zh-cn --messagePrefix '(待翻译) '`)

  // docs
  // await exec('mkdir -p i18n/zh-cn/docusaurus-plugin-content-docs/current')
  // await exec('cp -r docs/** i18n/zh-cn/docusaurus-plugin-content-docs/current')

  // pages
  // await exec('mkdir -p i18n/zh-cn/docusaurus-plugin-content-pages')
  // await exec('cp -r src/pages/**.md i18n/zh-cn/docusaurus-plugin-content-pages')
  // await exec('cp -r src/pages/**.mdx i18n/zh-cn/docusaurus-plugin-content-pages')
}

run()