import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { FaShoppingCart, FaChartLine, FaUsers, FaDollarSign } from 'react-icons/fa';

const salesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3200 },
  { month: 'Mar', sales: 5200 },
  { month: 'Apr', sales: 6000 },
  { month: 'May', sales: 7200 },
  { month: 'Jun', sales: 8000 },
  { month: 'Jul', sales: 7800 },
  { month: 'Aug', sales: 8200 },
  { month: 'Sep', sales: 9000 },
  { month: 'Oct', sales: 9500 },
  { month: 'Nov', sales: 8800 },
  { month: 'Dec', sales: 10200 },
];

const productData = [
  { name: 'Product A', sales: 2400 },
  { name: 'Product B', sales: 4567 },
  { name: 'Product C', sales: 1398 },
  { name: 'Product D', sales: 9800 },
  { name: 'Product E', sales: 3908 },
];

const customerSegments = [
  { name: 'New', value: 400 },
  { name: 'Returning', value: 300 },
  { name: 'VIP', value: 200 },
  { name: 'Churned', value: 100 },
];

const COLORS = ['#0ea5e9', '#8b5cf6', '#16a34a', '#f59e42'];

const kpis = [
  { icon: <FaDollarSign className="w-6 h-6" />, label: 'Revenue', value: '$1.2M', change: '+12%' },
  { icon: <FaShoppingCart className="w-6 h-6" />, label: 'Orders', value: '8,200', change: '+8%' },
  { icon: <FaUsers className="w-6 h-6" />, label: 'Customers', value: '5,400', change: '+6%' },
  { icon: <FaChartLine className="w-6 h-6" />, label: 'Conversion Rate', value: '4.8%', change: '+0.7%' },
];

const insights = [
  'Sales have grown steadily, peaking in December with a 15% increase over November.',
  'Product D is the top seller, accounting for 30% of total sales.',
  'VIP customers, though only 15% of the base, contribute 40% of revenue.',
  'Conversion rate is up 0.7% this quarter, driven by targeted campaigns.'
];

const DashboardEcommerce = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
      >
        E-commerce Sales Dashboard
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
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Sales Trends</h2>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={salesData}>
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#0ea5e9" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Top Products</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={productData}>
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Customer Segments</h2>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={customerSegments} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {customerSegments.map((_, idx) => (
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

export default DashboardEcommerce; 