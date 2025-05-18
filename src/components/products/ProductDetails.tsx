import React from 'react';
import { motion } from 'framer-motion';
import { X, MessageCircle, Leaf, BarChart, Shield } from 'lucide-react';
import Button from '../ui/Button';

interface ProductDetailsProps {
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
    category: string;
    price: number;
  };
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  const handleWhatsAppOrder = () => {
    // Replace with your WhatsApp number
    const phoneNumber = '+94713357493';
    const message = encodeURIComponent(
      `Hi! I'm interested in ordering:\n\n` +
      `Product: ${product.name}\n` +
      `Price: $${product.price.toFixed(2)}\n` +
      `Category: ${product.category}\n\n` +
      `Please provide more information about ordering this product.`
    );
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-2"
          aria-label="Close details"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="h-[300px] md:h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Information */}
          <div className="p-6 md:p-8">
            <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mb-4 capitalize">
              {product.category.replace('-', ' ')}
            </span>
            
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="text-3xl font-bold text-primary-600 mb-6">
              ${product.price.toFixed(2)}
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <Leaf className="text-primary-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Eco-Friendly</h4>
                  <p className="text-sm text-gray-600">Sustainable and environmentally conscious design</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <BarChart className="text-primary-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">High Performance</h4>
                  <p className="text-sm text-gray-600">Proven results and optimal efficiency</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <Shield className="text-primary-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Quality Guaranteed</h4>
                  <p className="text-sm text-gray-600">Backed by our satisfaction guarantee</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                variant="primary"
                icon={<MessageCircle size={18} />}
                fullWidth
                onClick={handleWhatsAppOrder}
              >
                Order via WhatsApp
              </Button>
              <Button
                variant="outline"
                fullWidth
                onClick={onClose}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetails;