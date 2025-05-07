import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCustomCursor } from '../context/CustomCursorContext';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { Tab } from '@headlessui/react';
import {
  ArrowPathIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ClockIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';

// Dashboard data
const salesData = [
  { month: 'Jan', sales: 4000, target: 3800, prevYear: 3500 },
  { month: 'Feb', sales: 3200, target: 3500, prevYear: 3000 },
  { month: 'Mar', sales: 5200, target: 4500, prevYear: 4200 },
  { month: 'Apr', sales: 6000, target: 5000, prevYear: 4800 },
  { month: 'May', sales: 7200, target: 6000, prevYear: 5500 },
  { month: 'Jun', sales: 8000, target: 6500, prevYear: 6000 },
  { month: 'Jul', sales: 7800, target: 7000, prevYear: 6500 },
  { month: 'Aug', sales: 8200, target: 7500, prevYear: 7000 },
  { month: 'Sep', sales: 9000, target: 8000, prevYear: 7500 },
  { month: 'Oct', sales: 9500, target: 8500, prevYear: 8000 },
  { month: 'Nov', sales: 8800, target: 9000, prevYear: 8500 },
  { month: 'Dec', sales: 10200, target: 9500, prevYear: 9000 },
];

const trafficData = [
  { source: 'Direct', value: 1200 },
  { source: 'Organic Search', value: 2500 },
  { source: 'Social Media', value: 1800 },
  { source: 'Referral', value: 1000 },
  { source: 'Email', value: 800 },
];

const conversionData = [
  { channel: 'Email', conversionRate: 4.5 },
  { channel: 'Social', conversionRate: 3.2 },
  { channel: 'Search', conversionRate: 5.7 },
  { channel: 'Direct', conversionRate: 6.1 },
  { channel: 'Referral', conversionRate: 4.9 },
];

const customerData = [
  { segment: 'New', count: 2500 },
  { segment: 'Returning', count: 4500 },
  { segment: 'Loyal', count: 3000 },
  { segment: 'VIP', count: 1000 },
];

const colors = [
  '#0284c7', // primary-600
  '#7c3aed', // secondary-600
  '#16a34a', // green-600
  '#ea580c', // orange-600
  '#d946ef', // fuchsia-600
];

// Insights from "AI"
const aiInsights = [
  {
    title: 'Sales Performance',
    content: 'Sales have exceeded targets for the last 7 consecutive months. The most significant growth is seen in September with 12.5% above target. Consider allocating more resources to Q4 strategies to maintain momentum.',
    icon: <DocumentTextIcon className="w-6 h-6" />,
  },
  {
    title: 'Traffic Analysis',
    content: 'Organic search drives 34% of total traffic but has a lower conversion rate compared to direct traffic. Focus on improving landing page experiences to increase conversions from search traffic.',
    icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
  },
  {
    title: 'Conversion Optimization',
    content: "Direct channel has the highest conversion rate at 6.1%. Email campaigns show strong potential with 4.5% conversion. Consider A/B testing email content to further improve this channel's performance.",
    icon: <AdjustmentsHorizontalIcon className="w-6 h-6" />,
  },
  {
    title: 'Customer Segmentation',
    content: 'Returning customers make up 41% of your customer base. This segment has grown by 15% in the last quarter, indicating strong retention strategies. VIP customers, while only 9% of total, drive 30% of revenue.',
    icon: <ClockIcon className="w-6 h-6" />,
  },
];

const chartTabs = [
  { name: 'Sales Trends', panel: 'salesPanel' },
  { name: 'Traffic Sources', panel: 'trafficPanel' },
  { name: 'Conversion Rates', panel: 'conversionPanel' },
  { name: 'Customer Segments', panel: 'customerPanel' },
];

const Analytics = () => {
  const { setCursorType } = useCustomCursor();
  const [isLoading, setIsLoading] = useState(true);
  const [showInsights, setShowInsights] = useState(false);

  // Set page title
  useEffect(() => {
    document.title = 'Analytics Dashboard | TrendMetrics';
    
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Simulate AI insights loading
  const handleGenerateInsights = () => {
    setShowInsights(false);
    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsLoading(false);
      setShowInsights(true);
    }, 2000);
  };

  return (
    <>
      {/* Dashboard Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Interactive Analytics Dashboard
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 dark:text-gray-300"
            >
              Explore our data visualization capabilities with this sample dashboard powered by Ollama AI for intelligent insights.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Dashboard Metrics */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Metric Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Total Revenue
              </h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">$2.4M</p>
              <p className="text-sm font-medium text-green-600">+12.5% from last year</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Conversion Rate
              </h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">4.8%</p>
              <p className="text-sm font-medium text-green-600">+0.6% from last month</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Avg. Order Value
              </h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">$128</p>
              <p className="text-sm font-medium text-green-600">+5.3% from last quarter</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Customer Retention
              </h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">76%</p>
              <p className="text-sm font-medium text-green-600">+2.1% from last year</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Charts */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-10"
          >
            <Tab.Group>
              <div className="flex flex-col md:flex-row">
                <Tab.List className="flex flex-row md:flex-col p-4 space-x-2 md:space-x-0 md:space-y-2 md:w-64 bg-gray-100 dark:bg-gray-700">
                  {chartTabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        `w-full py-3 px-4 text-sm font-medium rounded-md focus:outline-none ${
                          selected
                            ? 'bg-primary-600 text-white'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`
                      }
                      onMouseEnter={() => setCursorType('hover')}
                      onMouseLeave={() => setCursorType('default')}
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="flex-1 p-6">
                  {/* Sales Trend Panel */}
                  <Tab.Panel>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Monthly Sales Performance
                    </h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="sales"
                            stroke="#0284c7"
                            strokeWidth={2}
                            activeDot={{ r: 8 }}
                          />
                          <Line type="monotone" dataKey="target" stroke="#7c3aed" strokeWidth={2} />
                          <Line
                            type="monotone"
                            dataKey="prevYear"
                            stroke="#94a3b8"
                            strokeDasharray="5 5"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </Tab.Panel>

                  {/* Traffic Sources Panel */}
                  <Tab.Panel>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Website Traffic by Source
                    </h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={trafficData}
                            cx="50%"
                            cy="50%"
                            labelLine={true}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) =>
                              `${name}: ${(percent * 100).toFixed(0)}%`
                            }
                          >
                            {trafficData.map((_, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={colors[index % colors.length]}
                              />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </Tab.Panel>

                  {/* Conversion Rates Panel */}
                  <Tab.Panel>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Conversion Rates by Channel
                    </h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={conversionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="channel" />
                          <YAxis label={{ value: 'Conversion Rate (%)', angle: -90, position: 'insideLeft' }} />
                          <Tooltip formatter={(value) => [`${value}%`, 'Conversion Rate']} />
                          <Bar dataKey="conversionRate" fill="#0284c7">
                            {conversionData.map((_, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={colors[index % colors.length]}
                              />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </Tab.Panel>

                  {/* Customer Segments Panel */}
                  <Tab.Panel>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Customer Segmentation
                    </h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={customerData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="segment" />
                          <YAxis />
                          <Tooltip />
                          <Area
                            type="monotone"
                            dataKey="count"
                            stroke="#7c3aed"
                            fill="#7c3aed50"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </div>
            </Tab.Group>
          </motion.div>

          {/* AI Insights Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Ollama AI-Powered Insights
              </h2>
              <button
                onClick={handleGenerateInsights}
                className="flex items-center space-x-2 btn-primary px-4 py-2"
                disabled={isLoading}
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                {isLoading ? (
                  <>
                    <ArrowPathIcon className="h-5 w-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Generate Insights</span>
                  </>
                )}
              </button>
            </div>

            {showInsights ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {aiInsights.map((insight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                        {insight.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {insight.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">{insight.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {isLoading ? 'Analyzing data patterns...' : 'Click the button above to generate AI-powered insights from your dashboard data.'}
                </p>
                {!isLoading && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Our Ollama AI model will analyze your data and provide actionable recommendations.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Build Your Custom Dashboard
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 dark:text-gray-300 mb-8"
            >
              Ready for a tailored analytics solution for your business? Let's build a custom dashboard
              that delivers the insights you need.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button
                className="btn-primary px-8 py-3"
                onClick={() => (window.location.href = '/contact')}
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Analytics; 