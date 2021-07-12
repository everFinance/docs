const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const trailingSlash = false

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  // 站点元数据
  title: 'everPay Docs',
  // url: 'https://docs.everpay.io',
  baseUrl: '/',
  favicon: 'img/favicon.png',

  // 部署 github 配置
  // https://docusaurus.io/zh-CN/docs/deployment#deploying-to-github-pages
  organizationName: 'everFinance', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  url: 'https://everFinance.everpay.io',
  baseUrl: '/',
  trailingSlash,

  // 一般部署至托管商需要：结尾斜杠，不同的服务托管商需要
  // https://docusaurus.io/zh-CN/docs/deployment#trailing-slashes
  // https://docusaurus.io/zh-CN/docs/docusaurus.config.js#trailing-slash
  // trailingSlash

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
      title: 'everPay Docs',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/favicon.png',
      // },
      items: [
        {
          type: 'doc',
          docId: 'guide/intro',
          position: 'left',
          label: 'Guide',
        },
        {
          type: 'doc',
          docId: 'server-api/intro',
          position: 'left',
          label: 'Server API',
        },
        {
          type: 'doc',
          docId: 'everpay-js/intro',
          position: 'left',
          label: 'Everpay JS',
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
              label: 'Guide',
              to: '/docs/guide/intro',
            },
            {
              label: 'Server API',
              to: '/docs/server-api/intro',
            },
            {
              label: 'Everpay JS',
              to: '/docs/everpay-js/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/FinanceEver',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/WM5MQZGVPF',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/everfinance',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/everFinance/docs',
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
