export default {
  lang: 'de-DE',
  title: 'Hostile Space',
  description: 'Dokumentation für Hostile Space',
  
  themeConfig: {
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
          items: [
            { text: 'Installation', link: '/guide/installation.md' },
            { text: 'Quick Start', link: '/guide/quick-start.md' },
          ]
        },
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Components', link: '/api/components.md' },
          ]
        },
      ],
    },
  },
}
