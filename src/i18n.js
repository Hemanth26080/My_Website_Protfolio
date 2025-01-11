
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to Hemanth's Portfolio"
    }
  },
  fr: {
    translation: {
      "welcome": "Bienvenue dans le portfolio de Hemanth"
    }
  },
  es: {
    translation: {
      "welcome": "Bienvenido al portafolio de Hemanth"
    }
  },
  hi: {
    translation: {
      "welcome": "हेमंत का पोर्टफोलियो में आपका स्वागत है"
    }
  },
  de: {
    translation: {
      "welcome": "Willkommen in Hemanths Portfolio"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
