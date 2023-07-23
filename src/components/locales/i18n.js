// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './en.json';
import ukTranslations from './uk.json';

const resources = {
  en: { translation: enTranslations },
  ua: { translation: ukTranslations },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Мова за замовчуванням
  keySeparator: false, // Вимкнення роздільника ключів у файлі локалізації (для простоти)
  interpolation: {
    escapeValue: false, // Вимкнення екранування значень (для простоти)
  },
});

export default i18n;
