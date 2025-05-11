import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, BarChart, Zap, Share2 } from 'lucide-react';

import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import Card, { CardContent, CardImage } from '../components/ui/Card';
import dinesh from './assets/dinesh.jpg';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Growing a <span className="text-primary-600">Sustainable</span> Future Together
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                AgroGo provides innovative agricultural solutions to help farmers maximize productivity while promoting sustainable practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  <Link to="/products">Explore Our Products</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img 
                src="https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Modern farming with technology" 
                className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[600px]"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <SectionTitle 
            title="Why Choose AgroGo" 
            subtitle="We combine cutting-edge technology with sustainable farming practices to help you achieve better results."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Leaf className="text-primary-600" size={42} />, 
                title: 'Sustainable Solutions', 
                description: 'Our products are designed with environmental sustainability in mind, helping reduce the ecological footprint of farming operations.' 
              },
              { 
                icon: <BarChart className="text-primary-600" size={42} />, 
                title: 'Increased Productivity', 
                description: 'Our innovative solutions help farmers increase their yield while optimizing resource usage for maximum efficiency.' 
              },
              { 
                icon: <Zap className="text-primary-600" size={42} />, 
                title: 'Advanced Technology', 
                description: 'We leverage the latest agricultural technology to provide smart, data-driven solutions for modern farming challenges.' 
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hoverable className="h-full">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Highlight Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Featured Products" 
            subtitle="Discover our most popular agricultural solutions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.pexels.com/photos/5273044/pexels-photo-5273044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Organic Fertilizers",
                description: "Eco-friendly fertilizers that improve soil health and crop yield without harmful chemicals."
              },
              {
                image: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Smart Irrigation Systems",
                description: "Water-efficient irrigation solutions that optimize water usage based on soil conditions."
              },
              {
                image: "https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "Seed Varieties",
                description: "High-yield, disease-resistant seed varieties for various climate conditions."
              }
            ].map((product, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hoverable className="h-full">
                  <CardImage src={product.image} alt={product.title} className="h-60" />
                  <CardContent>
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Button variant="text" icon={<ArrowRight size={16} />} iconPosition="right">
                      <Link to="/products">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="primary" icon={<ArrowRight size={18} />} iconPosition="right">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container mx-auto">
          <SectionTitle 
            title="What Our Customers Say" 
            subtitle="Hear from farmers who have transformed their operations with AgroGo"
            centered
            className="text-white"
          />
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
              <Share2 size={40} className="text-primary-500 opacity-40" />
            </div>
            
            <div className="bg-primary-800 p-8 md:p-12 rounded-lg shadow-lg relative z-10">
              <p className="text-xl md:text-2xl italic mb-8">
                "Implementing AgroGo's smart irrigation system has reduced our water usage by 40% while improving our crop yield. Their customer support team has been exceptional in helping us optimize the system for our specific needs."
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={dinesh} 
                    alt="Dinesh Sandaruwan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Dinesh Sandaruwan</h4>
                  <p className="text-primary-300">Walasmulla, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="bg-accent-50 border border-accent-200 rounded-lg p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Agricultural Operations?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Contact our team of agricultural experts today to discover how AgroGo's solutions can help you increase productivity while promoting sustainability.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link to="/products">Explore Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;