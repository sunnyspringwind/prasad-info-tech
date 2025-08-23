import React, { useState } from 'react';
import { FiArrowLeft, FiCalendar, FiClock, FiUser, FiCheck } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaLinkedin, FaCopy } from 'react-icons/fa';

import { blogData } from '../data/blogData';
import { Link, useNavigate, useParams } from 'react-router-dom';

// Individual Blog Post Component
export const BlogPostPage: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const slug = params.slug
  const post = blogData.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <FiArrowLeft size={16} />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const text = post.title;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          setCopiedLink(true);
          setTimeout(() => setCopiedLink(false), 2000);
        } catch (err) {
          console.error(err);
        }
        break;
    }
  };

  const relatedPosts = blogData
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b sticky top-0 z-10 mt-5">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FiArrowLeft size={16} />
            Back to Blogs
          </Link>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${post.imageUrl})`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Fallback for broken images */}
        <img
          src={post.imageUrl}
          alt=""
          className="hidden"
          onError={(e) => {
            const heroDiv = (e.target as HTMLElement)?.closest('.relative');
            if (heroDiv) {
              const bgDiv = heroDiv.querySelector('[style*="backgroundImage"]') as HTMLElement;
              if (bgDiv) {
                bgDiv.style.backgroundImage = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
              }
            }
          }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto px-4 text-white">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block bg-blue-600 bg-opacity-90 text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            {/* Excerpt */}
            <p className="text-lg md:text-xl text-gray-100 mb-6 max-w-3xl">
              {post.excerpt}
            </p>
            
            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <FiUser size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Share Buttons */}
        <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
          <div className="text-sm text-gray-600">
            Share this article
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleShare('facebook')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <FaFacebook size={16} />
              Facebook
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors text-sm"
            >
              <FaTwitter size={16} />
              Twitter
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </button>
            <button
              onClick={() => handleShare('copy')}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
            >
              {copiedLink ? <FiCheck size={16} /> : <FaCopy size={16} />}
              {copiedLink ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Article Content with Padding */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12 mb-12">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-ul:my-4 prose-ol:my-4 prose-li:my-1"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <article onClick={()=> navigate(`/blog/${relatedPost.slug}`)} key={relatedPost.id} className="group cursor-pointer">
                  {/* Image */}
                  <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                    <img
                      src={relatedPost.imageUrl}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/300x200/f3f4f6/9ca3af?text=Related+Article';
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                      <span>{relatedPost.date}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
