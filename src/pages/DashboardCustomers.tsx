import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, BarChart, Bar, LineChart, Line, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { FaUserFriends, FaUserCheck, FaUserTimes, FaChartPie } from 'react-icons/fa';

const segmentData = [
  { name: 'New', value: 1200 },
  { name: 'Returning', value: 1800 },
  { name: 'Loyal', value: 900 },
  { name: 'VIP', value: 300 },
];

const retentionData = [
  { month: 'Jan', retained: 800 },
  { month: 'Feb', retained: 900 },
  { month: 'Mar', retained: 1100 },
  { month: 'Apr', retained: 1200 },
  { month: 'May', retained: 1300 },
  { month: 'Jun', retained: 1400 },
  { month: 'Jul', retained: 1500 },
  { month: 'Aug', retained: 1600 },
  { month: 'Sep', retained: 1700 },
  { month: 'Oct', retained: 1800 },
  { month: 'Nov', retained: 1900 },
  { month: 'Dec', retained: 2000 },
];

const churnData = [
  { month: 'Jan', churn: 120 },
  { month: 'Feb', churn: 110 },
  { month: 'Mar', churn: 100 },
  { month: 'Apr', churn: 90 },
  { month: 'May', churn: 80 },
  { month: 'Jun', churn: 70 },
  { month: 'Jul', churn: 60 },
  { month: 'Aug', churn: 50 },
  { month: 'Sep', churn: 40 },
  { month: 'Oct', churn: 30 },
  { month: 'Nov', churn: 20 },
  { month: 'Dec', churn: 10 },
];

const COLORS = ['#0ea5e9', '#8b5cf6', '#16a34a', '#f59e42'];

const kpis = [
  { icon: <FaUserFriends className="w-6 h-6" />, label: 'Total Customers', value: '4,200', change: '+9%' },
  { icon: <FaUserCheck className="w-6 h-6" />, label: 'Retention Rate', value: '87%', change: '+4%' },
  { icon: <FaUserTimes className="w-6 h-6" />, label: 'Churn Rate', value: '2.1%', change: '-0.5%' },
  { icon: <FaChartPie className="w-6 h-6" />, label: 'VIP Share', value: '7%', change: '+1%' },
];

const insights = [
  'Retention rate has improved by 4% this year, with loyal and VIP segments growing fastest.',
  'Churn rate is at a record low of 2.1%, thanks to improved onboarding and loyalty programs.',
  'VIP customers, while only 7% of the base, contribute 28% of total revenue.',
  'Focus on converting returning customers to loyal and VIP segments for higher lifetime value.'
];

const DashboardCustomers = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
      >
        Customer Segmentation Dashboard
      </motion.h1>
      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {kpis.map((kpi, idx) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition-shadow"
          >
            <div className="mb-2 text-primary-600 dark:text-primary-400">{kpi.icon}</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{kpi.value}</div>
            <div className="text-gray-500 dark:text-gray-300 text-sm">{kpi.label}</div>
            <div className="text-green-600 font-semibold text-xs mt-1">{kpi.change}</div>
          </motion.div>
        ))}
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Customer Segments</h2>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={segmentData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {segmentData.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Retention Over Time</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={retentionData}>
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Legend />
              <Bar dataKey="retained" fill="#16a34a" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Churn Rate Over Time</h2>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={churnData}>
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="churn" stroke="#f59e42" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Business Insights</h2>
          <ul className="space-y-4">
            {insights.map((insight, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 mt-2 rounded-full bg-primary-600 mr-3"></span>
                <span className="text-gray-700 dark:text-gray-300">{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardCustomers; 