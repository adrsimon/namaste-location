import defaultImage from './assets/images/hero.png';

const CONFIG = {
  name: 'Namaste',

  origin: 'https://namaste-location.vercel.app',
  basePathname: '/',
  trailingSlash: false,

  title: 'Namaste - Location de Charme à Sévrier',
  description:
    'Appartement disponible en location saisonnière à Sévrier, à 2 pas d\'Annecy et de son lac magnifique.',
  defaultImage: defaultImage,

  defaultTheme: 'light', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'fr',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('fr', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false,
  googleSiteVerificationId: false,

  blog: {
    disabled: true,
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
