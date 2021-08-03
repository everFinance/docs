const util = require('util');
const child_process = require('child_process');
const exec = util.promisify(child_process.exec);

const run = async () => {
  // theme
  await exec(`docusaurus write-translations --locale en --messagePrefix '(待翻译) '`)

  // docs
  // await exec('mkdir -p i18n/en/docusaurus-plugin-content-docs/current')
  // await exec('cp -r docs/** i18n/en/docusaurus-plugin-content-docs/current')

  // pages
  // await exec('mkdir -p i18n/en/docusaurus-plugin-content-pages')
  // await exec('cp -r src/pages/**.md i18n/en/docusaurus-plugin-content-pages')
  // await exec('cp -r src/pages/**.mdx i18n/en/docusaurus-plugin-content-pages')
}

run()