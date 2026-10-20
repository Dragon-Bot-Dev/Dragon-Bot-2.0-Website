// Single source of truth for links and brand strings used across the site.
// Change a URL here and it updates everywhere.

export const SITE = {
  name: "Dragon Bot 2.0",
  shortName: "Dragon Bot",
  tagline: "Never miss a war attack again.",
  description:
    "Dragon Bot 2.0 is a Discord bot for Clash of Clans clans: war and CWL attack reminders, Capital Raid reminders, war activity tracking, clan and player lookups, and official update notes.",
  url: "https://dragon-bot-website.vercel.app",
};

export const LINKS = {
  invite:
    "https://discord.com/oauth2/authorize?client_id=1322658381974208522&permissions=2214709312&integration_type=0&scope=bot+applications.commands",
  discord: "https://discord.gg/RdwtR7HQbr",
  github: "https://github.com/Dragon-Bot-Dev",
  githubIssues: "https://github.com/Dragon-Bot-Dev/Dragon-Bot-2.0/issues",
};

// Voluntary support. Leave `url` empty until a donation page exists; the
// Support page shows a disabled "coming soon" button and the nav shows
// "(soon)". Set `url` (and `platform`, e.g. "Ko-fi") to make it live.
export const SUPPORT = {
  url: "",
  platform: "",
};
export const supportLive = SUPPORT.url !== "";

export const NAV = [
  { name: "Setup", href: "/setup" },
  { name: "Commands", href: "/commands" },
  { name: "FAQ", href: "/faq" },
  { name: "Support", href: "/support", soon: !supportLive },
];

// How often the bot checks wars / raids for reminders. Keep in sync with the
// bot's WarPatrol / RaidPatrol loops.
export const REMINDER_CHECK_MINUTES = 20;
