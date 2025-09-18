import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('INR'); // Default to INR

  // Dummy exchange rates relative to USD (assuming initial prices are in USD)
  const exchangeRates: { [key: string]: number } = {
    USD: 1, // Base currency
    INR: 83.5,
    EUR: 0.92,
    GBP: 0.79,
    CAD: 1.37,
    AUD: 1.52,
  };

  const currencySymbols: { [key: string]: string } = {
    USD: '$',
    INR: '₹',
    EUR: '€',
    GBP: '£',
    CAD: 'C$',
    AUD: 'A$',
  };

  // Function to convert price based on selected currency
  const convertPrice = (price: string): string => {
    if (price === 'Custom Quote') {
      return price;
    }
    // Assuming original prices are in USD (starts with $ and followed by number/range)
    const priceMatch = price.match(/^\$?(\d+(\.\d+)?)\+?(.*)$/);
    if (!priceMatch) {
      return price; // Return original if format is unexpected
    }
    const amount = parseFloat(priceMatch[1]);
    const suffix = priceMatch[3]; // Capture trailing text like + or /month

    const usdAmount = amount; // Assuming the number extracted is initially in USD
    const convertedAmount = usdAmount * exchangeRates[selectedCurrency];
    const symbol = currencySymbols[selectedCurrency];

    // Format the converted price
    if (selectedCurrency === 'INR') {
      return `${symbol}${convertedAmount.toFixed(0)}${suffix}`;
    } else {
      return `${symbol}${convertedAmount.toFixed(2)}${suffix}`;
    }
  };

  // Dummy pricing data for each service (prices are assumed to be in USD initially)
  const pricingData = [
    {
      service: 'Data Analytics',
      description: 'Tailored analytics solutions to unlock insights.',
      tiers: [
        { name: 'Basic', originalPrice: '$500/month', features: ['Standard Reporting', 'Basic Dashboards', 'Up to 2 Data Sources'] },
        { name: 'Pro', originalPrice: '$1500/month', features: ['Advanced Analytics', 'Interactive Dashboards', 'Up to 5 Data Sources', 'Monthly Consultation'] },
        { name: 'Enterprise', originalPrice: 'Custom Quote', features: ['Fully Customized Solution', 'Dedicated Support', 'Unlimited Data Sources', 'On-demand Analysis'] },
      ],
    },
    {
      service: 'Website Development',
      description: 'Building modern, responsive websites.',
      tiers: [
        { name: 'Startup', originalPrice: '$2500+', features: ['5 Page Website', 'Responsive Design', 'Basic SEO Optimization'] },
        { name: 'Business', originalPrice: '$6000+', features: ['10+ Page Website', 'Custom Design', 'Advanced SEO', 'CMS Integration', 'Basic E-commerce'] },
        { name: 'Custom', originalPrice: 'Custom Quote', features: ['Complex Functionality', 'Large Scale Projects', 'API Integrations', 'Ongoing Support'] },
      ],
    },
    {
      service: 'Digital Marketing',
      description: 'Driving online growth and visibility.',
      tiers: [
        { name: 'Starter SEO', originalPrice: '$400/month', features: ['Keyword Research', 'On-Page Optimization', 'Basic Reporting'] },
        { name: 'Advanced SEO & PPC', originalPrice: '$1200/month', features: ['Comprehensive SEO', 'PPC Campaign Management', 'Monthly Performance Reports'] },
        { name: 'Full Service', originalPrice: 'Custom Quote', features: ['SEO, PPC, Social Media', 'Content Marketing', 'Detailed Analytics & Strategy'] },
      ],
    },
    {
      service: 'Graphic Design',
      description: 'Creative visuals for impactful branding.',
      tiers: [
        { name: 'Logo Design', originalPrice: '$300+', features: ['3-5 Concepts', '2 Revisions', 'Final Files'] },
        { name: 'Brand Identity', originalPrice: '$800+', features: ['Logo Design Included', 'Color Palette', 'Typography Guidelines', 'Usage Guidelines'] },
        { name: 'Marketing Materials', originalPrice: 'Custom Quote', features: ['Brochures, Flyers, etc.', 'Social Media Graphics', 'Custom Illustrations'] },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-6"
        >
          Our Pricing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-700 dark:text-gray-300 text-center mb-8"
        >
          Find the perfect plan for your business needs.
        </motion.p>

        {/* Currency Selector */}
        <div className="flex justify-center mb-12">
          <label htmlFor="currency" className="sr-only">Select Currency</label>
          <select
            id="currency"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="block w-full md:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="INR">INR (₹)</option>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="CAD">CAD (C$)</option>
            <option value="AUD">AUD (A$)</option>
          </select>
        </div>

        {/* Pricing Sections */}
        <div className="space-y-16">
          {pricingData.map((serviceData, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{serviceData.service}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">{serviceData.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {serviceData.tiers.map((tier, tierIndex) => (
                  <div
                    key={tierIndex}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{tier.name}</h3>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">{convertPrice(tier.originalPrice)}</div>
                      <ul className="space-y-2 mb-8">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={tier.originalPrice === 'Custom Quote' ? '/contact' : '#'} // Link to contact for custom quote, otherwise dummy link
                      className="mt-auto inline-block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                    >
                      {tier.originalPrice === 'Custom Quote' ? 'Get a Quote' : 'Start Now'}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing; 