import React from 'react';
import { motion } from 'framer-motion';

const WebsiteDemos: React.FC = () => {
  // Dummy data for website examples
  const websiteExamples = [
    {
      title: 'E-commerce Platform',
      description: 'A modern and responsive online store with intuitive navigation.',
      image: 'https://via.placeholder.com/600x400?text=E-commerce+Website',
    },
    {
      title: 'Corporate Business Site',
      description: 'Professional website showcasing services and company information.',
      image: 'https://via.placeholder.com/600x400?text=Corporate+Website',
    },
    {
      title: 'Portfolio Website',
      description: 'A dynamic portfolio site for showcasing creative work.',
      image: 'https://via.placeholder.com/600x400?text=Portfolio+Website',
    },
    {
      title: 'Landing Page',
      description: 'High-converting landing page design for marketing campaigns.',
      image: 'https://via.placeholder.com/600x400?text=Landing+Page',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-6"
        >
          Website Development Demos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-700 dark:text-gray-300 text-center mb-12"
        >
          Explore sample layouts, UI designs, and different types of websites we build.
        </motion.p>

        {/* Website Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websiteExamples.map((website, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img src={website.image} alt={website.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{website.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{website.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back to Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="/services"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Services
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default WebsiteDemos; 