# GitHub Pages Setup mit VuePress

## Vorbereitung

### 1. VuePress Repository erstellen
- Erstelle ein neues Repository für deine VuePress-Dokumentation (z.B. `vuepress-docs`)
- Oder verwende ein vorhandenes VuePress-Projekt

### 2. Submodule hinzufügen
```bash
git submodule add https://github.com/out-of-pixel/vuepress-docs.git docs
git commit -m "Add VuePress as submodule"
git push
```

### 3. GitHub Pages konfigurieren
Im Hauptrepository:
1. Gehe zu **Settings** → **Pages**
2. Wähle **Source**: GitHub Actions
3. Der Workflow wird automatisch bereitgestellt

### 4. Repository-Struktur
```
Hostile-Space/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions Workflow
├── .gitmodules                 # Submodule-Konfiguration
├── docs/                       # VuePress Submodule
│   ├── package.json
│   └── .vuepress/
│       ├── config.js
│       └── dist/               # Build-Output
└── README.md
```

## Workflow-Funktionen

Der `deploy.yml` Workflow:
- ✅ Checkt Code mit Submodules aus
- ✅ Installiert Node.js 18
- ✅ Installiert VuePress-Dependencies
- ✅ Baut die VuePress-Seite
- ✅ Deployt zu GitHub Pages automatisch

## Verwendung

### Änderungen in der Dokumentation
```bash
# Das Submodule updaten
cd docs
# ... Änderungen vornehmen ...
git add .
git commit -m "Update docs"
git push

# Zurück zum Hauptrepository
cd ..
git add docs
git commit -m "Update docs submodule"
git push
```

Der Workflow startet automatisch und deployt die Seite zu GitHub Pages.

### Submodule clonen
```bash
git clone --recursive https://github.com/out-of-pixel/Hostile-Space.git
```

Oder für bereits geclonte Repos:
```bash
git submodule update --init --recursive
```

## Tipps

- **Caching**: NPM-Dependencies werden gecacht für schnellere Builds
- **Nur auf main/master**: Deployment erfolgt nur auf main/master-Branch
- **Pull Requests**: Werden gebaut, aber nicht deployed
- **Manuelle Trigger**: Kann über "Run workflow" manuell gestartet werden
