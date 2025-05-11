import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';

const Contact: React.FC = () => {
  // Replace with your Formspree form ID
  const [state, handleSubmit] = useForm("xzbndvod");
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have questions or need more information? We're here to help!
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <MapPin size={24} className="text-primary-600" />,
                title: "Visit Us",
                details: ["AgroGo (pvt) Ltd", "Walasmulla", "Sri Lanka"]
              },
              {
                icon: <Phone size={24} className="text-primary-600" />,
                title: "Call Us",
                details: ["Main: +94713357493", "Support: +94713357493", "Mon-Fri, 9am-5pm IST"]
              },
              {
                icon: <Mail size={24} className="text-primary-600" />,
                title: "Email Us",
                details: ["agrogo@gmail.com"]
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <div className="text-gray-600">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="mb-1">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <SectionTitle 
                  title="Send Us a Message" 
                  subtitle="We'll get back to you as soon as possible"
                />
                
                {state.succeeded ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                      <Check size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-green-800">Message Sent!</h3>
                    <p className="text-green-700">
                      Thank you for contacting us. We'll respond to your inquiry as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="primary" 
                      disabled={state.submitting}
                      icon={<Send size={16} />}
                      iconPosition="right"
                      fullWidth
                    >
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
            
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-lg overflow-hidden shadow-lg h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31735.021543689436!2d80.67123396520469!3d6.147124755746179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae151de7f163239%3A0x2ad4c9f9308eeb61!2sWalasmulla!5e0!3m2!1sen!2slk!4v1746951415060!5m2!1sen!2slk"
                  className="w-full h-full min-h-[500px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AgroGo Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our products and services"
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What areas do you provide services to?",
                answer: "We provide our agricultural solutions to farmers and agricultural businesses across the United States. For international inquiries, please contact our sales team directly."
              },
              {
                question: "Do you offer consultations for farm-specific needs?",
                answer: "Yes, we offer personalized consultations to assess your specific agricultural needs and recommend tailored solutions. You can schedule a consultation through our contact form or by calling our customer service."
              },
              {
                question: "What is your return policy for products?",
                answer: "We offer a 30-day satisfaction guarantee on most of our products. If you're not completely satisfied, you can return the product for a full refund or exchange. Some restrictions apply for certain categories of products."
              },
              {
                question: "Do you offer bulk pricing for large orders?",
                answer: "Yes, we offer special pricing for bulk orders. Please contact our sales team to discuss your specific requirements and to receive a customized quote."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <details className="border border-gray-200 rounded-lg">
                  <summary className="font-semibold p-4 cursor-pointer">
                    {item.question}
                  </summary>
                  <div className="p-4 pt-0">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;