
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
const resources = {
  en: {
    translation: {
      "about_me": "About Me",
      "introduction": "Hi, I'm Hemanth Ponugothi, a student specializing in cloud computing and data security. I'm passionate about developing innovative tech solutions that create a positive impact, from hardware to software development.",
      "education": "Education",
      "msc_title": "Master of Science in Cloudification and Data Security",
      "college_duration": "Top Tech College | 2024 - 2026",
      "coursework": "Coursework includes Cloud Computing, Cybersecurity and data protection. Focused on designing secure, scalable systems.",
      "experience": "Experience",
      "assistant_manager": "Assistant Manager",
      "bhavani_duration": "Bhavani Boutique | 2022 - 2024",
      "bhavani_description": "Led process improvement initiatives while managing operations, vendor relationships, and customer service excellence.",
      "analyst": "Analyst (A4)",
      "capgemini_duration": "Capgemini Technology Services India Ltd | 2022",
      "capgemini_description": "Participated in digital transformation projects using mainframe systems and front-end technologies.",
      "apprentice": "Apprentice",
      "incois_duration": "Indian National Centre for Ocean Information Services | 2018 - 2019",
      "incois_description": "Analyzed oceanographic data using satellite technology and contributed to research initiatives."
    }
  },
   fr: {
    translation: {
          {
      "about_me": "À propos de moi",
      "introduction": "Bonjour, je m'appelle Hemanth Ponugothi, un étudiant spécialisé en cloud computing et sécurité des données. Je suis passionné par le développement de solutions technologiques innovantes qui ont un impact positif, allant du matériel au développement logiciel.",
      "education": "Éducation",
      "msc_title": "Master en Cloudification et Sécurité des Données",
      "college_duration": "Top Tech College | 2024 - 2026",
      "coursework": "Cours incluant Cloud Computing, Cybersécurité et protection des données. Axé sur la conception de systèmes sécurisés et évolutifs.",
      "experience": "Expérience",
      "assistant_manager": "Assistant Manager",
      "bhavani_duration": "Bhavani Boutique | 2022 - 2024",
      "bhavani_description": "Dirigé des initiatives d'amélioration des processus tout en gérant les opérations, les relations avec les fournisseurs et l'excellence du service client.",
      "analyst": "Analyste (A4)",
      "capgemini_duration": "Capgemini Technology Services India Ltd | 2022",
      "capgemini_description": "Participé à des projets de transformation numérique utilisant des systèmes mainframe et des technologies front-end.",
      "apprentice": "Apprenti",
      "incois_duration": "Centre National Indien pour les Services d'Information Océanique | 2018 - 2019",
      "incois_description": "Analysé des données océanographiques à l'aide de la technologie satellite et contribué à des initiatives de recherche."
    }

    }
  },
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
