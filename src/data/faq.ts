import { REMINDER_CHECK_MINUTES } from '../config';

export interface FaqItem {
  q: string;
  a: string; // may contain simple HTML (<code>, <a>)
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

export const faqGroups: FaqGroup[] = [
  {
    title: 'Getting started',
    items: [
      {
        q: 'How do I set the bot up?',
        a: 'Invite the bot, run <code>/setclantag #YOURTAG</code> in your server, then pick where reminders go. The <a href="/setup">setup guide</a> walks through every step.',
      },
      {
        q: 'Does it cost anything?',
        a: 'No. Dragon Bot is free to use. If you want to chip in towards hosting, there is an optional <a href="/support">support page</a>. It unlocks nothing.',
      },
      {
        q: 'What permissions does the bot need?',
        a: 'It needs to see and post (including embeds) in the channels you choose for war, raid and news posts. Keep the default permissions on the invite link and make sure channel-level permissions do not block it.',
      },
    ],
  },
  {
    title: 'War & raid reminders',
    items: [
      {
        q: 'Why did I not get a war reminder?',
        a: `Check these in order: (1) a war channel is set (<code>/serverstatus</code> shows it), (2) the bot can post in that channel, (3) your clan's war log is public in-game, and (4) someone still has attacks left, since reminders are only sent when there are pending attacks. The bot also checks every ${REMINDER_CHECK_MINUTES} minutes, so a reminder can arrive up to about ${REMINDER_CHECK_MINUTES} minutes after the threshold is crossed.`,
      },
      {
        q: 'When are reminders sent, and can I change that?',
        a: 'There are two reminder times, by default 4 hours and 1 hour before the war ends. Change them with <code>/adjust_reminders reminder_hours_1:6 reminder_hours_2:2</code>. Set the second to <code>0</code> to turn it off.',
      },
      {
        q: 'Who gets pinged?',
        a: 'The first reminder lists members who still have attacks left without pinging anyone. The final reminder pings members who have linked their account with <code>/link</code>; unlinked members are listed by in-game name.',
      },
      {
        q: 'How do I turn reminders off?',
        a: 'Admins can run <code>/adjust_reminders disable:</code> and choose war, raid, news, or everything.',
      },
      {
        q: 'Do reminders work for CWL?',
        a: 'Yes. Each CWL round is treated as its own war, with its own reminders and end-of-war summary.',
      },
      {
        q: 'When are Capital Raid reminders sent?',
        a: 'Once, with 24 hours left in Raid Weekend, to the raid channel you configured, listing members who have not used all their attacks.',
      },
    ],
  },
  {
    title: 'Linking your account',
    items: [
      {
        q: 'How do I link my Clash of Clans account?',
        a: 'Run <code>/link</code>, choose <strong>Link CoC Account</strong>, then enter your player tag and your in-game API token. Find the token in Clash of Clans under Settings → More Settings → API Token. The token proves the account is yours.',
      },
      {
        q: 'What is the Supercell Store link?',
        a: 'An optional feature that lets <code>/claim</code> collect your Supercell Store bonus rewards for you. It needs a copy of your store session cookies, which are sensitive, so read the <a href="/privacy">Privacy Policy</a> before using it. You can skip it entirely.',
      },
      {
        q: 'How do I unlink?',
        a: 'Run <code>/unlink</code>. To have anything else removed, ask in the <a href="https://discord.gg/RdwtR7HQbr" target="_blank" rel="noopener noreferrer">support server</a>.',
      },
    ],
  },
  {
    title: 'War activity & news',
    items: [
      {
        q: 'Why is /waractivity empty?',
        a: 'It only knows about wars that finished while the bot was tracking your clan, and it needs a war channel set. Give it a war or CWL round to finish, then try again. It looks back 10 days.',
      },
      {
        q: 'How is /waractivity ranked?',
        a: 'By the share of available attacks each member actually used, then by total stars. Members of your current clan with no recorded wars in the window are listed separately at the bottom.',
      },
      {
        q: 'How do I get update notes posted automatically?',
        a: `Set a channel with <code>/adjust_reminders news_channel:#channel</code>. The bot checks Supercell's official Clash of Clans blog every 6 hours and posts new update and balance-change posts. You can also run <code>/patchnotes</code> any time.`,
      },
      {
        q: 'Why did /patchnotes miss a post?',
        a: 'The bot decides which blog posts are real game updates (as opposed to events and promotions) from the post address and title, which is a best-effort check. If one slips through or gets missed, tell us in the support server.',
      },
    ],
  },
  {
    title: 'Other',
    items: [
      {
        q: 'The bot is offline or not responding.',
        a: 'It may be restarting for an update. Give it a few minutes, then ask in the <a href="https://discord.gg/RdwtR7HQbr" target="_blank" rel="noopener noreferrer">support server</a> if it persists.',
      },
      {
        q: 'Is Dragon Bot affiliated with Supercell?',
        a: 'No. It is an independent fan-made tool. All Clash of Clans names, art and trademarks belong to Supercell.',
      },
      {
        q: 'I found a bug or have an idea.',
        a: 'Tell us in the support server or open an issue on <a href="https://github.com/Dragon-Bot-Dev/Dragon-Bot-2.0/issues" target="_blank" rel="noopener noreferrer">GitHub</a>.',
      },
    ],
  },
];

// A handful surfaced on the home page.
export const homeFaq: FaqItem[] = [
  faqGroups[1].items[0],
  faqGroups[2].items[0],
  faqGroups[3].items[2],
];
