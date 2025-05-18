import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ArrowRight } from 'lucide-react';

import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import Card, { CardContent, CardImage } from '../components/ui/Card';
import ProductDetails from '../components/products/ProductDetails';

// Product data
const products = [
  {
    id: 1,
    name: "Organic Fertilizer - Premium Blend",
    description: "A balanced mix of organic materials that enhance soil structure and provide essential nutrients for plant growth. Our premium blend is specially formulated to improve soil fertility, increase crop yields, and promote sustainable agriculture practices.",
    image: "https://images.pexels.com/photos/4505161/pexels-photo-4505161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "fertilizers",
    price: 49.99,
    featured: true
  },
  {
    id: 2,
    name: "Smart Irrigation Controller",
    description: "A weather-based irrigation controller that automatically adjusts watering schedules based on local weather conditions. Features include smartphone connectivity, real-time monitoring, and advanced water-saving algorithms.",
    image: "https://images.pexels.com/photos/3464727/pexels-photo-3464727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "equipment",
    price: 199.99,
    featured: true
  },
  {
    id: 3,
    name: "Drought-Resistant Corn Seeds",
    description: "High-yield corn varieties specially bred to thrive in low-water conditions without compromising on output. These seeds are perfect for areas with limited rainfall or water restrictions.",
    image: "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "seeds",
    price: 89.99,
    featured: false
  },
  {
    id: 4,
    name: "Soil Health Testing Kit",
    description: "An easy-to-use kit for testing key soil parameters including pH, nitrogen, phosphorus, and potassium levels. Get professional-grade results in minutes to optimize your soil management strategy.",
    image: "https://images.pexels.com/photos/7728844/pexels-photo-7728844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "tools",
    price: 79.99,
    featured: false
  },
  {
    id: 5,
    name: "Biological Pest Control Agents",
    description: "Natural predators and parasites that target common crop pests without the need for chemical pesticides. Our biological control agents are safe, effective, and environmentally friendly.",
    image: "https://images.pexels.com/photos/4350616/pexels-photo-4350616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "pest-control",
    price: 59.99,
    featured: true
  },
  {
    id: 6,
    name: "Hydroponic Growing System",
    description: "Complete system for growing plants without soil, using mineral nutrient solutions in a water solvent. Includes all necessary components for successful hydroponic cultivation.",
    image: "https://images.pexels.com/photos/3735219/pexels-photo-3735219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "equipment",
    price: 349.99,
    featured: false
  },
  {
    id: 7,
    name: "Cover Crop Seed Mix",
    description: "A blend of legumes, grasses, and brassicas designed to improve soil health and prevent erosion between growing seasons. Perfect for sustainable farming practices.",
    image: "https://images.pexels.com/photos/4505170/pexels-photo-4505170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "seeds",
    price: 39.99,
    featured: false
  },
  {
    id: 8,
    name: "Compost Accelerator",
    description: "A microbial formula that speeds up the composting process, turning organic waste into nutrient-rich compost faster. Ideal for both small-scale and commercial composting operations.",
    image: "https://images.pexels.com/photos/4397885/pexels-photo-4397885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "fertilizers",
    price: 29.99,
    featured: false
  },
  {
    id: 9,
    name: "Precision Farming Drone",
    description: "Equipped with multispectral sensors to monitor crop health, identify issues, and optimize treatment applications. Includes advanced imaging technology and automated flight planning.",
    image: "https://images.pexels.com/photos/2252311/pexels-photo-2252311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "equipment",
    price: 1499.99,
    featured: true
  }
];

// Categories
const categories = [
  { id: "all", name: "All Products" },
  { id: "fertilizers", name: "Fertilizers" },
  { id: "seeds", name: "Seeds" },
  { id: "equipment", name: "Equipment" },
  { id: "tools", name: "Tools" },
  { id: "pest-control", name: "Pest Control" }
];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
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
              Our Products
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover our range of sustainable agricultural solutions designed to enhance productivity and promote environmental stewardship.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          {/* Filter Toggle for Mobile */}
          <div className="md:hidden mb-6">
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              icon={<Filter size={18} />}
              fullWidth
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category.id 
                          ? 'bg-primary-100 text-primary-700' 
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="md:w-3/4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold">
                  {selectedCategory === "all" 
                    ? "All Products" 
                    : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-gray-600">{filteredProducts.length} products</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card hoverable className="h-full">
                      <CardImage 
                        src={product.image} 
                        alt={product.name}
                        className="h-48"
                      />
                      <CardContent>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold">{product.name}</h3>
                          <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm font-medium">
                            Rs{product.price}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 capitalize">
                            {product.category.replace('-', ' ')}
                          </span>
                          <Button 
                            variant="text" 
                            icon={<ArrowRight size={16} />} 
                            iconPosition="right"
                            onClick={() => setSelectedProduct(product)}
                          >
                            Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Need Help Finding the Right Solution?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our agricultural experts are available to help you find the perfect products for your specific needs.
              </p>
              <Button 
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;