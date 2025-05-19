import { motion } from 'framer-motion';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { FaUserFriends, FaUserPlus, FaUserCheck, FaUserTimes } from 'react-icons/fa';

const customerGrowthData = [
  { month: 'Jan', customers: 1200 },
  { month: 'Feb', customers: 1350 },
  { month: 'Mar', customers: 1500 },
  { month: 'Apr', customers: 1700 },
  { month: 'May', customers: 1900 },
  { month: 'Jun', customers: 2100 },
  { month: 'Jul', customers: 2300 },
  { month: 'Aug', customers: 2500 },
  { month: 'Sep', customers: 2700 },
  { month: 'Oct', customers: 2900 },
  { month: 'Nov', customers: 3100 },
  { month: 'Dec', customers: 3400 },
];

const segmentData = [
  { name: 'Active', value: 2200 },
  { name: 'New', value: 800 },
  { name: 'Churned', value: 400 },
];

const COLORS = ['#4285F4', '#34A853', '#EA4335'];

const kpis = [
  { icon: <FaUserFriends className="w-6 h-6" />, label: 'Total Customers', value: '3,400', change: '+15%' },
  { icon: <FaUserPlus className="w-6 h-6" />, label: 'New This Month', value: '300', change: '+8%' },
  { icon: <FaUserCheck className="w-6 h-6" />, label: 'Active', value: '2,200', change: '+5%' },
  { icon: <FaUserTimes className="w-6 h-6" />, label: 'Churned', value: '400', change: '-2%' },
];

const insights = [
  'Customer base has grown 15% YoY, with a steady increase in new signups each month.',
  'Active customers represent 65% of the total base, indicating strong engagement.',
  'Churn rate has decreased by 2% compared to last quarter.',
  'Retention strategies are showing positive results in customer loyalty.',
];

function DashboardCustomers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center font-sans tracking-tight"
        >
          Customer Analytics Overview
        </motion.h1>
        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {kpis.map((kpi, idx) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="mb-2 text-blue-600 dark:text-blue-400">{kpi.icon}</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{kpi.value}</div>
              <div className="text-gray-500 dark:text-gray-300 text-sm">{kpi.label}</div>
              <div className={`text-xs mt-1 font-semibold ${kpi.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{kpi.change}</div>
            </motion.div>
          ))}
        </div>
        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white font-sans">Customer Growth (Monthly)</h2>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={customerGrowthData}>
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Legend />
                <Bar dataKey="customers" fill="#4285F4" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-700 flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white font-sans">Customer Segments</h2>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={segmentData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {segmentData.map((_, idx) => (
                    <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white font-sans">Key Insights</h2>
          <ul className="space-y-4">
            {insights.map((insight, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 mr-3"></span>
                <span className="text-gray-700 dark:text-gray-300">{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardCustomers;