import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const News = () => {
  const { t } = useTranslation();

  const news = [
    {
      title: 'news_1_title',
      content: 'news_1_content',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80'
    },
    // Add more news items as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 dark:text-white"
        >
          {t('news_title')}
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={t(item.title)}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(item.date).toLocaleDateString()}
                </time>
                <h2 className="text-xl font-semibold mt-2 mb-4 dark:text-white">
                  {t(item.title)}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t(item.content)}
                </p>
                <button className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
                  {t('read_more')}
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;