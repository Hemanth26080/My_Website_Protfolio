import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const { t, i18n } = useTranslation();
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
          {t('Hemanth Portfolio')}
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="#home">{t('Home')}</Link>
          <Link href="#about">{t('About')}</Link>
          <Link href="#skills">{t('Skills')}</Link>
          <Link href="#projects">{t('Projects')}</Link>
          <Link href="#contact">{t('Contact')}</Link>
          
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <div className="relative">
            <select 
              onChange={(e) => changeLanguage(e.target.value)} 
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              value={language}
            >
              {languages.map((lng) => (
                <option key={lng} value={lng}>
                  {lng.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
}
