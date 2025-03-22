import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    { question: 'faq_1_q', answer: 'faq_1_a' },
    { question: 'faq_2_q', answer: 'faq_2_a' },
    { question: 'faq_3_q', answer: 'faq_3_a' },
    { question: 'faq_4_q', answer: 'faq_4_a' },
    // Add more FAQs as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 dark:text-white"
        >
          {t('faq_title')}
        </motion.h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <span className="font-medium dark:text-white">{t(faq.question)}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="text-gray-500 dark:text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-600 dark:text-gray-300">{t(faq.answer)}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;