// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json'; // Import English translations
import arTranslation from './locales/ar.json'; // Import Arabic translations

// Define translations for different languages
const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};

// Initialize i18n
i18n.use(initReactI18next).init({
  resources,
  lng: 'ar', // Default language
  fallbackLng: 'ar', // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
