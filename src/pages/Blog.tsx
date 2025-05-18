import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';

import SectionTitle from '../components/ui/SectionTitle';
import BlogCard from '../components/blog/BlogCard';
import { blogPosts } from '../data/blogPosts';
import { Link } from "react-router-dom";

// Categories
const categories = [
  "All",
  "Sustainability",
  "Water Management",
  "Soil Management",
  "Crop Science",
  "Technology",
  "Pest Management"
];

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);
  
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
              AgroGo Blog
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Insights, tips, and trends in modern agricultural practices and technology
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured Article
                </span>
                <h2 className="text-3xl font-bold mb-4">
                  {blogPosts[0].title}
                </h2>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar size={16} className="mr-1" />
                  <span className="mr-4">{blogPosts[0].date}</span>
                  <User size={16} className="mr-1" />
                  <span className="mr-4">{blogPosts[0].author.name}</span>
                  <Clock size={16} className="mr-1" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <p className="text-gray-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center text-primary-600 font-medium"
                >
                  <Link to={`/blog/${blogPosts[0].slug}`} className="flex items-center">
                    Read Article
                    <ChevronRight size={16} className="ml-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <SectionTitle 
            title="Latest Articles" 
            subtitle="Stay up to date with our latest insights and agricultural trends"
          />
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="sticky top-24">
                {/* Categories */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary-100 text-primary-700'
                            : 'hover:bg-gray-100'
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Newsletter Signup */}
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Stay updated with our latest articles and agricultural tips.
                  </p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <button
                      type="submit"
                      className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;