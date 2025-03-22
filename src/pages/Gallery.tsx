import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Gallery as PhotoSwipeGallery } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const Gallery = () => {
  const { t } = useTranslation();

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
      width: 1200,
      height: 800,
      title: 'gallery_1_title',
      description: 'gallery_1_desc'
    },
    // Add more images as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 dark:text-white"
        >
          {t('gallery_title')}
        </motion.h1>
        <PhotoSwipeGallery>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <img
                  src={image.src}
                  alt={t(image.title)}
                  className="w-full h-64 object-cover rounded-lg cursor-pointer transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity rounded-lg flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center p-4">
                    <h3 className="text-xl font-semibold mb-2">{t(image.title)}</h3>
                    <p>{t(image.description)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </PhotoSwipeGallery>
      </div>
    </div>
  );
};

export default Gallery;