import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCustomCursor } from '../../context/CustomCursorContext';
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const { setCursorType } = useCustomCursor();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Analytics', path: '/analytics' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '#' },
        { name: 'Case Studies', path: '#' },
        { name: 'Documentation', path: '#' },
        { name: 'FAQ', path: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms of Service', path: '#' },
        { name: 'Cookie Policy', path: '#' },
      ],
    },
  ];
  
  const socialLinks = [
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaLinkedinIn />, url: '#', label: 'LinkedIn' },
    { icon: <FaGithub />, url: '#', label: 'GitHub' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block mb-4"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
            >
              <span className="text-2xl font-bold">
                <span className="text-primary-600 dark:text-primary-400">Tech</span>
                <span className="text-secondary-600 dark:text-secondary-400">GenieHub</span>
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Your premium data analytics and AI-powered insights partner. Transform raw data into actionable business intelligence with our cutting-edge services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                  aria-label={item.label}
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                      onMouseEnter={() => setCursorType('hover')}
                      onMouseLeave={() => setCursorType('default')}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} TechGenieHub. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Designed with ❤️ for better data insights
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 