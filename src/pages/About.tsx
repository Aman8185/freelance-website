import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaDatabase, FaRobot, FaLightbulb } from 'react-icons/fa';

const About: React.FC = () => {
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
              icon: <FaChartLine className="w-8 h-8 text-blue-600" />,
              title: "Data Analytics",
              description: "Transform raw data into meaningful insights that drive business decisions"
            },
            {
              icon: <FaDatabase className="w-8 h-8 text-blue-600" />,
              title: "Data Cleaning",
              description: "Ensure your data is accurate, consistent, and ready for analysis"
            },
            {
              icon: <FaRobot className="w-8 h-8 text-blue-600" />,
              title: "Automation",
              description: "Streamline your reporting processes with automated solutions"
            },
            {
              icon: <FaLightbulb className="w-8 h-8 text-blue-600" />,
              title: "Smart Solutions",
              description: "Leverage data-driven insights to optimize your business performance"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
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