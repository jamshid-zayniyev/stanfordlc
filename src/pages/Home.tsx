import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Users, BookOpen, Phone, ArrowRight, Clock, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();

  const features = [
    { icon: GraduationCap, title: 'courses', description: 'courses_desc' },
    { icon: Users, title: 'teachers', description: 'teachers_desc' },
    { icon: BookOpen, title: 'materials', description: 'materials_desc' },
    { icon: Phone, title: 'support', description: 'support_desc' },
  ];

  const stats = [
    { icon: Users, value: '1000+', label: 'students_taught' },
    { icon: Clock, value: '10+', label: 'years_experience' },
    { icon: Award, value: '95%', label: 'success_rate' },
    { icon: Target, value: '100%', label: 'satisfaction' },
  ];

  const courses = [
    {
      title: 'english',
      description: 'english_desc',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80',
      level: 'All Levels',
      duration: '3-6 months',
    },
    {
      title: 'russian',
      description: 'russian_desc',
      image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80',
      level: 'Beginner to Advanced',
      duration: '4-8 months',
    },
    {
      title: 'mathematics',
      description: 'mathematics_desc',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
      level: 'All Levels',
      duration: '3-6 months',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80")',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-primary-500">Stanford</span> Educational Center
            </h1>
            <p className="text-xl mb-8 text-gray-200">{t('hero_description')}</p>
            <div className="flex space-x-4">
              <Link
                to="/courses"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors inline-flex items-center group"
              >
                {t('get_started')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors backdrop-blur-sm"
              >
                {t('contact_us')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/20 mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{t(stat.label)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('why_choose_us')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('why_choose_us_desc')}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/20 mb-6">
                  <feature.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {t(feature.title)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t(feature.description)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('featured_courses')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('featured_courses_desc')}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={t(course.title)}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {t(course.title)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {t(course.description)}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{course.level}</span>
                    <span>{course.duration}</span>
                  </div>
                  <Link
                    to="/courses"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium group"
                  >
                    {t('learn_more')}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              {t('view_all_courses')}
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;