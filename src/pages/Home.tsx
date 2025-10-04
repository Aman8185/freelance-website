import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCustomCursor } from '../context/CustomCursorContext';
import { ChartBarIcon, ChartPieIcon, RocketLaunchIcon, LightBulbIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';
import { FaCode, FaBullhorn, FaPalette } from 'react-icons/fa';

// Features section data
const features = [
  {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights through advanced analytics techniques.',
    icon: <ChartBarIcon className="w-6 h-6" />,
    delay: 0.1,
  },
  {
    title: 'Visualization',
    description: 'Create compelling visual narratives from complex datasets with interactive dashboards.',
    icon: <ChartPieIcon className="w-6 h-6" />,
    delay: 0.2,
  },
  {
    title: 'AI Integration',
    description: 'Harness the power of Ollama AI for predictive analytics and automated insights.',
    icon: <LightBulbIcon className="w-6 h-6" />,
    delay: 0.3,
  },
  {
    title: 'Custom Dashboards',
    description: 'Build tailored dashboarding solutions that meet your specific business requirements.',
    icon: <PresentationChartLineIcon className="w-6 h-6" />,
    delay: 0.4,
  },
  {
    title: 'Rapid Deployment',
    description: 'Get up and running quickly with our streamlined implementation process.',
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    delay: 0.5,
  },
];

// Stats section data
const stats = [
  { value: '98%', label: 'Client Satisfaction' },
  { value: '250+', label: 'Projects Completed' },
  { value: '15+', label: 'Years Experience' },
  { value: '40+', label: 'Data Specialists' },
];

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

const demos = [
  {
    title: 'Data Analytics',
    description: 'Explore our data analytics demos with interactive charts and insights.',
    image: 'https://via.placeholder.com/300x200',
    link: '/data-analytics-demos',
  },
  {
    title: 'Website Development',
    description: 'View our sample website layouts and UI designs.',
    image: 'https://via.placeholder.com/300x200',
    link: '/website-demos',
  },
  {
    title: 'Digital Marketing',
    description: 'Check out our sample campaign reports and ad creatives.',
    image: 'https://via.placeholder.com/300x200',
    link: '/marketing-demos',
  },
  {
    title: 'Graphic Design',
    description: 'Discover our logo samples and brand identity previews.',
    image: 'https://via.placeholder.com/300x200',
    link: '/design-demos',
  },
];

const Home = () => {
  const { setCursorType } = useCustomCursor();
  
  // Set page title
  useEffect(() => {
    document.title = 'TechGenieHub - Data Analytics & AI Insights';
  }, []);
  
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
              Your One-Stop Solution for Business Growth
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 dark:text-gray-300"
            >
              From data analytics and website development to digital marketing and graphic design, TechGenieHub delivers comprehensive solutions to elevate your business.
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
      
      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Data-Driven Solutions for Every Need
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 dark:text-gray-300"
            >
              Discover how our comprehensive suite of analytics services can transform your business operations.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.delay }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                <div className="mb-4 text-primary-600 dark:text-primary-400">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Featured Demo Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 dark:text-gray-300"
            >
              Click any project below to view a live demo dashboard with sample analytics.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'E-commerce Sales Dashboard',
                description: 'Track sales, revenue, and customer trends for a growing online store. See interactive charts and AI-powered insights.',
                color: 'from-blue-400 to-blue-600',
                link: '/dashboard/ecommerce',
              },
              {
                title: 'Marketing Campaign Analytics',
                description: 'Analyze campaign performance, traffic sources, and conversion rates. Explore how data drives smarter marketing decisions.',
                color: 'from-purple-400 to-purple-600',
                link: '/dashboard/marketing',
              },
              {
                title: 'Customer Segmentation Demo',
                description: 'Visualize customer segments, retention, and loyalty metrics. Discover actionable insights for business growth.',
                color: 'from-green-400 to-green-600',
                link: '/dashboard/customers',
              },
            ].map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(56,189,248,0.10)' }}
                className={`rounded-2xl p-8 shadow-lg bg-gradient-to-br ${project.color} text-white flex flex-col justify-between group transition-all duration-300 cursor-pointer`}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:underline">{project.title}</h3>
                  <p className="mb-8 text-white/90">{project.description}</p>
                </div>
                <Link
                  to={project.link}
                  className="inline-block mt-auto px-6 py-2 bg-white text-primary-600 font-semibold rounded-md shadow hover:bg-primary-100 transition-colors"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  View Dashboard
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Demos Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Explore Our Service Demos
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 dark:text-gray-300"
            >
              Discover our sample projects and creative work.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demos.map((demo, idx) => (
              <motion.div
                key={demo.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(56,189,248,0.10)' }}
                className="rounded-2xl p-8 shadow-lg bg-white text-gray-900 flex flex-col justify-between group transition-all duration-300 cursor-pointer"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:underline">{demo.title}</h3>
                  <p className="mb-8 text-gray-600">{demo.description}</p>
                </div>
                <Link
                  to={demo.link}
                  className="inline-block mt-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition-colors"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  View Demo
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-primary-600 dark:bg-primary-900">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-primary-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-10 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Ready to Transform Your Data Strategy?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-primary-100 mb-8"
              >
                Let's turn your data challenges into opportunities together. Schedule a consultation today.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  to="/contact"
                  className="px-8 py-3 text-base font-medium bg-white text-primary-600 rounded-md hover:bg-gray-100 transition-colors"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home; 