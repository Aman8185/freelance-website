import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCustomCursor } from '../context/CustomCursorContext';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { submitContactForm } from '../firebase/contactService';

// Form field type
type FormField = {
  value: string;
  error: string;
  touched: boolean;
};

// Form state type
type FormState = {
  name: FormField;
  email: FormField;
  phone: FormField;
  company: FormField;
  message: FormField;
  service: FormField;
};

const Contact = () => {
  const { setCursorType } = useCustomCursor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Available services for dropdown
  const services = [
    'Data Analytics Consulting',
    'Custom Dashboard Development',
    'AI-Powered Predictions',
    'Data Cleaning & Preparation',
    'Other / Not Sure',
  ];
  
  // Initialize form state
  const [formState, setFormState] = useState<FormState>({
    name: { value: '', error: '', touched: false },
    email: { value: '', error: '', touched: false },
    phone: { value: '', error: '', touched: false },
    company: { value: '', error: '', touched: false },
    message: { value: '', error: '', touched: false },
    service: { value: '', error: '', touched: false },
  });
  
  // Set page title
  useEffect(() => {
    document.title = 'Contact Us | TrendMetrics';
  }, []);
  
  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: { 
        ...prev[name as keyof FormState], 
        value,
        touched: true,
        error: validateField(name as keyof FormState, value)
      }
    }));
  };
  
  // Validate a single field
  const validateField = (name: keyof FormState, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim() === '' ? 'Name is required' : '';
      case 'email':
        return !/^\S+@\S+\.\S+$/.test(value) 
          ? 'Please enter a valid email address' 
          : '';
      case 'message':
        return value.trim().length < 10 
          ? 'Message must be at least 10 characters' 
          : '';
      case 'service':
        return value === '' ? 'Please select a service' : '';
      default:
        return '';
    }
  };
  
  // Validate all fields
  const validateForm = (): boolean => {
    let isValid = true;
    const newFormState = { ...formState };
    
    (Object.keys(formState) as Array<keyof FormState>).forEach(key => {
      if (['name', 'email', 'message', 'service'].includes(key)) {
        const error = validateField(key, formState[key].value);
        newFormState[key] = { 
          ...newFormState[key], 
          error,
          touched: true 
        };
        if (error) isValid = false;
      }
    });
    
    setFormState(newFormState);
    return isValid;
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Extract form data
      const formData = {
        name: formState.name.value,
        email: formState.email.value,
        phone: formState.phone.value,
        company: formState.company.value,
        message: formState.message.value,
        service: formState.service.value
      };
      
      // Submit form data to Firebase
      const result = await submitContactForm(formData);
      
      if (result.success) {
        // Success state
        setSubmitSuccess(true);
        // Reset form
        setFormState({
          name: { value: '', error: '', touched: false },
          email: { value: '', error: '', touched: false },
          phone: { value: '', error: '', touched: false },
          company: { value: '', error: '', touched: false },
          message: { value: '', error: '', touched: false },
          service: { value: '', error: '', touched: false },
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Contact Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-700 dark:text-gray-300"
            >
              Have questions about our services? Ready to start a project? Reach out to us today.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                      <EnvelopeIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                      <a
                        href="mailto:info@trendmetrics.com"
                        className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                        onMouseEnter={() => setCursorType('hover')}
                        onMouseLeave={() => setCursorType('default')}
                      >
                        info@trendmetrics.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                      <PhoneIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                        onMouseEnter={() => setCursorType('hover')}
                        onMouseLeave={() => setCursorType('default')}
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                      <MapPinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Office</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        123 Analytics Drive<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM PST
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Saturday - Sunday:</span> Closed
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
              >
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      Your message has been received. We'll get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="btn-primary px-6 py-2"
                      onMouseEnter={() => setCursorType('hover')}
                      onMouseLeave={() => setCursorType('default')}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Send Us a Message
                    </h2>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Name Field */}
                        <div>
                          <label 
                            htmlFor="name" 
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name.value}
                            onChange={handleInputChange}
                            className={`input w-full ${
                              formState.name.touched && formState.name.error 
                                ? 'border-red-500 dark:border-red-500' 
                                : ''
                            }`}
                            onMouseEnter={() => setCursorType('hover')}
                            onMouseLeave={() => setCursorType('default')}
                          />
                          {formState.name.touched && formState.name.error && (
                            <p className="mt-1 text-sm text-red-500">{formState.name.error}</p>
                          )}
                        </div>
                        
                        {/* Email Field */}
                        <div>
                          <label 
                            htmlFor="email" 
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email.value}
                            onChange={handleInputChange}
                            className={`input w-full ${
                              formState.email.touched && formState.email.error 
                                ? 'border-red-500 dark:border-red-500' 
                                : ''
                            }`}
                            onMouseEnter={() => setCursorType('hover')}
                            onMouseLeave={() => setCursorType('default')}
                          />
                          {formState.email.touched && formState.email.error && (
                            <p className="mt-1 text-sm text-red-500">{formState.email.error}</p>
                          )}
                        </div>
                        
                        {/* Phone Field */}
                        <div>
                          <label 
                            htmlFor="phone" 
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formState.phone.value}
                            onChange={handleInputChange}
                            className="input w-full"
                            onMouseEnter={() => setCursorType('hover')}
                            onMouseLeave={() => setCursorType('default')}
                          />
                        </div>
                        
                        {/* Company Field */}
                        <div>
                          <label 
                            htmlFor="company" 
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formState.company.value}
                            onChange={handleInputChange}
                            className="input w-full"
                            onMouseEnter={() => setCursorType('hover')}
                            onMouseLeave={() => setCursorType('default')}
                          />
                        </div>
                        
                        {/* Service Selection */}
                        <div className="md:col-span-2">
                          <label 
                            htmlFor="service" 
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Service Interested In *
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formState.service.value}
                            onChange={handleInputChange}
                            className={`input w-full ${
                              formState.service.touched && formState.service.error 
                                ? 'border-red-500 dark:border-red-500' 
                                : ''
                            }`}
                            onMouseEnter={() => setCursorType('hover')}
                            onMouseLeave={() => setCursorType('default')}
                          >
                            <option value="">Select a service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                          {formState.service.touched && formState.service.error && (
                            <p className="mt-1 text-sm text-red-500">{formState.service.error}</p>
                          )}
                        </div>
                        
                        {/* Message Field */}
                        <div className="md:col-span-2">
                          <label 
                            htmlFor="message" 
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Message *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formState.message.value}
                            onChange={handleInputChange}
                            className={`input w-full ${
                              formState.message.touched && formState.message.error 
                                ? 'border-red-500 dark:border-red-500' 
                                : ''
                            }`}
                            onMouseEnter={() => setCursorType('hover')}
                            onMouseLeave={() => setCursorType('default')}
                          ></textarea>
                          {formState.message.touched && formState.message.error && (
                            <p className="mt-1 text-sm text-red-500">{formState.message.error}</p>
                          )}
                        </div>
                      </div>
                      
                      <button
                        type="submit"
                        className={`btn-primary px-8 py-3 w-full md:w-auto ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                        disabled={isSubmitting}
                        onMouseEnter={() => setCursorType('hover')}
                        onMouseLeave={() => setCursorType('default')}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 