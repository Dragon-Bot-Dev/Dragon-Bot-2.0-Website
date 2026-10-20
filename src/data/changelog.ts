// Newest first. Dates are month-level because these were summarised from the
// bot's commit history rather than tracked per release.

export interface ChangelogEntry {
  date: string;
  title: string;
  kind: 'new' | 'fix' | 'improved';
  body: string;
}

export const changelog: ChangelogEntry[] = [
  {
    date: 'Sep 2026',
    title: '/patchnotes and automatic update posts',
    kind: 'new',
    body: "The bot now reads Supercell's official Clash of Clans blog. Run /patchnotes for the latest update or balance post, or set a news channel with /adjust_reminders and new posts are announced automatically (checked every 6 hours).",
  },
  {
    date: 'Sep 2026',
    title: 'War reminders now work across every CWL round',
    kind: 'fix',
    body: 'Reminders and war activity tracking could stop after round 1 of CWL because the bot never noticed a new round had started. Each round now gets its own reminders, end-of-war summary and activity record.',
  },
  {
    date: 'Sep 2026',
    title: 'Long lists no longer garble',
    kind: 'fix',
    body: 'Long command output (war activity, war stats, CWL scouting, war summaries) was being split mid-line and broke the code block. Lists now split cleanly across messages.',
  },
  {
    date: 'Sep 2026',
    title: 'Fixed the end-of-war summary posting twice',
    kind: 'fix',
    body: 'A database connection issue could make the war-ended summary post a second time 20 minutes later. Fixed.',
  },
  {
    date: 'Sep 2026',
    title: '/waractivity looks back 10 days and shows Town Halls',
    kind: 'improved',
    body: 'The lookback window grew from 7 to 10 days, entries show Town Hall level, and members with no war activity are listed in a numbered section.',
  },
  {
    date: 'Aug 2026',
    title: '/waractivity: who is actually showing up',
    kind: 'new',
    body: 'The bot now records each member’s result when a war ends. /waractivity ranks your clan by how many of their attacks they used, with stars and average destruction, and /waractivity member:@someone shows one player’s per-war history.',
  },
  {
    date: 'Aug 2026',
    title: 'Reminder defaults fixed',
    kind: 'fix',
    body: 'Servers that never customised reminder times could silently receive no war reminders. They now default to 4 hours and 1 hour before the war ends, matching what /serverstatus shows.',
  },
];
