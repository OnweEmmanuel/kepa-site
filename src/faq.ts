// Questions shown on the home page (first four) and on /support.
// Answers follow the app's own wording and docs/privacy-policy.md.

export const faq: { q: string; a: string }[] = [
  {
    q: 'Is Kepa really free?',
    a: 'Yes. No ads, no subscription, no paid tier. If it helps you, you can leave an optional tip in Settings. A tip unlocks nothing; every feature is there for everyone.',
  },
  {
    q: 'Does Kepa connect to my bank?',
    a: "No. Kepa never asks for a bank login and can't see your account. You add things yourself, or import a statement file (PDF or CSV) that Kepa reads on your phone and doesn't keep.",
  },
  {
    q: 'What happens if I lose or change my phone?',
    a: 'Make a backup in Settings → Backup. It is one file, encrypted with a password you choose, that you can save on your phone or share to Drive, email or a chat with yourself. Restore it on the new phone. Android\'s phone-to-phone transfer also works.',
  },
  {
    q: 'Is there an iPhone version?',
    a: "Not yet. Kepa is Android first. The app is built to come to iPhone later; join the test group to hear when it does.",
  },
  {
    q: 'Does Kepa convert currencies?',
    a: "No. Each item keeps the currency it's billed in, and totals stay per currency. That way the numbers always match your statement.",
  },
  {
    q: 'How do I delete my data?',
    a: 'Delete any item in the app, or everything at once with Settings → Delete all my data. Uninstalling Kepa removes everything too. There is nothing on a server to delete, because there is no server.',
  },
];
