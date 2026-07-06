# BHS Walldorf — Karriere-Landing Page v1

## Структура проекта

```
bhs-landing/
├── index.html       ← весь лендинг (1 файл, без зависимостей)
└── README.md        ← этот файл
```

## Как открыть локально

Просто открой `index.html` в браузере (Chrome/Firefox/Safari).
Интернет нужен только для загрузки реальных фото с `karriere.bhs-walldorf.de`.

## Как перенести на хостинг

1. Загрузи `index.html` на любой хостинг или CDN (Netlify, Vercel, GitHub Pages, любой FTP)
2. Никаких npm, сборщиков, зависимостей — чистый HTML/CSS/JS
3. Фото и видео грузятся автоматически с `karriere.bhs-walldorf.de`

## Секции лендинга

| # | ID | Секция |
|---|----|--------|
| 1 | `#top` | **Header** — sticky навигация, BHS лого, CTA «Jetzt bewerben» |
| 2 | `#top` | **Hero** — видео-фон, H1, два CTA, строчка доверия |
| 3 | — | **Trust Strip** — 75+ Jahre · 2 Standorte · 3. Generation · 100% Recycling |
| 4 | `#jobs` | **Job Cards** — 5 вакансий с фото, описанием, критериями |
| 5 | `#werte` | **Benefits** — 7 преимуществ в 4-колоночной сетке |
| 6 | — | **Photo Stories** — горизонтальный слайдер с 6 карточками |
| 7 | `#about` | **About / Wer wir sind** — история компании + фото |
| 8 | `#prozess` | **Bewerbungsprozess** — 4 шага с цветными номерами |
| 9 | `#bewerben` | **Schnellbewerbung** — форма + bullets |
| 10 | — | **Final CTA** — лаймовая полоса «Komm ins Team» |
| 11 | `#kontakt` | **Footer** — контакты Nicole Endres, навигация, копирайт |

## Что нужно заполнить вручную

- [ ] Телефон Nicole Endres в Footer (заглушка «Telefonnummer bitte ergänzen»)
- [ ] Ссылки «Impressum» и «Datenschutz» в Footer
- [ ] Подключить backend для обработки формы (или Formspree / Netlify Forms)
- [ ] Добавить Google Analytics / Metrika

## Дизайн-токены (CSS переменные)

```css
--green: #2F8F4E      /* основной зелёный */
--accent: #FF6A2C     /* оранжевый CTA */
--lime: #C6F03C       /* лаймовый акцент */
--ink: #1C1F24        /* основной текст */
--surface: #F4F5F6    /* светлый фон */
```

## Шрифты
- **Заголовки:** Space Grotesk (600–700) — Google Fonts
- **Текст/UI:** Inter (400–600) — Google Fonts
- **Fallback:** системный sans-serif (работает без интернета)

## Адаптивность
- ✅ Desktop 1440px
- ✅ Tablet 960px
- ✅ Mobile 390px
- ✅ prefers-reduced-motion
