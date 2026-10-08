// Single source for business details reused across pages.

export const site = {
  name: 'Papy Blank',
  description:
    'Nous transformons des produits cultivés dans la ferme familiale pour vous concocter des brunchs, déjeuners ou goûters.',
  ogImage: { src: '/og-image.png', width: 200, height: 147 },
};

export const contact = {
  phone: '+33 6 61 75 28 86',
  phoneHref: 'tel:+33661752886',
  email: 'papyblank@gmail.com',
  address: {
    street: "368 Rue de l'Église,",
    city: '59320 Erquinghem-le-Sec',
  },
  mapsUrl: 'https://g.co/kgs/gKsu4jN',
};

export const social = {
  facebook: 'https://www.facebook.com/profile.php?id=100093728487557',
  instagram: 'https://www.instagram.com/papyblank/',
};

// Online ordering (Obypay), shown in the "Commander" modal.
export const orderLinks = [
  {
    label: 'Plats Cuisinés',
    href: 'https://papy-blank-dejeuner.c.obypay.com/v-v5.39.7/i-iC92z2LnIo-1/onboarding',
  },
  {
    label: 'Traiteur/Brunch',
    href: 'https://papy-blank-brunch.c.obypay.com/v-v5.39.7/i-yYjsf6px2G-1/onboarding',
  },
];

// EmailJS public identifiers (designed to be exposed in the browser).
export const emailjsConfig = {
  serviceId: 'service_z16g8so',
  templateId: 'template_45kqmmg',
  publicKey: '85PoiLF_Ft0vRsclS',
};

export const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/le-concept', label: 'Le Concept', accent: true },
  { href: '/la-ferme', label: 'La Ferme' },
  { href: '/contact', label: 'Contact', accent: true },
];

// Legal identity of the publisher (mentions légales, politique de confidentialité).
export const company = {
  legalName: 'SARL Papy Blank',
  capital: '10 000 €',
  rcs: 'R.C.S. de Lille Métropole 984 555 904',
  siren: '984 555 904',
  vat: 'FR70984555904',
  director: 'Mathieu Blanquart',
  address: "368 rue de l'Église, 59320 Erquinghem-le-Sec",
  host: {
    name: 'Hostinger International Ltd',
    address: '61 Lordou Vironos Street, 6023 Larnaca, Chypre',
    contact: 'https://www.hostinger.fr/contact',
  },
};
