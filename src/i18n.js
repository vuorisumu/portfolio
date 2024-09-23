import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationFI from './locales/fi/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  fi: {
    translation: translationFI,
  },
};

i18n.use(LanguageDetector).init({
  supportedLngs: ['fi', 'en'],
})

i18n.use(initReactI18next).init({
  resources: resources,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  
});

export default i18n;