/* eslint-disable no-nested-ternary */

// eslint-disable-next-line import/prefer-default-export
export const getLocaleCopy = (copy, lang) =>
  lang === 'sr' ? copy.sr : lang === 'en' ? copy.en : null;
