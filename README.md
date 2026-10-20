# Dragon Bot 2.0 | Website

The marketing and documentation site for **Dragon Bot 2.0**, a Discord bot for Clash of Clans clans.
It explains what the bot does, walks new users through setup, and lists every command.

[**Live Site**](https://dragon-bot-website.vercel.app/)

---

## Tech Stack

* **Framework:** Astro 6 (static output)
* **Styling:** Tailwind CSS 4 (design tokens live in `src/styles/global.css`)
* **Deployment:** Vercel
* **Language:** TypeScript

## Pages

| Route | Purpose |
|---|---|
| `/` | Landing page with example bot output |
| `/setup` | Step-by-step setup guide |
| `/commands` | Searchable, filterable command reference |
| `/faq` | FAQ and troubleshooting |
| `/changelog` | What's new in the bot |
| `/support` | Voluntary support (payments not live yet). `/premium` redirects here |
| `/privacy`, `/terms` | Legal pages |

## Where to edit things

* **Links** (invite, Discord, GitHub): `src/config.ts`. Change it once and it updates everywhere.
* **Commands:** `src/data/commands.ts`. Keep it in sync with the bot's slash commands.
* **FAQ / changelog:** `src/data/faq.ts`, `src/data/changelog.ts`.
* **Reminder check interval** shown on the site: `REMINDER_CHECK_MINUTES` in `src/config.ts` (must match the bot's reminder loop).

## Local Development

**Prerequisites:** Node.js `22.12` or higher (see `engines` in `package.json`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Notes

* The Open Graph image currently falls back to the bot logo (`public/dragon.png`). A dedicated 1200x630 `og-image.png` would make link previews look better.
* The setup videos in `public/videos/` predate token-verified `/link`; the setup page says so. Re-record when convenient.

## Contributors

[**Keepas**](https://github.com/Keepas3) - Lead Developer

Developed under the **Dragon-Bot-Dev** organization.
This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it.
