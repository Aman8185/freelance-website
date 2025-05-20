import React from 'react';
import { motion } from 'framer-motion';

const MarketingDemos: React.FC = () => {
  // Dummy data for marketing demos
  const marketingDemos = [
    {
      title: 'Sample Campaign Report',
      description: 'Overview of a successful digital marketing campaign, including key metrics and results.',
      image: 'https://via.placeholder.com/600x400?text=Campaign+Report',
    },
    {
      title: 'Sample Ad Creatives',
      description: 'Examples of visually appealing and effective ad designs for various platforms.',
      image: 'https://via.placeholder.com/600x400?text=Ad+Creatives',
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
          Digital Marketing Demos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-700 dark:text-gray-300 text-center mb-12"
        >
          Explore samples of our digital marketing work, including campaign reports and ad creatives.
        </motion.p>

        {/* Marketing Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {marketingDemos.map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img src={demo.image} alt={demo.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{demo.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{demo.description}</p>
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

export default MarketingDemos; 