// One place for links and facts that change. When Kepa leaves closed testing,
// set `stage` to 'live' and the calls to action switch to the Play Store.

export const site = {
  name: 'Kepa',
  title: 'Kepa | Subscription and debit order tracker',
  description:
    'Kepa tracks subscriptions, debit orders, renewals and warranties, and reminds you before money leaves your account. Free, private, no sign-up.',
  stage: 'testing' as 'testing' | 'live',
  playUrl: 'https://play.google.com/store/apps/details?id=app.kepa.kepa',
  testersUrl: 'https://groups.google.com/g/kepa-testers',
  email: 'getkepainc@gmail.com',
  maker: { name: 'Emmanuel Onwe', url: 'https://onweemmanuel.github.io/MyPortfolio/' },
  /** Shown under the screenshots and in the footer. */
  amountsNote:
    'Screenshots and examples show amounts in South African rand. They are test amounts, not what these services actually charge.',
};

export const primaryCta =
  site.stage === 'live'
    ? { label: 'Get it on Google Play', href: site.playUrl }
    : { label: 'Join the test', href: site.testersUrl };

export const nav = [
  { label: 'Features', href: '/#features' },
  { label: 'Privacy', href: '/#private' },
  { label: 'Support', href: '/support/' },
];

/** Mirrors lib/core/region/country.dart in the app. */
export const regions = [
  {
    name: 'Southern Africa',
    countries: [
      ['South Africa', 'ZAR'],
      ['Namibia', 'NAD'],
      ['Botswana', 'BWP'],
      ['Lesotho', 'LSL'],
      ['Eswatini', 'SZL'],
      ['Zimbabwe', 'USD'],
      ['Zambia', 'ZMW'],
      ['Malawi', 'MWK'],
      ['Mozambique', 'MZN'],
      ['Angola', 'AOA'],
    ],
  },
  {
    name: 'West Africa',
    countries: [
      ['Nigeria', 'NGN'],
      ['Ghana', 'GHS'],
      ["Côte d'Ivoire", 'XOF'],
      ['Senegal', 'XOF'],
      ['Mali', 'XOF'],
      ['Burkina Faso', 'XOF'],
      ['Niger', 'XOF'],
      ['Benin', 'XOF'],
      ['Togo', 'XOF'],
      ['Guinea-Bissau', 'XOF'],
      ['Guinea', 'GNF'],
      ['Sierra Leone', 'SLE'],
      ['Liberia', 'LRD'],
      ['The Gambia', 'GMD'],
      ['Cabo Verde', 'CVE'],
      ['Mauritania', 'MRU'],
    ],
  },
] as const;
