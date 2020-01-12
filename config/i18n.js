const website = require('./website');

module.exports = {
  sr: {
    default: true,
    path: 'sr',
    languageName: `SR`,
    locale: 'sr',
    htmlLang: 'sr',
    ogLang: 'sr',
    dateFormat: 'DD/MM/YYYY',
    siteTitle: website.siteTitle, // Manifest 'name'
    siteShortName: website.siteShortName, // Manifest 'short_name'. MUST be shorter than 12 char
    siteDescription: website.siteDescription, // Manifest 'description'
    startUrl: '/', // Manifest 'start_url'
    slugs: {
      o_nama: `o_nama`,
      clanovi_inicijative: `clanovi_inicijative`,
      saradnja: `saradnja`,
      objave: `objave`,
      kontakt: `kontakt`
    },
  },
  en: {
    path: 'en',
    languageName: `EN`,
    locale: 'en',
    htmlLang: 'en',
    ogLang: 'en_US',
    dateFormat: 'DD.MM.YYYY',
    siteTitle: `Gatsby EN`, // Manifest 'name'
    siteShortName: `Gatsby EN`, // Manifest 'short_name'
    siteDescription: `Gatsby-Starter für die einfache Lokalisierung mit Redux.`, // Manifest 'description'
    startUrl: '/en/', // Manifest 'start_url'
    slugs: {
      o_nama: `about`,
      clanovi_inicijative: `members`,
      saradnja: `work_with_us`,
      objave: `share`,
      kontakt: `contact`
    },
  },
};
