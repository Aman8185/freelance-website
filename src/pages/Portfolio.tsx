import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCustomCursor } from '../context/CustomCursorContext';
import { 
  ArrowTopRightOnSquareIcon,
  BuildingOffice2Icon,
  ShoppingBagIcon,
  CubeIcon,
  TruckIcon,
  BanknotesIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

// Project interface
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  icon: ReactNode;
}

// Filter categories
const categories = [
  'All',
  'Finance',
  'Healthcare',
  'E-commerce',
  'Manufacturing',
  'Real Estate',
  'Transportation',
];

// Sample portfolio projects
const projects: Project[] = [
  {
    id: 'finance-dashboard',
    title: 'Financial Analytics Dashboard',
    category: 'Finance',
    description: 'A comprehensive dashboard providing real-time insights for a leading financial institution.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    challenges: [
      'Processing large volumes of financial transaction data',
      'Creating secure, real-time visualizations',
      'Implementing complex financial calculations and forecasting',
    ],
    solutions: [
      'Custom ETL pipeline to process transactional data',
      'Secure, role-based access control system',
      'AI-powered forecast models using Ollama AI',
    ],
    results: [
      '42% reduction in reporting time',
      '27% increase in forecast accuracy',
      'Improved decision-making through real-time data access',
    ],
    icon: <BanknotesIcon className="h-6 w-6" />,
  },
  {
    id: 'healthcare-analytics',
    title: 'Healthcare Patient Analytics',
    category: 'Healthcare',
    description: 'Patient outcome prediction system for a network of hospitals to improve care quality.',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    challenges: [
      'HIPAA-compliant data handling',
      'Integration with existing healthcare systems',
      'Complex pattern recognition in patient data',
    ],
    solutions: [
      'Secure, anonymized data processing pipeline',
      'Custom API connectors for major healthcare systems',
      'Machine learning models trained on historical patient outcomes',
    ],
    results: [
      '31% improvement in early intervention rates',
      '18% reduction in hospital readmissions',
      'Customized care plans based on predictive insights',
    ],
    icon: <BeakerIcon className="h-6 w-6" />,
  },
  {
    id: 'ecommerce-customer',
    title: 'E-commerce Customer Insights',
    category: 'E-commerce',
    description: 'Customer behavior analysis platform for a major online retailer.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    challenges: [
      'Processing clickstream data from millions of users',
      'Creating actionable insights from complex behavioral patterns',
      'Real-time recommendations and personalization',
    ],
    solutions: [
      'Scalable data architecture for high-volume processing',
      'Custom segmentation algorithms based on behavioral data',
      'AI-powered recommendation engine using collaborative filtering',
    ],
    results: [
      '24% increase in average order value',
      '35% improvement in customer retention',
      'Highly personalized shopping experiences',
    ],
    icon: <ShoppingBagIcon className="h-6 w-6" />,
  },
  {
    id: 'manufacturing-optimization',
    title: 'Manufacturing Process Optimization',
    category: 'Manufacturing',
    description: 'IoT-based analytics solution for optimizing production efficiency.',
    image: 'https://images.unsplash.com/photo-1563470307451-626220895a5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2398&q=80',
    challenges: [
      'Integration with legacy manufacturing systems',
      'Real-time analysis of sensor data',
      'Predictive maintenance implementation',
    ],
    solutions: [
      'Custom IoT integration layer for legacy systems',
      'Edge computing for real-time sensor data processing',
      'Machine learning for failure prediction and maintenance scheduling',
    ],
    results: [
      '63% reduction in unplanned downtime',
      '17% increase in overall equipment effectiveness',
      'Annual maintenance cost reduction of $1.2M',
    ],
    icon: <CubeIcon className="h-6 w-6" />,
  },
  {
    id: 'real-estate-analytics',
    title: 'Real Estate Market Intelligence',
    category: 'Real Estate',
    description: 'Predictive analytics platform for property valuation and investment insights.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
    challenges: [
      'Aggregating data from disparate public and private sources',
      'Creating accurate property valuation models',
      'Visualizing complex geographical data',
    ],
    solutions: [
      'Automated data collection from multiple real estate databases',
      'Advanced regression models for property valuation',
      'Interactive map-based visualization system',
    ],
    results: [
      'Valuation accuracy within 4.2% of actual sale prices',
      '37% faster market analysis for investors',
      'Identification of emerging neighborhood trends',
    ],
    icon: <BuildingOffice2Icon className="h-6 w-6" />,
  },
  {
    id: 'logistics-route-optimization',
    title: 'Logistics Route Optimization',
    category: 'Transportation',
    description: 'AI-powered logistics optimization platform for a global shipping company.',
    image: 'https://images.unsplash.com/photo-1416949929422-a1d9c8fe84af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    challenges: [
      'Complex multi-variable route optimization',
      'Real-time adaptation to changing conditions',
      'Integration with existing fleet management systems',
    ],
    solutions: [
      'Advanced algorithms for multi-point route optimization',
      'Real-time traffic and weather data integration',
      'Custom API for seamless fleet management integration',
    ],
    results: [
      '22% reduction in fuel consumption',
      '18% increase in on-time deliveries',
      'Annual operational cost savings of $3.7M',
    ],
    icon: <TruckIcon className="h-6 w-6" />,
  },
];

const Portfolio = () => {
  const { setCursorType } = useCustomCursor();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Set page title
  useEffect(() => {
    document.title = 'Portfolio | TrendMetrics';
  }, []);

  // Filter projects when category changes
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <>
      {/* Portfolio Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Our Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 dark:text-gray-300"
            >
              Explore our successful data analytics and visualization projects across various industries.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: categories.indexOf(category) * 0.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setSelectedCategory(category)}
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white rounded-full p-2">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {project.category}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <button
                    className="text-primary-600 dark:text-primary-400 font-medium flex items-center text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    View Case Study
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70"
                onClick={() => setSelectedProject(null)}
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm font-medium rounded-full mb-2">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-8">{selectedProject.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Challenges
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Solutions
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.solutions.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-secondary-600 dark:bg-secondary-400 rounded-full mt-2 mr-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Results
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.results.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mt-2 mr-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  className="btn-primary px-6 py-2"
                  onClick={() => setSelectedProject(null)}
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

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
              Ready to Build Your Success Story?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 dark:text-gray-300 mb-8"
            >
              Join our portfolio of successful clients and transform your data into actionable insights.
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
                Contact Us Today
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio; 