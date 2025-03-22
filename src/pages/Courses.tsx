import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Courses = () => {
  const { t } = useTranslation();

  const courses = [
    {
      title: 'english',
      description: 'english_desc',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80',
    },
    {
      title: 'russian',
      description: 'russian_desc',
      image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80',
    },
    {
      title: 'mathematics',
      description: 'mathematics_desc',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 dark:text-white"
        >
          {t('our_courses')}
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={t(course.title)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {t(course.title)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t(course.description)}
                </p>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors w-full">
                  {t('learn_more')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses