import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Inspect from 'vite-plugin-inspect'
import path from 'path'

export default defineConfig({
  title: 'KsgEcharts',
  description: '`KsgEcharts` 是基于 `Vue3.x` 与 `ECharts5.x` 构建封装的组件库提供高可配置化、简捷、高效地构建图表组件化方案',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => {
      md.use(demoblockPlugin, {
        customClass: 'demoblock-custom',
      })
    },
  },

  vite: {
    plugins: [demoblockVitePlugin(), vueJsx(), Inspect()],
    resolve: {
      alias: {
        '@alias': path.resolve(__dirname, '../')
      }
    },
    ssr: {
      noExternal: ['vue-echarts', 'echarts', 'zrender', 'resize-detector', 'ksg-echart'],
    }
  },

  vue: {
    template: {
      // compilerOptions: {
      //   isCustomElement: (tag) => tag.startsWith('ksg-')
      // }
    }
  },

  themeConfig: {
    outline: false,
    // outlineTitle: '本页目录',
    lastUpdatedText: '上次更新',
    logo: '/logo.svg',
    search: {
      provider: 'local'
    },
    // demoblock locales
    demoblock: {
      demoStyle: "dark",
      layout: 'vertical',
      hideCode: true,
      'root': {
        'view-source': '查看源代码',
        'hide-source': '隐藏源代码',
        'edit-in-editor': '在 Playground 中编辑',
        'edit-on-github': '在 Github 中编辑',
        'copy-code': '复制代码',
        'copy-success': '复制成功',
        'copy-error': '复制失败'
      },
    },
    // nav
    nav: [
      // { text: '文档', link: '/guide/' }
    ],
    // sidebar
    sidebar: { 
      '/guide/': [
        {
          text: '🚗  快速开始',
          collapsible: false,
          items: [
            {
              text: '介绍',
              link: '/guide/'
            },
            {
              text: '开始使用',
              link: '/guide/usage'
            },
            {
              text: '基本属性',
              link: '/guide/option'
            },
            {
              text: '更新日志',
              link: '/guide/log'
            }
          ]
        },
        {
          text: '📈 图表',
          collapsible: false,
          items: [
            {
              text: '饼图',
              link: '/guide/charts/pie'
            },
          ]
        }
      ],
    },

    editLink: {
      pattern: 'https://github.com/xinlei3166/vitepress-theme-demoblock/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xinlei3166/vitepress-theme-demoblock' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present'
    }
  }
})
