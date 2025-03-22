import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Team = () => {
  const { t } = useTranslation();

  const team = [
    {
      name: 'John Smith',
      role: 'english_teacher',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      bio: 'john_bio'
    },
    {
      name: 'Anna Johnson',
      role: 'russian_teacher',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      bio: 'anna_bio'
    },
    {
      name: 'Michael Brown',
      role: 'math_teacher',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      bio: 'michael_bio'
    },
    // Add more team members as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 dark:text-white"
        >
          {t('our_team')}
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 mb-4">
                  {t(member.role)}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {t(member.bio)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;