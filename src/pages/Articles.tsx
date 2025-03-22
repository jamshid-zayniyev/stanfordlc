import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Articles = () => {
  const { t } = useTranslation();

  const articles = [
    {
      title: 'article_1_title',
      content: 'article_1_content',
      date: '2024-03-15',
      author: 'John Smith',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80'
    },
    // Add more articles as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 dark:text-white"
        >
          {t('articles_title')}
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={article.image}
                alt={t(article.title)}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(article.date).toLocaleDateString()}
                  </time>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {article.author}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                  {t(article.title)}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t(article.content)}
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

export default Articles;