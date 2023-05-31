import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en.json';
import translationES from './locales/es.json';
import translationFR from './locales/fr.json';
import translationDE from './locales/de.json';
import translationPL from './locales/pl.json';
import translationSG from './locales/sg.json';
import translationZH from './locales/zh.json';
import translationHI from './locales/hi.json';
import translationIT from './locales/it.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
      fr: {
        translation: translationFR,
      },
      de: {
        translation: translationDE,
      },
      pl: {
        translation: translationPL,
      },
      sg: {
        translation: translationSG,
      },
      zh: {
        translation: translationZH,
      },
      hi: {
        translation: translationHI,
      },
      it: {
        translation: translationIT,
      },
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
