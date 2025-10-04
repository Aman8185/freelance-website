import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCustomCursor } from '../context/CustomCursorContext';
import {
  ArrowsPointingOutIcon,
  ChartBarIcon,
  ChartPieIcon,
  ClipboardDocumentCheckIcon,
  CloudArrowUpIcon,
  CogIcon,
  DocumentChartBarIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { FaCode, FaShoppingCart, FaRocket } from 'react-icons/fa';

// Define the workflow steps for data analytics
const workflowSteps = [
  {
    id: 'data-collection',
    title: 'Data Collection',
    description:
      'We gather data from multiple sources, including APIs, databases, web scraping, and file imports. Our streamlined collection process ensures data integrity from the start.',
    icon: <CloudArrowUpIcon className="w-8 h-8" />,
    details: [
      'API Integrations with major platforms',
      'Database connectors (SQL, NoSQL)',
      'Web scraping & data extraction',
      'File import (CSV, Excel, JSON)',
      'Real-time data streaming',
    ],
  },
  {
    id: 'data-cleaning',
    title: 'Data Cleaning',
    description:
      'We transform raw data into clean, consistent formats. Our data cleaning process removes duplicates, handles missing values, and standardizes formats for accurate analysis.',
    icon: <CogIcon className="w-8 h-8" />,
    details: [
      'Missing data imputation',
      'Outlier detection & handling',
      'Duplicate removal',
      'Data type conversions',
      'Standardization & normalization',
    ],
  },
  {
    id: 'exploratory-analysis',
    title: 'Exploratory Analysis',
    description:
      'We uncover patterns and relationships in your data. Our exploratory analysis provides initial insights and guides deeper analytical approaches.',
    icon: <MagnifyingGlassIcon className="w-8 h-8" />,
    details: [
      'Statistical summaries',
      'Correlation analysis',
      'Pattern recognition',
      'Time series decomposition',
      'Data visualization for exploration',
    ],
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics',
    description:
      'We build AI-powered models that forecast future trends and outcomes. Our predictive analytics leverages machine learning for accurate business predictions.',
    icon: <DocumentChartBarIcon className="w-8 h-8" />,
    details: [
      'Regression & classification models',
      'Time series forecasting',
      'Customer segmentation',
      'Recommendation systems',
      'Anomaly detection',
    ],
  },
  {
    id: 'dashboarding',
    title: 'Dashboarding & Reporting',
    description:
      'We transform insights into interactive dashboards and comprehensive reports. Our visualizations communicate findings clearly and drive informed decision-making.',
    icon: <ChartPieIcon className="w-8 h-8" />,
    details: [
      'Interactive dashboards',
      'Automated report generation',
      'KPI tracking & monitoring',
      'Custom visualization development',
      'Drill-down capabilities',
    ],
  },
];

// Service cards data
const services = [
  {
    title: 'Data Analytics Consulting',
    description: 'Strategic guidance on implementing data-driven decision making in your organization.',
    icon: <ChartBarIcon className="w-12 h-12" />,
  },
  {
    title: 'Custom Dashboard Development',
    description: 'Tailor-made interactive dashboards that visualize your most important metrics.',
    icon: <ClipboardDocumentCheckIcon className="w-12 h-12" />,
  },
  {
    title: 'AI-Powered Predictions',
    description: 'Machine learning models that forecast trends and provide valuable business insights.',
    icon: <ArrowsPointingOutIcon className="w-12 h-12" />,
  },
];

const websiteServices = [
  {
    title: 'Custom Website Development',
    description: 'We build tailored, responsive websites using cutting-edge technologies like React, Next.js, and Tailwind CSS. Our websites are fast, SEO-friendly, and optimized for all devices.',
    icon: <FaCode className="w-6 h-6" />,
  },
  {
    title: 'E-commerce Solutions',
    description: 'Launch your online store with our robust e-commerce platforms. We integrate secure payment gateways, inventory management, and analytics to drive sales.',
    icon: <FaShoppingCart className="w-6 h-6" />,
  },
  {
    title: 'Website Enhancement',
    description: 'Transform your existing website with modern design, improved performance, and advanced features. We ensure your site stays ahead of the competition.',
    icon: <FaRocket className="w-6 h-6" />,
  },
];

const dummyWebsites = [
  {
    name: 'E-commerce Store',
    image: 'https://via.placeholder.com/300x200',
    description: 'A fully responsive e-commerce platform with real-time inventory and analytics.',
  },
  {
    name: 'Corporate Website',
    image: 'https://via.placeholder.com/300x200',
    description: 'A sleek corporate website showcasing services, team, and client testimonials.',
  },
  {
    name: 'Portfolio Site',
    image: 'https://via.placeholder.com/300x200',
    description: 'A dynamic portfolio site for creatives, featuring animations and interactive elements.',
  },
];

const Services = () => {
  const { setCursorType } = useCustomCursor();
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Services | TechGenieHub';
  }, []);

  const toggleStep = (stepId: string) => {
    if (expandedStep === stepId) {
      setExpandedStep(null);
    } else {
      setExpandedStep(stepId);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our Data Analytics Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 dark:text-gray-300"
            >
              From raw data collection to AI-powered insights, we provide end-to-end analytics solutions
              tailored to your business needs.
            </motion.p>
          </div>
        </div>
      </section>

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
              Comprehensive Data Solutions
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our services are designed to unlock the full potential of your data assets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(56,189,248,0.15)' }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg border border-transparent hover:border-blue-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white dark:hover:from-primary-900/10 dark:hover:to-gray-800 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-6 shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Workflow */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Data Analytics Workflow
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our proven 5-step methodology transforms raw data into actionable business intelligence.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                  expandedStep === step.id ? 'ring-2 ring-primary-500' : ''
                }`}
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                <div
                  className="flex items-center p-6 cursor-pointer"
                  onClick={() => toggleStep(step.id)}
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mr-4">
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                      <div className="ml-4 text-primary-600 dark:text-primary-400">
                        {step.icon}
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">{step.description}</p>
                  </div>
                </div>

                {/* Expandable content */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedStep === step.id ? 'auto' : 0,
                    opacity: expandedStep === step.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden border-t border-gray-200 dark:border-gray-700"
                >
                  <div className="p-6 bg-gray-50 dark:bg-gray-800">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-4">Key Components:</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                          <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Building Services Section */}
      <div className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Website Building Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {websiteServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Our Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dummyWebsites.map((site, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
              >
                <img src={site.image} alt={site.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{site.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{site.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-10 md:p-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white mb-6"
            >
              Ready to Transform Your Data Strategy?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how our data analytics services can drive your business forward.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="px-8 py-3 bg-white text-primary-600 rounded-md hover:bg-gray-100 transition-colors font-medium"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
              onClick={() => (window.location.href = '/contact')}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services; 