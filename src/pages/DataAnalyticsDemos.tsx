import React from 'react';
import { motion } from 'framer-motion';

const DataAnalyticsDemos: React.FC = () => {
  // Dummy data for KPI cards
  const kpiCards = [
    { title: 'Total Revenue', value: '$1.2M', change: '+12%', period: 'vs Last Month' },
    { title: 'New Customers', value: '850', change: '+8%', period: 'vs Last Month' },
    { title: 'Website Traffic', value: '55k', change: '+15%', period: 'vs Last Month' },
    { title: 'Conversion Rate', value: '3.5%', change: '+0.5pp', period: 'vs Last Month' },
  ];

  // Dummy data for charts (using placeholder images)
  const charts = [
    { title: 'Monthly Revenue Trend', image: 'https://via.placeholder.com/600x300?text=Monthly+Revenue+Chart' },
    { title: 'Customer Acquisition by Channel', image: 'https://via.placeholder.com/600x300?text=Acquisition+Chart' },
    { title: 'Geographical Sales Distribution', image: 'https://via.placeholder.com/600x300?text=Geo+Sales+Map' },
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
          Data Analytics Demos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-700 dark:text-gray-300 text-center mb-12"
        >
          Explore interactive dashboards and reports showcasing the power of data-driven insights.
        </motion.p>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {kpiCards.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"
            >
              <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">{kpi.title}</h3>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{kpi.value}</div>
              <div className={`text-sm font-medium ${kpi.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {kpi.change} {kpi.period}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sample Charts */}
        <div className="space-y-12">
          {charts.map((chart, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{chart.title}</h3>
              <img src={chart.image} alt={chart.title} className="w-full h-auto rounded-md" />
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

export default DataAnalyticsDemos; 