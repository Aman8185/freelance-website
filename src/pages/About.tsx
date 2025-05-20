import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaDatabase, FaRobot, FaLightbulb, FaCode, FaBullhorn, FaPalette } from 'react-icons/fa';
import { ChartBarIcon } from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const services = [
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics, beautiful visualizations, and AI-powered intelligence.',
      icon: <ChartBarIcon className="w-6 h-6" />,
    },
    {
      title: 'Website Development',
      description: 'Build modern, responsive websites using cutting-edge technologies like React, Next.js, and Tailwind CSS.',
      icon: <FaCode className="w-6 h-6" />,
    },
    {
      title: 'Digital Marketing',
      description: 'Drive growth with strategic digital marketing campaigns, SEO optimization, and social media management.',
      icon: <FaBullhorn className="w-6 h-6" />,
    },
    {
      title: 'Graphic Design',
      description: 'Create stunning visuals and branding materials that capture your audience and elevate your brand.',
      icon: <FaPalette className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Transforming Data into Business Success
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a data-driven freelancing agency that transforms complex data into clear, actionable insights. 
            Our expertise in data analytics and visualization helps businesses make smarter decisions and drive growth.
          </p>
        </motion.div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <FaChartLine className="w-10 h-10 text-blue-600 drop-shadow-md" />,
              title: "Data Analytics",
              description: "Transform raw data into meaningful insights that drive business decisions"
            },
            {
              icon: <FaDatabase className="w-10 h-10 text-blue-600 drop-shadow-md" />,
              title: "Data Cleaning",
              description: "Ensure your data is accurate, consistent, and ready for analysis"
            },
            {
              icon: <FaRobot className="w-10 h-10 text-blue-600 drop-shadow-md" />,
              title: "Automation",
              description: "Streamline your reporting processes with automated solutions"
            },
            {
              icon: <FaLightbulb className="w-10 h-10 text-blue-600 drop-shadow-md" />,
              title: "Smart Solutions",
              description: "Leverage data-driven insights to optimize your business performance"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(56,189,248,0.15)' }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-transparent hover:border-blue-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white transition-all duration-300 cursor-pointer group"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{item.title}</h3>
              <p className="text-gray-600 group-hover:text-blue-600 transition-colors">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-blue-50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded by Expereienced data analysts, TrendMetrics is dedicated to helping businesses of all sizes 
              harness the power of their data. We believe that every business, from early-stage startups to 
              established enterprises, deserves access to clear, actionable insights that drive growth.
            </p>
            <p className="text-lg text-gray-700">
              Our approach combines technical expertise with business acumen, ensuring that every solution 
              we deliver not only looks great but delivers real, measurable results for your business.
            </p>
          </div>
        </motion.div>

        {/* Services Overview */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions tailored to your business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Data?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's work together to turn your data into your competitive advantage.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 