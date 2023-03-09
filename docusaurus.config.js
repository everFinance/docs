const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const trailingSlash = false

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  // 站点元数据
  title: 'everPay Docs',
  baseUrl: '/',
  favicon: 'img/favicon.png',

  // 部署 github 配置
  // https://docusaurus.io/zh-CN/docs/deployment#deploying-to-github-pages
  organizationName: 'everFinance', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  url: 'https://docs.everpay.io',
  baseUrl: '/',
  trailingSlash,


  // 一般部署至托管商需要：结尾斜杠，不同的服务托管商需要
  // https://docusaurus.io/zh-CN/docs/deployment#trailing-slashes
  // https://docusaurus.io/zh-CN/docs/docusaurus.config.js#trailing-slash
  // trailingSlash
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['en', 'zh-cn'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      'zh-cn': {
        label: '简体中文',
        direction: 'ltr',
      },
    },
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
            if (locale === 'en') {
              return `https://github.com/everFinance/docs/edit/master/i18n/${locale}/docusaurus-plugin-content-docs/current/${docPath}`;
            }
            return `https://github.com/everFinance/docs/edit/master/docs/${docPath}`;
          },
        },
        gtag: {
          trackingID: 'GTM-PZ2J4TP',
          anonymizeIP: false,
        },
        // 传递至 @docusaurus/plugin-content-blog（设置为 false 以禁用） 
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        }
      },
    ],
  ],

  // 主题
  // themes:
  themeConfig: {
    navbar: {
      title: 'everPay Docs',
      logo: {
        alt: 'everPay Logo',
        src: 'img/logo-black.svg',
        srcDark: 'img/logo-white.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'guide/getting-started/overview',
          position: 'left',
          label: '指南',
        },
        // {
        //   type: 'doc',
        //   docId: 'sdk/intro',
        //   position: 'left',
        //   label: 'SDK',
        // },
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
          title: '文档',
          items: [
            {
              label: '指南',
              to: '/docs/guide/getting-started/overview',
            },
            // {
            //   label: 'SDK',
            //   to: '/docs/sdk/intro',
            // }
          ],
        },
        {
          title: '社群',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/everVisionHQ',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/WM5MQZGVPF',
            },
            {
              label: 'Medium',
              href: 'https://news.ever.vision',
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'docs',
              href: 'https://github.com/everFinance/docs',
            },
            {
              label: 'everpay-js',
              href: 'https://github.com/everFinance/everpay-js',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} everVision, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      // 自己生成索引需要
      appId: 'AI0VA1UPRC',
      apiKey: '35a05c3168caead7419515e910de2c96',
      indexName: 'docs',
      js_render: true
    }
  },
};
