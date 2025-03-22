import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 dark:text-white"
        >
          {t('contact_title')}
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary-600" />
              <div>
                <h3 className="text-lg font-medium dark:text-white">{t('phone')}</h3>
                <p className="text-gray-600 dark:text-gray-300">+998 XX XXX XX XX</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary-600" />
              <div>
                <h3 className="text-lg font-medium dark:text-white">{t('email')}</h3>
                <p className="text-gray-600 dark:text-gray-300">info@stanford.edu.uz</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary-600" />
              <div>
                <h3 className="text-lg font-medium dark:text-white">{t('address')}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t('location')}</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md transition-colors"
              >
                {t('send_message')}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;