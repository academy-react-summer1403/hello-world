import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Language files
import enTranslation from './enlang';
import faTranslation from './falang';

// Initialize i18n
i18n
  .use(LanguageDetector) // Detects user's language
  .use(initReactI18next)  // Passes i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      fa: { translation: faTranslation }, // Persian (Farsi) language
    },
    fallbackLng: 'fa', // Default language
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
