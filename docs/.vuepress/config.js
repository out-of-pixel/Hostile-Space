import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  base: '/Hostile-Space/',
  lang: 'de-DE',
  title: 'Hostile Space',
  description: 'Dokumentation für Hostile Space',
  
  bundler: viteBundler(),
  
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Suchen',
        },
      },
      hotKeys: ['s', '/'],
      maxSuggestions: 10,
    }),
  ],
  
  theme: defaultTheme({
    logo: '/logo.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          children: [
            '/guide/installation.md',
            '/guide/quick-start.md',
          ]
        },
      ],
      '/api/': [
        {
          text: 'API Reference',
          children: [
            '/api/components.md',
          ]
        },
      ],
    },
  }),
})
