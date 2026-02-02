import React, { useState } from 'react';
import { blogData } from '../data/blogData';
import { useNavigate } from 'react-router-dom';


const blogPosts = blogData;


const categories = ['All', 'General', 'Digital Marketing', 'SEO', 'Graphic Design', 'Software Development'];

const Blogs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handlePostClick = (slug: string) => {
    // In a real app, this would navigate to the blog post
   navigate(`/blog/${slug}`);
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, tutorials, and updates from our team
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="group cursor-pointer"
              onClick={() => handlePostClick(post.slug)}
            >
              <div className="rounded-lg bg-white shadow-sm h-full border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                {/* Image */}
                <div className="relative aspect-video">
                  <img
                    alt={post.title}
                    loading="lazy"
                    className="object-cover rounded-t-lg w-full h-full"
                    src={post.imageUrl}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x225/f3f4f6/9ca3af?text=Image+Not+Found';
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="space-y-2">
                    {/* Category and Date */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Author and Read Time */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No posts message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No posts found for the selected category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;