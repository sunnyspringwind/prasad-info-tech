import React, { useState, useEffect } from 'react';
import { Eye, Clock, TrendingUp, Search, Mail, Share2, BarChart3, Globe, DollarSign, Target, Zap } from 'lucide-react';
import PrasadTechHeader from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const Blog = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const statsData = [
    { icon: <Eye className="w-5 h-5" />, label: 'Views', value: '12.5K' },
    { icon: <Clock className="w-5 h-5" />, label: 'Read Time', value: '8 min' },
    { icon: <TrendingUp className="w-5 h-5" />, label: 'Engagement', value: '94%' }
  ];

  const keyPoints = [
    {
      icon: <Search className="w-8 h-8 text-blue-500" />,
      title: 'Search Engine Optimization (SEO)',
      description: 'Optimize your website to rank higher in search results and drive organic traffic to your business.'
    },
    {
      icon: <Share2 className="w-8 h-8 text-blue-400" />,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage with your audience across multiple social platforms.'
    },
    {
      icon: <Mail className="w-8 h-8 text-red-500" />,
      title: 'Email Marketing',
      description: 'Create personalized campaigns that nurture leads and drive conversions.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Analytics & Insights',
      description: 'Track performance and make data-driven decisions to optimize your marketing strategy.'
    }
  ];

  const benefits = [
    { icon: <Globe className="w-6 h-6 text-blue-500" />, text: 'Global Reach: Connect with audiences worldwide instantly' },
    { icon: <DollarSign className="w-6 h-6 text-green-500" />, text: 'Cost Effectiveness: Maximize ROI with targeted campaigns' },
    { icon: <BarChart3 className="w-6 h-6 text-purple-500" />, text: 'Measurable Results: Track every click, conversion, and customer journey' },
    { icon: <Target className="w-6 h-6 text-red-500" />, text: 'Precision Targeting: Reach the right people at the right time' },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, text: 'Real-time Optimization: Adjust strategies based on live data' }
  ];

  return (
    <>
      <PrasadTechHeader />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-800 text-white py-20">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div 
            className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              The Complete Guide to Digital Marketing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light">
              Transform your business with data-driven digital strategies
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 flex-wrap">
              {statsData.map((stat, index) => (
                <div key={index} className="flex items-center gap-3 backdrop-blur-sm bg-white/10 rounded-lg px-4 py-2">
                  {stat.icon}
                  <div className="text-left">
                    <p className="text-sm text-blue-200">{stat.label}</p>
                    <p className="text-lg font-bold">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Author Section */}
        <div className="border border-gray-200 rounded-lg p-6 mb-8 bg-white shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              PT
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">PrasadTech Editorial</h3>
              <p className="text-gray-600 mb-2">Digital Marketing Expert • Published Dec 15, 2024</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Digital Marketing</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">SEO</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Strategy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          {/* Hero Image */}
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop&crop=center"
            alt="Digital Marketing Dashboard and Analytics"
            className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8 shadow-xl"
          />

          {/* Introduction */}
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-800 leading-relaxed font-medium">
            In today's hyper-connected world, digital marketing isn't just an option—it's the lifeline that connects brands with their audiences across every digital touchpoint.
          </h2>

          <p className="text-lg leading-relaxed mb-8 text-gray-700">
            Digital marketing encompasses all marketing efforts that use electronic devices or the internet. 
            It's a comprehensive ecosystem where businesses leverage digital channels such as search engines, 
            social media, email, and websites to connect with current and prospective customers in meaningful ways.
          </p>

          <hr className="my-8 border-gray-200" />

          {/* Key Components Grid */}
          <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
            Essential Digital Marketing Components
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {keyPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-100 rounded-full mr-4 group-hover:bg-blue-50 transition-colors">
                    {point.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{point.title}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Section with Image */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
                Why Digital Marketing Matters
              </h3>
              
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                The digital landscape offers unprecedented opportunities for businesses to reach, engage, 
                and convert their target audience with precision and measurability that traditional 
                marketing simply cannot match.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4 text-lg">
                    <div className="flex-shrink-0 p-2 bg-gray-100 rounded-lg">
                      {benefit.icon}
                    </div>
                    <span className="text-gray-700">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
                alt="Digital Marketing Growth Analytics"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <hr className="my-8 border-gray-200" />

          {/* Getting Started Section */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              Your Digital Marketing Journey Starts Here
            </h3>

            <p className="text-lg leading-relaxed mb-8 text-gray-700">
              Success in digital marketing requires a strategic approach that combines creativity with 
              data-driven insights. Here's how to build a foundation for sustainable growth:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  1
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">Establish Your Presence</h4>
                <p className="text-gray-600 leading-relaxed">
                  Create a professional website and claim your social media profiles across relevant platforms.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  2
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">Develop Your Strategy</h4>
                <p className="text-gray-600 leading-relaxed">
                  Define your target audience, set clear goals, and create content that resonates with your market.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  3
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">Measure & Optimize</h4>
                <p className="text-gray-600 leading-relaxed">
                  Use analytics to track performance and continuously refine your approach for better results.
                </p>
              </div>
            </div>
          </div>

          {/* Advanced Strategies Section */}
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
              Advanced Digital Marketing Strategies
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-bold mb-2 text-gray-900">Content Marketing Excellence</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Create valuable, relevant content that attracts and retains your audience. Focus on solving 
                    problems and providing insights that position your brand as an industry authority.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-bold mb-2 text-gray-900">Marketing Automation</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Streamline your marketing processes with automation tools that nurture leads, segment 
                    audiences, and deliver personalized experiences at scale.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-bold mb-2 text-gray-900">Conversion Rate Optimization</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Continuously test and optimize your website and campaigns to improve conversion rates 
                    and maximize the value of your traffic.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&h=500&fit=crop&crop=center"
                  alt="Digital Marketing Strategy Planning"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Success Metrics Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Key Performance Indicators to Track
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Success in digital marketing is measured through specific metrics that align with your business objectives.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold">150%</div>
                    <div className="text-sm text-blue-200">Average ROI Increase</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold">3.2x</div>
                    <div className="text-sm text-blue-200">Lead Generation Boost</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold">87%</div>
                    <div className="text-sm text-blue-200">Customer Retention Rate</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold">45%</div>
                    <div className="text-sm text-blue-200">Cost Reduction</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=500&h=400&fit=crop&crop=center"
                  alt="Digital Marketing Analytics Dashboard"
                  className="w-full h-80 object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Industry Trends Section */}
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
              2024 Digital Marketing Trends
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">AI</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">AI-Powered Marketing</h4>
                <p className="text-gray-700 leading-relaxed">
                  Leverage artificial intelligence for personalization, predictive analytics, and automated content creation.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">📱</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">Mobile-First Strategy</h4>
                <p className="text-gray-700 leading-relaxed">
                  Optimize all marketing touchpoints for mobile devices as mobile traffic continues to dominate.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">🎥</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">Video Content Dominance</h4>
                <p className="text-gray-700 leading-relaxed">
                  Short-form videos, live streaming, and interactive content are driving engagement across platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center py-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-800 rounded-2xl text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-lg rotate-45"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h4 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Digital Presence?
              </h4>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Join thousands of businesses that have revolutionized their growth through strategic digital marketing.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <NavLink to="/services" className="px-8 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Start Your Journey
                </NavLink>
                <button className="px-8 py-3 border-2 border-white/50 hover:bg-white/10 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Get Expert Consultation
                </button>
              </div>
              
              <div className="mt-8 flex justify-center gap-8 text-sm text-blue-200">
                <span>✓ Free Strategy Session</span>
                <span>✓ Custom Action Plan</span>
                <span>✓ 30-Day Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;