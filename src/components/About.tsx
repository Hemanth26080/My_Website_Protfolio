import { GraduationCap, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-cream mb-12">{t('about_me')}</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            {t('introduction')}
          </p>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-blue-900 dark:text-cream" />
                <h3 className="text-xl font-semibold text-blue-900 dark:text-cream">{t('education')}</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold">{t('msc_title')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{t('college_duration')}</p>
                  <p className="text-gray-600 dark:text-gray-300">{t('coursework')}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-blue-900 dark:text-cream" />
                <h3 className="text-xl font-semibold text-blue-900 dark:text-cream">{t('experience')}</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold">{t('assistant_manager')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{t('bhavani_duration')}</p>
                  <p className="text-gray-600 dark:text-gray-300">{t('bhavani_description')}</p>
                </div>

                <div>
                  <h4 className="font-semibold">{t('analyst')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{t('capgemini_duration')}</p>
                  <p className="text-gray-600 dark:text-gray-300">{t('capgemini_description')}</p>
                </div>

                <div>
                  <h4 className="font-semibold">{t('apprentice')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{t('incois_duration')}</p>
                  <p className="text-gray-600 dark:text-gray-300">{t('incois_description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
