# GitHub Pages Setup mit VuePress 2.0

## ✅ Setup abgeschlossen!

Deine VuePress-Dokumentation wird automatisch auf GitHub Pages veröffentlicht:
**https://out-of-pixel.github.io/Hostile-Space/**

## Struktur

```
Hostile-Space/
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions Workflow
├── .gitmodules                 # VuePress Framework als Submodule
├── vuepress/                   # VuePress Source (Submodule)
├── docs/                       # Deine Wiki-Inhalte
│   ├── .vuepress/
│   │   └── config.js          # VuePress-Konfiguration
│   ├── guide/
│   │   ├── installation.md
│   │   └── quick-start.md
│   ├── api/
│   │   └── components.md
│   ├── index.md               # Startseite
│   └── package.json           # Dependencies
└── README.md
```

## Workflow-Funktionen

Der automatische Workflow (`deploy.yml`):
- ✅ Läuft bei jedem Push auf main/master
- ✅ Installiert Node.js 20
- ✅ Installiert VuePress 2.0.0-rc.26 mit Dependencies
- ✅ Baut die Dokumentation
- ✅ Deployt automatisch zu GitHub Pages

## Dokumentation bearbeiten

### Neue Seite hinzufügen
1. Erstelle eine `.md` Datei in `docs/` oder Unterordnern
2. Füge sie zur Sidebar in `docs/.vuepress/config.js` hinzu
3. Commit und push - automatisches Deployment!

### Lokal testen
```bash
cd docs
npm install
npm run dev
```

Öffne dann http://localhost:8080/Hostile-Space/

## Tech Stack

- **VuePress**: 2.0.0-rc.26
- **Theme**: @vuepress/theme-default (next)
- **Bundler**: Vite (@vuepress/bundler-vite)
- **Node.js**: 20
- **CSS Preprocessor**: sass-embedded

## Wichtige Konfiguration

In `docs/.vuepress/config.js`:
```js
base: '/Hostile-Space/',  // Wichtig für GitHub Pages!
```

Dies stellt sicher, dass alle Assets korrekt geladen werden.
