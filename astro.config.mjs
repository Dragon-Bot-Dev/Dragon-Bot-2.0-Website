import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dragon-bot-website.vercel.app',
  integrations: [sitemap()],
  // The old Premium page was rewritten as an honest Support page.
  redirects: {
    '/premium': '/support',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
