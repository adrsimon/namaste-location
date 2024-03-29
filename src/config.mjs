import defaultImage from './assets/images/hero.png';

const CONFIG = {
  name: 'Namaste',

  origin: 'https://namaste-location.vercel.app',
  basePathname: '/',
  trailingSlash: false,

  title: 'Namaste - Location de Charme à Sévrier',
  description:
    'Namaste - Appartement disponible en location saisonnière à Sévrier, à 2 pas d\'Annecy, de son lac magnifique, et de ses montagnes à couper le souffle.',
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
  
  blog: {
    disabled: true,
  },
  
  mailing: {
    firstMail: 'simonguillaume@rocketmail.com',
    secondMail: 'epanchinae@gmail.com',
    subject: 'Namaste - Demande de Renseignements.',
    body: 'Insérez ici votre message.',
  }
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
export const MAILTO = 'mailto:' + CONFIG.mailing.firstMail + '?cc=' + CONFIG.mailing.secondMail + '&subject=' + CONFIG.mailing.subject + '&body=' + CONFIG.mailing.body;
