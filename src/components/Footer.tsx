import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Stanford. {t('rights')}
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-600 dark:text-gray-300">
              {t('address')}: {t('location')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;