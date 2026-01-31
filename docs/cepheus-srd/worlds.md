# Worlds

This section covers the creation and description of worlds in the Cepheus Engine universe.

## World Design

### The Universal World Profile (UWP)

Worlds are described using the Universal World Profile, a shorthand notation that quickly conveys key information about a world.

**Format:** X-ABCDEFGH-I-J

- **X** = Starport quality
- **A** = World size
- **B** = Atmosphere
- **C** = Hydrographics
- **D** = Population
- **E** = Government
- **F** = Law level
- **G** = Technology level
- **H** = Trade codes
- **I** = Population modifier
- **J** = Bases

Example: A778899-A means:
- Class A starport
- Size 7 world
- Atmosphere 7 (standard)
- Hydrographics 8 (80% water)
- Population 8 (billions)
- Government 9 (complex)
- Law level 9 (strict)
- Tech level A (10)

## World Characteristics

### Starport

| Code | Type | Facilities |
|------|------|-----------|
| X | None | No port |
| E | Frontier | Minimal facilities |
| D | Poor | Limited facilities |
| C | Routine | Basic facilities |
| B | Good | Excellent facilities |
| A | Excellent | Full facilities |

### World Size

| Code | Diameter | Surface G |
|------|----------|-----------|
| 0 | &lt;1,000 km | 0.01G |
| 1 | 1,600 km | 0.05G |
| 2 | 3,200 km | 0.15G |
| 3 | 4,800 km | 0.25G |
| 4 | 6,400 km | 0.35G |
| 5 | 8,000 km | 0.45G |
| 6 | 9,600 km | 0.70G |
| 7 | 11,200 km | 0.90G |
| 8 | 12,800 km | 1.00G |
| 9 | 14,400 km | 1.25G |
| A | 16,000 km | 1.40G |

### Atmosphere

| Code | Type | Pressure | Suit Required |
|------|------|----------|---------------|
| 0 | None | None | Yes |
| 1 | Trace | Trace | Yes |
| 2 | Very Thin | 0.1-0.09 | Yes |
| 3 | Very Thin | 0.08-0.1 | Yes |
| 4 | Thin | 0.43-0.49 | No |
| 5 | Thin | 0.5-0.8 | No |
| 6 | Standard | 0.75-1.25 | No |
| 7 | Standard | 0.75-1.25 | No |
| 8 | Dense | 1.25-1.49 | No |
| 9 | Very Dense | 1.5-2.49 | No |
| A | Super Dense | >2.5 | No |
| B | Insidious | Variable | Special |
| C | Insidious | Variable | Special |
| D | Thin Low | 0.5-0.8 | No |
| E | Thin Tainted | 0.43-0.49 | Yes |
| F | Dense Tainted | 1.25-1.49 | Yes |

### Hydrographics

| Code | % Water | Description |
|------|---------|------------|
| 0 | 0% | No water |
| 1 | 10% | Minimal water |
| 2 | 20% | Small seas |
| 3 | 30% | Scattered water |
| 4 | 40% | Significant water |
| 5 | 50% | Half water |
| 6 | 60% | Mostly water |
| 7 | 70% | Extensive oceans |
| 8 | 80% | Large oceans |
| 9 | 90% | Almost all water |
| A | 100% | Water world |

### Population

| Code | Population | Examples |
|------|-----------|----------|
| 0 | None | Empty world |
| 1 | 1,000+ | Settlement |
| 2 | 10,000+ | Small town |
| 3 | 100,000+ | City |
| 4 | 1,000,000+ | Large city |
| 5 | 10,000,000+ | Megacity |
| 6 | 100,000,000+ | National population |
| 7 | 1,000,000,000+ | Continental population |
| 8 | 10,000,000,000+ | Planetary population |
| 9 | 100,000,000,000+ | World power |
| A | 1,000,000,000,000+ | Interstellar power |

### Government

| Code | Type | Examples |
|------|------|----------|
| 0 | None | No government |
| 1 | Company | Corporate control |
| 2 | Participating | Direct democracy |
| 3 | Self-Perpetuating | Oligarchy |
| 4 | Representative | Elected officials |
| 5 | Feudal | Nobility rules |
| 6 | Dictatorship | Single ruler |
| 7 | Military | Military council |
| 8 | Bureaucracy | Bureaucratic system |
| 9 | Impersonal Bureaucracy | Faceless bureaucracy |
| A | Charismatic Dictatorship | Personality cult |
| B | Non-Aligned | Independent |
| C | Religious | Theocracy |
| D | Multiple Factions | Competing powers |
| E | Balkanized | Fragmented |
| F | Dominated | Ruled by outside power |

### Law Level

| Level | Gun Control | Drugs | Armor |
|-------|------------|-------|-------|
| 0 | No restriction | Allowed | Allowed |
| 1 | Handgun control | Allowed | Allowed |
| 2 | Firearm control | Allowed | Allowed |
| 3 | All firearms banned | Allowed | Allowed |
| 4 | All firearms banned | Some banned | Allowed |
| 5 | All firearms banned | Most banned | Allowed |
| 6 | All firearms banned | All banned | Allowed |
| 7 | All firearms banned | All banned | Some banned |
| 8 | All weapons banned | All banned | Most banned |
| 9 | All weapons banned | All banned | All banned |

### Technology Level (TL)

Technology level reflects the scientific and production capacity of a world, determining what equipment is available locally and what must be imported.

## World Creation

### Step 1: Roll Characteristics

Roll 2D6 for each UWP characteristic (or use the table system).

### Step 2: Determine Trade Codes

Based on characteristics, determine what trade codes apply:

- **Ag** - Agricultural: 4-9 size, 4-8 atmosphere, 4-9 hydrographics
- **As** - Asteroid: 0 size, 0 atmosphere
- **Ba** - Barren: 0-3 population
- **De** - Desert: 2-9 atmosphere, 0 hydrographics
- **Fl** - Fluid Oceans: Various atmospheres, 1-10 hydrographics
- **Ga** - Garden: 5-8 size, 5-8 atmosphere, 4-9 hydrographics, 4+ population
- **Hi** - High Population: Population 9+
- **Ic** - Ice-Capped: 0-1 hydrographics
- **In** - Industrial: 0-3 size, 0-1 atmosphere, 2-9 population, 4+ government
- **Lo** - Low Population: Population 1-3
- **Po** - Poor: 2-5 atmosphere, 0-3 hydrographics
- **Ri** - Rich: 6-8 atmosphere, 6-8 hydrographics, 6+ population, 4-9 government
- **Va** - Vacuum: 0 atmosphere
- **Wa** - Water World: A hydrographics

### Step 3: Add Details

Create additional details:

- **Description** - What is the world like?
- **Major Settlements** - Cities and towns
- **Climate Zones** - Different regions
- **Notable Features** - Mountains, deserts, oceans, etc.
- **Culture** - Languages, customs, beliefs
- **Economy** - Main industries and trade
- **Politics** - Current government situation

## World Types

### Garden World

Habitable, Earth-like, often heavily populated and developed.

### High Technology World

Advanced civilization with TL 10+; excellent facilities and equipment available.

### Agricultural World

Primarily farmland; food production is main economy.

### Industrial World

Manufacturing and production; resource-rich.

### Water World

Primarily ocean; limited land masses.

### Dead World

Barren, airless, or otherwise uninhabitable; rarely colonized.

### Frontier World

Newly settled; minimal infrastructure; high opportunity and danger.

## Describing Your World

When describing a world to players, include:

1. **First Impressions** - What they see approaching the world
2. **Starport** - What are the landing facilities like?
3. **Environment** - Weather, terrain, atmosphere
4. **Population** - Who lives here?
5. **Culture** - Local customs and society
6. **Points of Interest** - Places to visit and explore
7. **Dangers** - Hazards and threats
8. **Adventure Hooks** - Why would characters come here?

## Trade and Commerce

Worlds trade with each other through merchant vessels. Profitable trade often depends on:

- Finding goods cheaper on one world
- Selling them more expensive on another
- Avoiding hostile governments and pirates
- Managing cargo safely
