import React from 'react';
import { Calendar, Clock, User, Share2, Bookmark, Eye, Heart } from 'lucide-react';

const GraphicDesignBlogPost: React.FC = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'What is Graphic Design? A Complete Guide for 2025',
        text: 'Discover the fundamentals of graphic design and how it shapes visual communication in our digital world.',
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleBookmark = () => {
    // Simulate bookmark functionality
    alert('Post bookmarked!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">Design</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">Tutorial</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              What is Graphic Design?
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-6 max-w-2xl">
              A Complete Guide to Visual Communication in the Digital Age
            </p>
            <div className="flex items-center gap-6 text-gray-200">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Sarah Martinez</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Article Actions */}
          <div className="px-8 py-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Eye size={16} />
                  <span className="text-sm">2,847 views</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Heart size={16} />
                  <span className="text-sm">156 likes</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleBookmark}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Bookmark size={18} className="text-gray-600" />
                </button>
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Share2 size={18} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <article className="px-8 py-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Graphic design is the art and science of visual communication. It combines creativity, technology, and strategic thinking to convey messages, evoke emotions, and solve problems through visual elements. In today's digital-first world, graphic design has become more crucial than ever.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The Essence of Graphic Design</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                At its core, graphic design is about <strong>visual problem-solving</strong>. Designers use typography, imagery, color, and layout to create compelling visual narratives that communicate specific messages to target audiences. Whether it's a logo that represents a brand's identity, a poster that promotes an event, or a website that guides user interaction, graphic design shapes how we perceive and interact with information.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 my-10">
                <blockquote className="text-xl italic text-gray-800 border-l-4 border-blue-500 pl-6">
                  "Design is not just what it looks like and feels like. Design is how it works."
                  <footer className="text-gray-600 mt-2 not-italic text-base">— Steve Jobs</footer>
                </blockquote>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Key Elements of Graphic Design</h2>

              <div className="grid md:grid-cols-2 gap-8 my-10">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Typography</h3>
                  <p className="text-gray-600">The art of arranging type to make written language readable, appealing, and expressive. Typography sets the tone and personality of any design.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Color Theory</h3>
                  <p className="text-gray-600">Understanding how colors interact, their psychological impact, and how to use them strategically to evoke specific emotions and responses.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Layout & Composition</h3>
                  <p className="text-gray-600">The arrangement of visual elements on a page or screen to create hierarchy, balance, and guide the viewer's eye through the content.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand Identity</h3>
                  <p className="text-gray-600">Creating cohesive visual systems that represent a brand's values, personality, and message across all touchpoints and platforms.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Applications in Modern Design</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Graphic design permeates every aspect of our digital and physical environment. From the apps on your smartphone to the billboards on city streets, from social media posts to corporate presentations, graphic design influences how information is presented and consumed.
              </p>

              <div className="bg-gray-50 rounded-xl p-8 my-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Popular Design Applications:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Digital Marketing:</strong> Social media graphics, email campaigns, web banners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>UI/UX Design:</strong> Website interfaces, mobile apps, user experience optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Print Design:</strong> Brochures, business cards, packaging, magazines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Motion Graphics:</strong> Animated logos, video content, interactive presentations</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The Future of Graphic Design</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                As technology evolves, so does graphic design. Artificial intelligence, augmented reality, and immersive technologies are opening new frontiers for visual communication. However, the fundamental principles of good design—clarity, functionality, and aesthetic appeal—remain constant.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                The most successful designers of tomorrow will be those who can blend traditional design principles with emerging technologies, creating experiences that are not just visually stunning but also meaningful and impactful.
              </p>

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white my-10">
                <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Design Journey?</h3>
                <p className="text-purple-100 mb-6">Whether you're a complete beginner or looking to enhance your skills, understanding graphic design opens doors to endless creative possibilities.</p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Explore Design Courses
                </button>
              </div>
            </div>
          </article>

          {/* Author Bio */}
          <div className="px-8 py-8 bg-gray-50 border-t border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                SM
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Sarah Martinez</h4>
                <p className="text-gray-600 mb-3">Senior Graphic Designer with 8+ years of experience in digital design and brand development. Passionate about creating meaningful visual experiences that connect with audiences.</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>25 Articles</span>
                  <span>•</span>
                  <span>15K Followers</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">Follow</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Color Psychology in Design",
                excerpt: "How colors influence emotions and decision-making in visual communication.",
                readTime: "5 min read",
                category: "Theory"
              },
              {
                title: "Typography Fundamentals",
                excerpt: "Master the basics of type selection and arrangement for impactful design.",
                readTime: "7 min read",
                category: "Skills"
              },
              {
                title: "Design Tools Comparison 2024",
                excerpt: "A comprehensive guide to choosing the right design software for your needs.",
                readTime: "6 min read",
                category: "Tools"
              }
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">{article.category}</span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">{article.title}</h4>
                  <p className="text-sm text-gray-600">{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignBlogPost;