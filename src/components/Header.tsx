import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Languages } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const { i18n } = useTranslation();
  const languages = ['en', 'fr', 'es', 'hi', 'de'];
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#home" className="text-2xl font-bold text-blue-900 dark:text-cream">
          Hemanth Portfolio
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
          
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          {languages.map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full ${language === lng ? 'font-bold' : ''}`}
            >
              {lng.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
