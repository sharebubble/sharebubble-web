export const en = {
  lang: "en",
  hero: {
    badge: "Open Source & Decentralized",
    title: "Sharecycle",
    tagline: "Ownership is overrated. Access is everything.",
    desc: "The open-source, decentralized platform for sharing goods and services within your real-world community.",
    cta1: "Get Started",
    cta2: "Request a Hosted Instance",
    cta3: "View on GitHub",
  },
  ways: {
    title: "One Platform. Five Ways to Connect.",
    desc: "Why buy new when your neighbor has exactly what you need? Sharecycle turns your local area into a living library of resources.",
    sell: { title: "Sell", desc: "Pass on what you no longer need." },
    rent: {
      title: "Rent",
      desc: "Turn your idle tools or gear into extra income.",
    },
    give: {
      title: "Give Away",
      desc: "Declutter with a conscience and help a neighbor.",
    },
    borrow: {
      title: "Borrow",
      desc: "Save money and space by sourcing items temporarily.",
    },
    search: {
      title: "Search",
      desc: "Find local services—from dog walking to web design—provided by real people.",
    },
  },
  trust: {
    title: "Built on Trust, Not Algorithms",
    desc: "We believe the local economy should be powered by humans, not bots or data-miners.",
    verified: {
      title: "Verified Humans",
      desc: "Secure SSO-logins (Google, GitHub, Apple, etc.) ensure everyone is who they say they are.",
    },
    data: {
      title: "Data Sovereignty",
      desc: "Your data is stored on the platform, not sold to third-party advertisers.",
    },
    regional: {
      title: "Regional Focus",
      desc: "Algorithms don't decide what you see; your physical proximity does.",
    },
  },
  fediverse: {
    title: "The Power of the Fediverse",
    desc: 'Sharecycle isn\'t another "walled garden" app. We play well with others.',
    activitypub: {
      title: "ActivityPub Integration",
      desc: "As part of the Fediverse, your local instance can talk to others. Follow listings and interact across the decentralized web.",
    },
    caldav: {
      title: "CalDAV Booking",
      desc: "Sync rentals and service appointments directly to your favorite calendar (Apple, Google, Outlook, or Proton).",
    },
    chat: {
      title: "Chat Where You Are",
      desc: "Get instant notifications and manage inquiries through our bot-integrations for Telegram, Discord, Slack, or Matrix.",
    },
  },
  support: {
    title: "Support the Circular Revolution",
    desc: "Sharecycle is AGPL-licensed and community-funded. No venture capital, just community value.",
    communities: {
      label: "For Communities",
      title: "Request a Hosted Instance",
      desc: "Want to start a Sharecycle hub for your neighborhood, hobbyist club, or town? We'll handle the hosting, security, and updates so you can focus on building your community.",
      cta: "Get Started",
    },
    individuals: {
      label: "For Individuals",
      title: "The Supporter License",
      desc: "Self-hosting? You can still help us keep the code open and the features coming. A one-time payment grants you a lifetime Supporter License and our eternal gratitude.",
      cta: "Support Us",
    },
  },
  quote:
    "\"Sharecycle isn't just an app; it's a handshake in digital form. It's about knowing your neighbor and keeping resources within the community loop.\"",
  cta: {
    title: "Ready to close the loop?",
    demo: "Explore the Demo",
    fediverse: "Join the Fediverse",
    license: "Get Your Supporter License",
  },
  footer: {
    tagline: "AGPL-licensed · Community-funded · Made with care",
  },
  comingSoon: {
    title: "Coming Soon!",
    desc: "We're currently working hard to implement this functionality. It's not yet available, but stay tuned!",
    cta: "Got it",
  },
};

export type Translations = typeof en;
