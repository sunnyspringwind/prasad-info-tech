import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Star, Clock, DollarSign, Users, CheckCircle, ArrowRight, Award, Shield, TrendingUp, MessageCircle, Play, List } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import PrasadTechHeader from '../components/Header';
import Footer from '../components/Footer';
import { NavLink, useParams } from 'react-router-dom';
import ProjectInquiryForm from '../components/ProjectEnquiryForm';

const ServicePage = () => {
  // const [selectedService, setSelectedService] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
    const [isContactFormVisible, setContactFormVisibility] = useState(false);
  
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const params = useParams();
  useEffect(() => {
    setIsVisible(true);
  }, []);

    const selectedServiceIndex = servicesData.findIndex(item => item.slug === params.slug);

  const currentService = servicesData[selectedServiceIndex >= 0 ? selectedServiceIndex : 0];
console.log(currentService);
  const urgencyMessages = [
    "🔥 Limited slots available this month",
    "⚡ Book now and get 20% early bird discount", 
    "🎯 Join 200+ satisfied clients"
  ];

  const trustSignals = [
    { icon: Award, text: "5+ Years Experience" },
    { icon: Users, text: "200+ Happy Clients" },
    { icon: Star, text: "4.9/5 Rating" },
    { icon: Shield, text: "100% Satisfaction Guarantee" }
  ];

  const [isEnquiryFormVisible, setToggleEnquiryForm] = useState(false);

  const toggleEnquiryForm = () => setToggleEnquiryForm(prev => !prev);

  return (
    <div className="min-h-screen bg-white">
      <PrasadTechHeader/>
      {/* Hero Section with Psychological Triggers */}
      <div className="relative bg-gradient-to-br from-white to-blue-100 overflow-hidden">
        
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Service Selection Pills */}
            {/* <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {servicesData.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedService(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedService === index 
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                  }`}
                >
                  {service.icon} {service.label}
                  {service.badge && (
                    <span className="ml-2 text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </button>
              ))}
            </div> */}

            {/* Main Hero Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {currentService.catTitle}
                  </span>
                  {currentService.isFeatured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      ⭐ FEATURED
                    </span>
                  )}
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {currentService.label}
                  <span className="block text-blue-600 text-2xl lg:text-3xl mt-2">
                    That Drives Results
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  {currentService.desc1}
                </p>
                
                <div className="flex flex-wrap gap-4 items-center">
                  {currentService.priceRange && (
                    <div className="flex items-center gap-2 text-green-600 font-semibold">
                      <DollarSign className="w-5 h-5" />
                      {currentService.priceRange}
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-blue-600">
                    <Clock className="w-5 h-5" />
                    {currentService.duration}
                  </div>
                </div>

                {/* Urgency Banner */}
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-lg animate-pulse">
                  <p className="font-semibold text-center">
                  {currentService.urgencyMessage || urgencyMessages[selectedServiceIndex % urgencyMessages.length]}
                  </p>
                </div>
                {isEnquiryFormVisible && <div className="rounded-3xl z-100 sm:w-[590px] max-w-2xl border-2 border-gray-300 relative sm:max-h-screen overflow-y-auto">
              
          <ProjectInquiryForm type={currentService.label} onClose={toggleEnquiryForm} showServices={false}/> </div>}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={toggleEnquiryForm} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                    {currentService.cta}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                    <NavLink to="/portfolio" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    View Demo
                    </NavLink>
                </div>

                {/* Trust Signals */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {trustSignals.map((signal, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <signal.icon className="w-4 h-4 text-blue-600" />
                      {signal.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Images */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src={currentService.img1} 
                    alt={currentService.label}
                    className="rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                  />
                  <img 
                    src={currentService.img2} 
                    alt={currentService.label}
                    className="rounded-lg shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 mt-8"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm animate-bounce">
                  Get Started Now!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Service Information */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b">
          {['overview', 'process', 'features', 'benefits', 'testimonials', 'faq'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-semibold capitalize transition-all duration-300 border-b-2 ${
                activeTab === tab 
                  ? 'text-blue-600 border-blue-600' 
                  : 'text-gray-600 border-transparent hover:text-blue-600'
              }`}
            >
              {tab === 'process' ? 'Our Process' : tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {currentService.desc2}
                </p>
              </div>
              
              {currentService.technologies && (
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-3">
                    {currentService.technologies.map((tech, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'process' && currentService.workProcess && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Work Process</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We follow a systematic approach to ensure your project's success from start to finish.
                </p>
              </div>
              
              <div className="relative">
                {/* Process Timeline */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
                
                {currentService.workProcess.map((process, index) => (
                  <div key={index} className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full z-10 border-4 border-white shadow-lg"></div>
                    
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        {/* Step Number */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                            {process.step}
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900">{process.title}</h4>
                            <span className="text-blue-600 font-medium flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {process.duration}
                            </span>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {process.desc}
                        </p>
                        
                        {/* Deliverables */}
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Deliverables:</h5>
                          <div className="flex flex-wrap gap-2">
                            {process.deliverables.map((deliverable, idx) => (
                              <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                ✓ {deliverable}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mobile Timeline Connector */}
                    {/* <div className="md:hidden w-full flex justify-center my-4">
                      {index < currentService.workProcess.length - 1 && (
                        <div className="w-px h-8 bg-blue-200"></div>
                      )}
                    </div> */}
                  </div>
                ))}
              </div>
              
              {/* Process CTA */}
              <div className="text-center mt-12 p-6 bg-blue-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Ready to Get Started?</h4>
                <p className="text-gray-600 mb-4">Let's discuss your project and create a customized timeline for your success.</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="grid md:grid-cols-2 gap-6">
              {currentService.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="grid md:grid-cols-2 gap-6">
              {currentService.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-100">
                  <TrendingUp className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'testimonials' && currentService.testimonials && (
            <div className="space-y-6">
              {currentService.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.author?.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'faq' && currentService.faqs && (
            <div className="space-y-4">
              {currentService.faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.q}</span>
                    {expandedFAQ === index ? 
                      <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    }
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of successful businesses who chose our {currentService.label.toLowerCase()} services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={()=>setContactFormVisibility(true)} className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Get Free Consultation
            </button>
            {isContactFormVisible && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-6">
            <div className="rounded-lg w-full max-w-2xl m-4 relative h-[400px] sm:max-h-screen overflow-y-auto">
              <ProjectInquiryForm 
          showServices={false} 
          type={"New"} 
          onClose={() => setContactFormVisibility(false)} 
              />
            </div>
          </div>
        )}
            {/* <div className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center gap-2"> */}
             
           
           
                            <NavLink to="/services" className={({ isActive }) => ` border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center gap-2  ${isActive ? 'text-blue-600' : ''}`}> <List className="w-5 h-5" /> Services Menu</NavLink>
 {/* </div> */}
          </div>

          <p className="mt-6 text-blue-200 text-sm">
            ✓ No setup fees ✓ Money-back guarantee ✓ 24/7 support
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ServicePage;