# BHS Walldorf — Premium Landing (v2 · Industrial Grid Interface)

Karriere-Landingpage für BHS Metallrecycling (Walldorf). Vite + Vanilla JS (ohne Framework), scroll-driven Hero mit 5 Prozess-Etappen, editorial Job-Liste, Bewerbungsformular mit CV-Upload.

## Konzept (v2)
"Premium Industrial Grid Interface": dunkler technischer Viewport, Objekt sofort sichtbar (composed first frame), Grid-Overlay, Glass-Panels, Engineering-Annotationen. Palette: navy/graphite + BHS-blue + industrial green (kein Orange).

## Setup

```
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
```

## Architektur
- `src/data/` — alle Inhalte + Asset-Contract (`assets.js`). **Keine Medienpfade hardcoden** außerhalb von `assets.js`.
- `src/components/` — render*()/init*() Module, in `main.js` zusammengesetzt.
- `src/styles/` — tokens → base → header → hero → sections → forms.

## Phasen
- **Phase 1 (jetzt):** Architektur, UI, Logik, Copy, Responsive, Fallbacks. Bilder temporär via externe BHS-URLs (`PHASE.useExternalImages = true`). Videos referenziert, aber optional — CSS/Fallback funktioniert ohne sie. Formular ist Frontend-Mock.
- **Phase 2 (lokaler Agent):** echte Assets in `public/assets/`, `PHASE.useExternalImages = false`, Videos/Logo/Favicon einsetzen, echte Zahlen + Adresse/Maps, Build testen, GitHub + Vercel deploy.

## Fallback-Verhalten
- Kein Video / Ladefehler → animierter CSS-Fallback (`.hero__vfallback`) + composed first frame bleiben sichtbar.
- Bild-Ladefehler → `onerror` blendet aus / setzt `.is-empty` Platzhalter.
- `prefers-reduced-motion` → statischer Hero ohne Scroll-Hijacking.

---

## English summary

**BHS Walldorf** career landing (concept): industrial grid UI, scroll-driven hero process stages, job list, application form mock.

- **Stack:** Vite · Vanilla JS · modular CSS
- **Live:** https://bhs-chi.vercel.app
- **Phase:** frontend complete; assets/forms production-ready in later phase

