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
      { text: 'Hostile SRD', link: '/docs/hostile-srd/' },
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
      '/docs/hostile-srd/': [
        {
          text: 'About',
          link: '/docs/hostile-srd/src/about.md',
        },
        {
          text: 'Introduction',
          link: '/docs/hostile-srd/src/introduction.md',
        },
        {
          text: 'Chapter 1: Incoming Message',
          children: [
            '/docs/hostile-srd/src/introduction/what-do-we-do.md',
            '/docs/hostile-srd/src/introduction/what-is-roleplaying.md',
            '/docs/hostile-srd/src/introduction/your-primer.md',
            '/docs/hostile-srd/src/introduction/hostile-line-of-books.md',
            '/docs/hostile-srd/src/introduction/game-terminology.md',
          ]
        },
        {
          text: 'Chapter 2: Game System',
          children: [
            '/docs/hostile-srd/src/game-system/task-resolution.md',
            '/docs/hostile-srd/src/game-system/difficulty.md',
            '/docs/hostile-srd/src/game-system/other-situations.md',
          ]
        },
        {
          text: 'Chapter 3: Characters',
          children: [
            '/docs/hostile-srd/src/characters/select-your-crew.md',
            '/docs/hostile-srd/src/characters/characteristics.md',
            '/docs/hostile-srd/src/characters/background-skills.md',
            '/docs/hostile-srd/src/characters/careers.md',
            '/docs/hostile-srd/src/characters/random-creation.md',
            '/docs/hostile-srd/src/characters/mustering-out-benefits.md',
            '/docs/hostile-srd/src/characters/design-based-creation.md',
            '/docs/hostile-srd/src/characters/final-details.md',
            '/docs/hostile-srd/src/characters/carrying-capacity.md',
            '/docs/hostile-srd/src/characters/roleplaying-androids.md',
            '/docs/hostile-srd/src/characters/roleplaying-proles.md',
            '/docs/hostile-srd/src/characters/career-details.md',
            '/docs/hostile-srd/src/characters/skills.md',
          ]
        },
        {
          text: 'Chapter 4: Hazards',
          children: [
            '/docs/hostile-srd/src/hazards/stress.md',
            '/docs/hostile-srd/src/hazards/acid.md',
            '/docs/hostile-srd/src/hazards/hiking.md',
            '/docs/hostile-srd/src/hazards/falling.md',
            '/docs/hostile-srd/src/hazards/fire.md',
            '/docs/hostile-srd/src/hazards/diseases.md',
            '/docs/hostile-srd/src/hazards/poisons.md',
            '/docs/hostile-srd/src/hazards/suffocation.md',
            '/docs/hostile-srd/src/hazards/hostile-atmospheres.md',
            '/docs/hostile-srd/src/hazards/temperature.md',
            '/docs/hostile-srd/src/hazards/radiation.md',
            '/docs/hostile-srd/src/hazards/pressure-loss.md',
            '/docs/hostile-srd/src/hazards/zero-gravity.md',
            '/docs/hostile-srd/src/hazards/hunger-fatigue.md',
            '/docs/hostile-srd/src/hazards/climbing.md',
            '/docs/hostile-srd/src/hazards/communications.md',
            '/docs/hostile-srd/src/hazards/movement.md',
            '/docs/hostile-srd/src/hazards/underwater.md',
            '/docs/hostile-srd/src/hazards/weather.md',
            '/docs/hostile-srd/src/hazards/desert-survival.md',
            '/docs/hostile-srd/src/hazards/arctic-survival.md',
          ]
        },
        {
          text: 'Chapter 5: Combat',
          children: [
            '/docs/hostile-srd/src/combat/range.md',
            '/docs/hostile-srd/src/combat/initiative.md',
            '/docs/hostile-srd/src/combat/order-of-combat.md',
            '/docs/hostile-srd/src/combat/area-fire.md',
            '/docs/hostile-srd/src/combat/non-combat-actions.md',
            '/docs/hostile-srd/src/combat/injury-recovery.md',
            '/docs/hostile-srd/src/combat/objects-in-combat.md',
            '/docs/hostile-srd/src/combat/vehicle-combat.md',
          ]
        },
        {
          text: 'Chapter 6: Space Travel',
          children: [
            '/docs/hostile-srd/src/space-travel/the-mission.md',
            '/docs/hostile-srd/src/space-travel/paying-passengers.md',
            '/docs/hostile-srd/src/space-travel/flight-planning.md',
            '/docs/hostile-srd/src/space-travel/fuelling.md',
            '/docs/hostile-srd/src/space-travel/loading-unloading.md',
            '/docs/hostile-srd/src/space-travel/takeoff-flight.md',
            '/docs/hostile-srd/src/space-travel/hyperspace.md',
            '/docs/hostile-srd/src/space-travel/landing.md',
            '/docs/hostile-srd/src/space-travel/comms-engineering.md',
            '/docs/hostile-srd/src/space-travel/gas-giant-refuelling.md',
            '/docs/hostile-srd/src/space-travel/bonus-situation.md',
            '/docs/hostile-srd/src/space-travel/other-topics.md',
          ]
        },
        {
          text: 'Chapter 7: Starship Combat',
          children: [
            '/docs/hostile-srd/src/starship-combat/fundamentals.md',
            '/docs/hostile-srd/src/starship-combat/advantage.md',
            '/docs/hostile-srd/src/starship-combat/character-actions.md',
            '/docs/hostile-srd/src/starship-combat/crew-actions-summary.md',
            '/docs/hostile-srd/src/starship-combat/taking-damage.md',
            '/docs/hostile-srd/src/starship-combat/repairing-damage.md',
            '/docs/hostile-srd/src/starship-combat/fast-play.md',
          ]
        },
        {
          text: 'Chapter 8: World Data',
          children: [
            '/docs/hostile-srd/src/world-data/name.md',
            '/docs/hostile-srd/src/world-data/hex.md',
            '/docs/hostile-srd/src/world-data/starport.md',
            '/docs/hostile-srd/src/world-data/size.md',
            '/docs/hostile-srd/src/world-data/atmosphere.md',
            '/docs/hostile-srd/src/world-data/hydrographics.md',
            '/docs/hostile-srd/src/world-data/population.md',
            '/docs/hostile-srd/src/world-data/government.md',
            '/docs/hostile-srd/src/world-data/law-level.md',
            '/docs/hostile-srd/src/world-data/tech-level.md',
            '/docs/hostile-srd/src/world-data/trade-codes.md',
            '/docs/hostile-srd/src/world-data/gas-giants.md',
            '/docs/hostile-srd/src/world-data/bases.md',
            '/docs/hostile-srd/src/world-data/climate.md',
          ]
        },
        {
          text: 'Chapter 9: Trading',
          children: [
            '/docs/hostile-srd/src/trading/speculative-trade-checklist.md',
            '/docs/hostile-srd/src/trading/find-supplier.md',
            '/docs/hostile-srd/src/trading/determine-goods-available.md',
            '/docs/hostile-srd/src/trading/determine-purchase-price.md',
            '/docs/hostile-srd/src/trading/selling-goods.md',
            '/docs/hostile-srd/src/trading/selling-salvage.md',
          ]
        },
        {
          text: 'Chapter 10: Encounters',
          children: [
            '/docs/hostile-srd/src/encounters/space-encounters.md',
            '/docs/hostile-srd/src/encounters/colony-encounters.md',
            '/docs/hostile-srd/src/encounters/colourful-local-encounters.md',
            '/docs/hostile-srd/src/encounters/influencing-attitudes.md',
            '/docs/hostile-srd/src/encounters/patron-encounters.md',
            '/docs/hostile-srd/src/encounters/travelling-across-planets.md',
            '/docs/hostile-srd/src/encounters/animal-encounters.md',
            '/docs/hostile-srd/src/encounters/exomorphs.md',
            '/docs/hostile-srd/src/encounters/crews.md',
            '/docs/hostile-srd/src/encounters/running-the-game.md',
            '/docs/hostile-srd/src/encounters/scenario-creation.md',
            '/docs/hostile-srd/src/encounters/managing-resources.md',
            '/docs/hostile-srd/src/encounters/campaigns.md',
          ]
        },
        {
          text: 'Legal',
          link: '/docs/hostile-srd/src/legal.md',
        },
      ],
    },
  }),
})
