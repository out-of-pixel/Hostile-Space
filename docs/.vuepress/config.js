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
      { text: 'Cepheus SRD', link: '/docs/cepheus-srd/' },
    ],
    sidebar: {
      '/': [
        {
          text: 'Home',
          link: '/',
        },
      ],
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
      '/docs/cepheus-srd/': [
        {
          text: 'About',
          link: '/docs/cepheus-srd/src/about.md',
        },
        {
          text: 'Introduction',
          link: '/docs/cepheus-srd/src/introduction.md',
        },
        {
          text: 'Book 1: Characters',
          children: [
            '/docs/cepheus-srd/src/book1/character-creation.md',
            '/docs/cepheus-srd/src/book1/skills.md',
            '/docs/cepheus-srd/src/book1/psionics.md',
            '/docs/cepheus-srd/src/book1/equipment.md',
            '/docs/cepheus-srd/src/book1/personal-combat.md',
          ]
        },
        {
          text: 'Book 2: Starships and Interstellar Travel',
          children: [
            '/docs/cepheus-srd/src/book2/off-world-travel.md',
            '/docs/cepheus-srd/src/book2/trade-and-commerce.md',
            '/docs/cepheus-srd/src/book2/ship-design-and-construction.md',
            '/docs/cepheus-srd/src/book2/common-vessels.md',
            '/docs/cepheus-srd/src/book2/space-combat.md',
          ]
        },
        {
          text: 'Book 3: Referees',
          children: [
            '/docs/cepheus-srd/src/book3/environments-and-hazards.md',
            '/docs/cepheus-srd/src/book3/worlds.md',
            '/docs/cepheus-srd/src/book3/planetary-wilderness-encounters.md',
            '/docs/cepheus-srd/src/book3/social-encounters.md',
            '/docs/cepheus-srd/src/book3/starship-encounters.md',
            '/docs/cepheus-srd/src/book3/refereeing-the-game.md',
            '/docs/cepheus-srd/src/book3/adventures.md',
          ]
        },
        {
          text: 'Tools',
          children: [
            '/docs/cepheus-srd/src/tools/sector-generator.md',
          ]
        },
        {
          text: 'Legal',
          link: '/docs/cepheus-srd/src/legal.md',
        },
      ],
    },
  }),
})
