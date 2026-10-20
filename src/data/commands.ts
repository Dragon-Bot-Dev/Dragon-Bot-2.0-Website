// Every slash command the bot registers. Verified against the bot's
// src/commands/*.py. `scope: 'server'` means it is used inside a Discord server
// and (apart from /setclantag itself) needs a clan linked with /setclantag;
// `scope: 'global'` works without a linked clan.

export type Scope = 'global' | 'server';

export interface Command {
  name: string; // without the leading slash
  desc: string;
  scope: Scope;
  usage?: string;
  admin?: boolean;
}

export interface CommandGroup {
  id: string;
  category: string;
  blurb: string;
  commands: Command[];
}

export const commandGroups: CommandGroup[] = [
  {
    id: 'war',
    category: 'War & CWL',
    blurb: 'Live war status, history, and who is actually pulling their weight.',
    commands: [
      { name: 'currentwar', desc: 'Overview of the current war or CWL round, or per-member attack stats.', scope: 'server', usage: '/currentwar [mode: info | stats]' },
      { name: 'waractivity', desc: 'Leaderboard of who has shown up and finished their attacks over the last 10 days. Pass a member to see their per-war breakdown.', scope: 'server', usage: '/waractivity [member]' },
      { name: 'warlog', desc: "Your clan's recent war history.", scope: 'server', usage: '/warlog [limit]' },
      { name: 'cwlschedule', desc: 'CWL rounds, participating clans and who you face each round.', scope: 'server' },
      { name: 'cwlprep', desc: 'Scout every CWL clan: Town Hall spread, war streak and log visibility.', scope: 'server' },
      { name: 'cwlclansearch', desc: 'Look up a CWL clan by name or tag and see its Town Hall breakdown.', scope: 'server', usage: '/cwlclansearch <name or tag>' },
    ],
  },
  {
    id: 'clan',
    category: 'Clan',
    blurb: 'Clan info, rosters and Capital Raids.',
    commands: [
      { name: 'claninfo', desc: "Overview of your server's clan: level, requirements, war record, league and location.", scope: 'server' },
      { name: 'clanmembers', desc: 'Clan roster ranked by league, Town Hall, role, or tag.', scope: 'server', usage: '/clanmembers [ranking]' },
      { name: 'searchmember', desc: 'Find a member of your clan by in-game name or by a linked Discord user.', scope: 'server', usage: '/searchmember [user] [username]' },
      { name: 'capitalraid', desc: 'Current Raid Weekend: status, medals, total loot and per-member stats.', scope: 'server' },
      { name: 'previousraids', desc: 'History of past Capital Raid seasons.', scope: 'server', usage: '/previousraids [limit]' },
      { name: 'searchclan', desc: 'Search any clan by name.', scope: 'global', usage: '/searchclan <clanname> [limits]' },
    ],
  },
  {
    id: 'player',
    category: 'Player',
    blurb: 'Look up yourself, a linked member, or any player tag.',
    commands: [
      { name: 'playerinfo', desc: 'Profile: clan, role, Town Hall, trophies, war stars, donations and war preference.', scope: 'global', usage: '/playerinfo [user] [player_tag]' },
      { name: 'playerlevels', desc: 'Troop and siege machine levels, for the home village, builder base, or both.', scope: 'global', usage: '/playerlevels [user] [player_tag] [village]' },
      { name: 'playerheroes', desc: 'Heroes, hero equipment and pets with their levels.', scope: 'global', usage: '/playerheroes [user] [player_tag]' },
    ],
  },
  {
    id: 'settings',
    category: 'Server Settings',
    blurb: 'Link your clan and choose where reminders and news go.',
    commands: [
      { name: 'setclantag', desc: "Link your clan to the server and optionally set the war and raid reminder channels and reminder times.", scope: 'server', usage: '/setclantag <#clantag> [war_channel] [raid_channel] [reminder_hours_1] [reminder_hours_2]' },
      { name: 'adjust_reminders', desc: 'Change reminder channels and times, set the news channel, or turn war, raid or news posts off.', scope: 'server', admin: true, usage: '/adjust_reminders [war_channel] [raid_channel] [news_channel] [disable] [reminder_hours_1] [reminder_hours_2]' },
      { name: 'serverstatus', desc: "This server's configuration: clan, channels, reminder times and linked members.", scope: 'server' },
    ],
  },
  {
    id: 'accounts',
    category: 'Accounts',
    blurb: 'Connect your Clash of Clans account to Discord.',
    commands: [
      { name: 'link', desc: 'Open the link menu: verify your player tag with your in-game API token, or register a Supercell Store session.', scope: 'global' },
      { name: 'unlink', desc: 'Remove your linked Clash of Clans account from the bot.', scope: 'global' },
      { name: 'claim', desc: 'Claim your Supercell Store bonus rewards and see mission progress (requires a linked Store session).', scope: 'global' },
    ],
  },
  {
    id: 'extras',
    category: 'News & Extras',
    blurb: 'Official update notes, community leaks and a few extras.',
    commands: [
      { name: 'patchnotes', desc: 'The latest official Clash of Clans update and balance-change posts, summarised in Discord.', scope: 'global', usage: '/patchnotes [count]' },
      { name: 'receiveposts', desc: 'Recent posts from a subreddit (default: r/ClashOfClansLeaks).', scope: 'global', usage: '/receiveposts [subreddit_name] [post_type] [limit]' },
      { name: 'about', desc: 'About Dragon Bot 2.0.', scope: 'global' },
      { name: 'flipcoin', desc: 'Heads or tails?', scope: 'global' },
      { name: 'help', desc: 'The command list, inside Discord.', scope: 'global' },
    ],
  },
];

export const totalCommands = commandGroups.reduce((n, g) => n + g.commands.length, 0);
