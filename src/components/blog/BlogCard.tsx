import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import Card, { CardContent, CardImage } from '../ui/Card';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Card hoverable>
      <Link to={`/blog/${post.slug}`}>
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
          <div className="flex items-center space-x-4">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm text-gray-700">{post.author.name}</span>
          </div>
          <div className="flex items-center text-gray-500 text-xs mt-3">
            <Calendar size={14} className="mr-1" />
            <span className="mr-3">{post.date}</span>
            <Clock size={14} className="mr-1" />
            <span>{post.readTime}</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default BlogCard;