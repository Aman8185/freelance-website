import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCustomCursor } from '../context/CustomCursorContext';
import { ChartBarIcon, ChartPieIcon, RocketLaunchIcon, LightBulbIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';

// Component for animating text
const AnimatedText = ({ text, className = '' }: { text: string; className?: string }) => {
  const words = text.split(' ');
  
  // Animation variants for the container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  
  // Animation variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

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

const Home = () => {
  const { setCursorType } = useCustomCursor();
  
  // Set page title
  useEffect(() => {
    document.title = 'TrendMetrics - Data Analytics & AI Insights';
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 z-0" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-primary-400/10 dark:bg-primary-400/5"
              initial={{
                x: Math.random() * 100 - 50 + '%',
                y: Math.random() * 100 - 50 + '%',
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: [
                  Math.random() * 100 - 50 + '%',
                  Math.random() * 100 - 50 + '%',
                  Math.random() * 100 - 50 + '%',
                ],
                y: [
                  Math.random() * 100 - 50 + '%',
                  Math.random() * 100 - 50 + '%',
                  Math.random() * 100 - 50 + '%',
                ],
              }}
              transition={{
                duration: 20 + index * 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                width: `${(index + 1) * 10}vw`,
                height: `${(index + 1) * 10}vw`,
                opacity: 0.3 - index * 0.03,
              }}
            />
          ))}
        </div>
        
        {/* Hero content */}
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm font-medium"
            >
              Transforming Data into Insights
            </motion.div>
            
            <AnimatedText
              text="Unlock the Power of Your Data with TrendMetrics"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-gray-700 dark:text-gray-300 mb-8"
            >
              We help businesses transform raw data into actionable insights through advanced analytics, 
              beautiful visualizations, and AI-powered intelligence.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                to="/services"
                className="btn-primary px-8 py-3 text-base font-medium"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 text-base font-medium border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center">
            <motion.div
              className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
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
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
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