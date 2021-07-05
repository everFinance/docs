const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const trailingSlash = false

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  // 站点元数据
  title: 'Everpay Docs',
  url: 'https://docs.everpay.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  // 部署 github 配置
  // https://docusaurus.io/zh-CN/docs/deployment#deploying-to-github-pages
  // organizationName: 'everFinance', // Usually your GitHub org/user name.
  // projectName: 'docs', // Usually your repo name.
  // url: 'https://everFinance.everpay.io',
  // baseUrl: '/docs/',
  // trailingSlash,

  // 一般部署至托管商需要：结尾斜杠，不同的服务托管商需要
  // https://docusaurus.io/zh-CN/docs/deployment#trailing-slashes
  // https://docusaurus.io/zh-CN/docs/docusaurus.config.js#trailing-slash
  // trailingSlash


  tagline: 'Welcome to everPay developer documentation site',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
  },


  // 预设配置
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

        // 传递至 @docusaurus/plugin-content-docs
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            if (locale !== 'en') {
              return `https://github.com/everFinance/docs/edit/master/i18n/${locale}/docusaurus-plugin-content-docs/current/${docPath}`;
            }
            return `https://github.com/everFinance/docs/edit/master/docs/${docPath}`;
          },
        },
        // 传递至 @docusaurus/plugin-content-blog（设置为 false 以禁用） 
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash,
        }
      },
    ],
  ],

  // 主题
  // themes:
  themeConfig: {
    navbar: {
      title: 'Everpay Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'tutorial/intro',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'doc',
          docId: 'everpay/intro',
          position: 'left',
          label: 'everpay',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/everFinance/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/everpay/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} everFinance, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    gtag: {
      trackingID: 'GTM-PZ2J4TP',
      anonymizeIP: false,
    },
  },
};
