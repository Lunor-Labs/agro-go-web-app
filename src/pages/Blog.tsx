import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';

import SectionTitle from '../components/ui/SectionTitle';
import Card, { CardContent, CardImage } from '../components/ui/Card';
import Button from '../components/ui/Button';

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Sustainable Farming Practices for the Modern Age",
    excerpt: "Discover how modern sustainable farming techniques can increase productivity while reducing environmental impact.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at magna non nunc tristique rhoncus. Aliquam nibh ante, egestas id dictum a, commodo rhoncus libero. Praesent eget tellus...",
    image: "https://images.pexels.com/photos/2219420/pexels-photo-2219420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Sarah Johnson",
    date: "May 15, 2025",
    readTime: "8 min read",
    category: "Sustainability"
  },
  {
    id: 2,
    title: "Optimizing Irrigation: Water Conservation in Agriculture",
    excerpt: "Learn about the latest technologies and methods for water conservation in agricultural irrigation systems.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at magna non nunc tristique rhoncus. Aliquam nibh ante, egestas id dictum a, commodo rhoncus libero. Praesent eget tellus...",
    image: "https://images.pexels.com/photos/1434818/pexels-photo-1434818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Michael Chen",
    date: "April 28, 2025",
    readTime: "6 min read",
    category: "Water Management"
  },
  {
    id: 3,
    title: "The Benefits of Organic Fertilizers for Soil Health",
    excerpt: "Explore the long-term benefits of organic fertilizers on soil microbiology, structure, and overall crop health.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at magna non nunc tristique rhoncus. Aliquam nibh ante, egestas id dictum a, commodo rhoncus libero. Praesent eget tellus...",
    image: "https://images.pexels.com/photos/5528994/pexels-photo-5528994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "David Rodriguez",
    date: "April 10, 2025",
    readTime: "7 min read",
    category: "Soil Management"
  },
  {
    id: 4,
    title: "Climate-Resilient Crop Varieties for Changing Weather Patterns",
    excerpt: "How advanced breeding techniques are creating crop varieties that can withstand extreme weather conditions.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at magna non nunc tristique rhoncus. Aliquam nibh ante, egestas id dictum a, commodo rhoncus libero. Praesent eget tellus...",
    image: "https://images.pexels.com/photos/175805/pexels-photo-175805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Emma Wilson",
    date: "March 22, 2025",
    readTime: "5 min read",
    category: "Crop Science"
  },
  {
    id: 5,
    title: "Digital Farming: Leveraging Data for Better Agricultural Decisions",
    excerpt: "How modern farmers are using data analytics, IoT devices, and AI to optimize their farming operations.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at magna non nunc tristique rhoncus. Aliquam nibh ante, egestas id dictum a, commodo rhoncus libero. Praesent eget tellus...",
    image: "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "James Martinez",
    date: "March 8, 2025",
    readTime: "9 min read",
    category: "Technology"
  },
  {
    id: 6,
    title: "Regenerative Agriculture: Rebuilding Soil Health for Future Generations",
    excerpt: "Discover the principles of regenerative agriculture and how it's transforming farming practices worldwide.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at magna non nunc tristique rhoncus. Aliquam nibh ante, egestas id dictum a, commodo rhoncus libero. Praesent eget tellus...",
    image: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Olivia Thompson",
    date: "February 19, 2025",
    readTime: "10 min read",
    category: "Soil Management"
  }
];

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
                  src="https://images.pexels.com/photos/2041774/pexels-photo-2041774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Featured post"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured Article
                </span>
                <h2 className="text-3xl font-bold mb-4">
                  The Future of Sustainable Agriculture: Balancing Productivity and Environmental Stewardship
                </h2>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar size={16} className="mr-1" />
                  <span className="mr-4">June 1, 2025</span>
                  <User size={16} className="mr-1" />
                  <span className="mr-4">John Anderson</span>
                  <Clock size={16} className="mr-1" />
                  <span>12 min read</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Explore how modern agricultural practices are evolving to meet the twin challenges of feeding a growing global population while preserving natural resources for future generations.
                </p>
                <Button 
                  variant="primary" 
                  icon={<ChevronRight size={16} />} 
                  iconPosition="right"
                >
                  Read Article
                </Button>
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
                {blogPosts.map((post, index) => (
                  <motion.div 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card hoverable>
                      <CardImage 
                        src={post.image} 
                        alt={post.title}
                        className="h-48"
                      />
                      <CardContent>
                        <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium mb-3">
                          {post.category}
                        </span>
                        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                        <div className="flex items-center text-gray-500 text-xs mb-4">
                          <Calendar size={14} className="mr-1" />
                          <span className="mr-3">{post.date}</span>
                          <Clock size={14} className="mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <Button 
                          variant="text" 
                          icon={<ChevronRight size={16} />} 
                          iconPosition="right"
                        >
                          Read More
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-md bg-primary-600 text-white">1</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100">2</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100">3</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100">
                    <ChevronRight size={16} />
                  </button>
                </div>
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
                        className="block w-full text-left px-3 py-2 rounded-md transition-colors hover:bg-gray-100"
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
                  <form>
                    <div className="mb-3">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <Button variant="primary" fullWidth>
                      Subscribe
                    </Button>
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