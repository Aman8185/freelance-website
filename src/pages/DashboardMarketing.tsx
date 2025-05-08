import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { FaBullhorn, FaChartBar, FaChartPie, FaPercentage } from 'react-icons/fa';

const channelData = [
  { channel: 'Email', conversions: 1200 },
  { channel: 'Social', conversions: 900 },
  { channel: 'Search', conversions: 1500 },
  { channel: 'Direct', conversions: 1100 },
  { channel: 'Referral', conversions: 700 },
];

const roiData = [
  { month: 'Jan', roi: 2.1 },
  { month: 'Feb', roi: 2.4 },
  { month: 'Mar', roi: 2.7 },
  { month: 'Apr', roi: 3.0 },
  { month: 'May', roi: 3.2 },
  { month: 'Jun', roi: 3.5 },
  { month: 'Jul', roi: 3.8 },
  { month: 'Aug', roi: 4.0 },
  { month: 'Sep', roi: 4.3 },
  { month: 'Oct', roi: 4.5 },
  { month: 'Nov', roi: 4.7 },
  { month: 'Dec', roi: 5.0 },
];

const trafficSources = [
  { name: 'Organic', value: 3200 },
  { name: 'Paid', value: 1800 },
  { name: 'Social', value: 1400 },
  { name: 'Referral', value: 900 },
];

const COLORS = ['#0ea5e9', '#8b5cf6', '#16a34a', '#f59e42'];

const kpis = [
  { icon: <FaBullhorn className="w-6 h-6" />, label: 'Campaigns', value: '24', change: '+20%' },
  { icon: <FaChartBar className="w-6 h-6" />, label: 'Leads', value: '6,800', change: '+15%' },
  { icon: <FaChartPie className="w-6 h-6" />, label: 'Reach', value: '120K', change: '+10%' },
  { icon: <FaPercentage className="w-6 h-6" />, label: 'Avg. ROI', value: '5.0x', change: '+0.8x' },
];

const insights = [
  'ROI has increased steadily, reaching 5x in December, driven by optimized ad spend.',
  'Organic traffic is the largest source, but paid campaigns have the highest conversion rate.',
  'Social campaigns generated 1,400 conversions, up 18% from last quarter.',
  'Referral traffic is underutilized; consider partnerships to boost this channel.'
];

const DashboardMarketing = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
      >
        Marketing Campaign Analytics
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
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Channel Performance</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={channelData}>
              <XAxis dataKey="channel" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Legend />
              <Bar dataKey="conversions" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Campaign ROI Over Time</h2>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={roiData}>
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="roi" stroke="#8b5cf6" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Traffic Sources</h2>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={trafficSources} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {trafficSources.map((_, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
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

export default DashboardMarketing; 