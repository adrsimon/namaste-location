import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import {Icon} from "astro-icon";

export const headerData = {
  links: [
    {
      text: 'Accueil',
      href: getPermalink(),
    },
    {
      text: 'Galerie',
      href: '#gallery',
    },
    {
      text: 'Détails',
      href: '#features',
    },
  ],
  actions: [
    { type: 'button', text: 'Contact', href: 'mailto:simonguillaume@rocketmail.com' }
  ],
};
  
export const footerData = {
  links: [
  ],
  secondaryLinks: [
    { text: 'Condition d\'utilisation', href: getPermalink('/terms') },
    { text: 'Confidentialité', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Mail', icon: 'tabler:at', href: 'mailto:simonguillaume@rocketmail.com' },
  ],
  footNote: `
    Fait par <a class="text-green-600 hover:underline dark:text-gray-200" href="https://github.com/adrsimon">Adrien Simon</a> à partir d'<a class="text-green-600 hover:underline dark:text-gray-200" href="https://astrowind.vercel.app/">Astrowind</a>.
  `,
};
