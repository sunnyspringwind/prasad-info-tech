import React, { useState } from 'react';
import { blogData } from '../data/blogData';
import { useNavigate } from 'react-router-dom';


const blogPosts = blogData;
// const blogPosts: BlogPost[] = [
  
//   {
//     id: '1',
//     title: 'Facebook Ad Boosting: 10 Proven Strategies to Maximize Your ROI in 2025',
//     excerpt: 'Discover the latest Facebook advertising techniques that deliver results. From audience targeting to ad creative optimization.',
//     category: 'Facebook Marketing',
//     date: '15 Aug 2025',
//     author: 'Sarah Mitchell',
//     readTime: '8 min read',
//     imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
//     slug: 'facebook-ad-boosting-10-proven-strategies-maximize-roi-2025'
//   },
//   {
//     id: '2',
//     title: 'Social Media Marketing Trends That Will Dominate 2025',
//     excerpt: 'Stay ahead of the curve with these emerging social media trends. From AI-powered content to micro-influencer partnerships.',
//     category: 'Social Media',
//     date: '12 Aug 2025',
//     author: 'Marcus Chen',
//     readTime: '6 min read',
//     imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop',
//     slug: 'social-media-marketing-trends-dominate-2025'
//   },
//   {
//     id: '3',
//     title: 'SEO in 2025: Complete Guide to Ranking #1 on Google',
//     excerpt: 'Master modern SEO with our comprehensive guide covering technical SEO, content optimization, and Google\'s latest algorithm updates.',
//     category: 'SEO',
//     date: '10 Aug 2025',
//     author: 'Emma Rodriguez',
//     readTime: '12 min read',
//     imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop',
//     slug: 'seo-2025-complete-guide-ranking-number-one-google'
//   },
//   {
//     id: '4',
//     title: 'Instagram vs TikTok: Which Platform Should Your Business Focus On?',
//     excerpt: 'Compare Instagram and TikTok for business marketing. Analyze demographics, engagement rates, and advertising opportunities.',
//     category: 'Social Media',
//     date: '08 Aug 2025',
//     author: 'David Park',
//     readTime: '7 min read',
//     imageUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=400&fit=crop',
//     slug: 'instagram-vs-tiktok-which-platform-business-focus'
//   },
//   {
//     id: '5',
//     title: 'Graphic Design Psychology: Colors That Convert in Digital Marketing',
//     excerpt: 'Learn how color psychology impacts consumer behavior and discover the best color schemes for higher conversion rates.',
//     category: 'Graphic Design',
//     date: '05 Aug 2025',
//     author: 'Lisa Thompson',
//     readTime: '9 min read',
//     imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop',
//     slug: 'graphic-design-psychology-colors-convert-digital-marketing'
//   },
//   {
//     id: '6',
//     title: 'Website Development Trends: What Your Business Needs in 2025',
//     excerpt: 'Explore cutting-edge web development trends including AI chatbots, voice search optimization, and mobile-first design.',
//     category: 'Web Development',
//     date: '03 Aug 2025',
//     author: 'Alex Johnson',
//     readTime: '10 min read',
//     imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop',
//     slug: 'website-development-trends-business-needs-2025'
//   },
//   {
//     id: '7',
//     title: 'Facebook Pixel Mastery: Track, Optimize, and Scale Your Ad Campaigns',
//     excerpt: 'Master Facebook Pixel implementation for better ad targeting, conversion tracking, and campaign optimization.',
//     category: 'Facebook Marketing',
//     date: '01 Aug 2025',
//     author: 'Rachel Green',
//     readTime: '11 min read',
//     imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
//     slug: 'facebook-pixel-mastery-track-optimize-scale-ad-campaigns'
//   },
//   {
//     id: '8',
//     title: 'Local SEO Secrets: Dominate Google My Business and Local Search',
//     excerpt: 'Unlock local SEO strategies to rank higher in local searches, optimize Google My Business, and attract nearby customers.',
//     category: 'SEO',
//     date: '28 Jul 2025',
//     author: 'Michael Brown',
//     readTime: '8 min read',
//     imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
//     slug: 'local-seo-secrets-dominate-google-my-business-local-search'
//   },
//   {
//     id: '9',
//     title: 'Brand Identity Design: Creating Memorable Logos That Sell',
//     excerpt: 'Discover the principles of effective logo design and brand identity creation that resonates with your target audience.',
//     category: 'Graphic Design',
//     date: '25 Jul 2025',
//     author: 'Jennifer Davis',
//     readTime: '7 min read',
//     imageUrl: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=400&fit=crop',
//     slug: 'brand-identity-design-creating-memorable-logos-sell'
//   },
//   {
//     id: '10',
//     title: 'E-commerce Website Optimization: Convert More Visitors into Customers',
//     excerpt: 'Learn proven techniques to optimize your e-commerce site for higher conversions, better UX, and increased sales.',
//     category: 'Web Development',
//     date: '22 Jul 2025',
//     author: 'Tom Wilson',
//     readTime: '9 min read',
//     imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
//     slug: 'ecommerce-website-optimization-convert-visitors-customers'
//   },
//   {
//     id: '11',
//     title: 'Social Media Content Calendar: Plan Your Way to Viral Success',
//     excerpt: 'Create an effective content calendar strategy that keeps your audience engaged and drives consistent social media growth.',
//     category: 'Social Media',
//     date: '20 Jul 2025',
//     author: 'Amanda Lee',
//     readTime: '6 min read',
//     imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
//     slug: 'social-media-content-calendar-plan-viral-success'
//   },
//   {
//     id: '12',
//     title: 'Google Ads vs Facebook Ads: Which Platform Delivers Better Results?',
//     excerpt: 'Complete comparison of Google Ads and Facebook Ads including cost, targeting options, and conversion rates for different industries.',
//     category: 'Facebook Marketing',
//     date: '18 Jul 2025',
//     author: 'Chris Martinez',
//     readTime: '10 min read',
//     imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
//     slug: 'google-ads-vs-facebook-ads-platform-delivers-better-results'
//   }
// ];



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