import React, { useState } from "react";
import { FaArrowRight, FaLaptopCode, FaBullhorn, FaPalette, FaChartLine } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { HiOutlineDocumentReport } from 'react-icons/hi';
import ProjectInquiryForm from "./ProjectEnquiryForm";

const HeroSection: React.FC = () => {
  const [isContactFormVisible, setContactFormVisibility] = useState(false);


  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-500"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 py-10 sm:py-12 lg:py-0 min-h-screen">
        
        {/* Left Content */}
        <div className="flex-1 max-w-3xl text-white lg:pr-12">
          <div className="mb-2">
            <span className="inline-block px-4 py-2 sm:mt-10 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium border border-blue-400/30">
              🚀 Your Digital Success Partner
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg mb-6">
            <span className="text-white">Building Brands &</span><br />
            <span className="text-blue-200">Digital Solutions,</span><br />
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Crafted with Precision
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-blue-100 drop-shadow-md leading-relaxed max-w-2xl">
            With <span className="font-semibold text-white">4+ years of experience</span>, we provide a complete range of 
            digital, design, and development services tailored to your unique business needs in Nepal and beyond.
          </p>

          {/* Service Highlights */}
          <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
            <div className="flex items-center gap-3 text-blue-100">
              <FaLaptopCode className="text-blue-300 text-lg" />
              <span className="text-sm font-medium">Web Development</span>
            </div>
            <div className="flex items-center gap-3 text-blue-100">
              <FaBullhorn className="text-blue-300 text-lg" />
              <span className="text-sm font-medium">Digital Marketing</span>
            </div>
            <div className="flex items-center gap-3 text-blue-100">
              <FaPalette className="text-blue-300 text-lg" />
              <span className="text-sm font-medium">Brand Design</span>
            </div>
            <div className="flex items-center gap-3 text-blue-100">
              <FaChartLine className="text-blue-300 text-lg" />
              <span className="text-sm font-medium">Growth Strategy</span>
            </div>
          </div>

          {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4 items-center">
            <button onClick={()=>setContactFormVisibility(true)} className="px-8 py-4 rounded-md bg-white text-blue-900 font-semibold shadow-xl hover:bg-blue-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-white/30 active:scale-95">
              <HiOutlineDocumentReport className="text-blue-600 text-3xl" />
              Get Free Quotation
            </button>
            
            <Link to="/services"  className="px-8 py-4 rounded-md border-2 border-white/80 text-white font-semibold bg-white/10 backdrop-blur-sm hover:bg-white hover:text-blue-900 hover:scale-105 transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-white/30 active:scale-95 group">
              Our Services
              <FaArrowRight className="text-white group-hover:text-blue-900 transition-colors group-hover:translate-x-1 transform duration-300" />
            </Link>
              <Link to="/course" className="relative mt-4 inline-flex px-8 py-4 rounded-md border-2 border-white/80 text-white font-semibold bg-white/10 backdrop-blur-sm hover:bg-white hover:text-blue-900 hover:scale-105 transition-all duration-300 items-center gap-3 focus:outline-none focus:ring-4 focus:ring-white/30 active:scale-95 group">
              <span>Digital Creator Course</span>
              <FaArrowRight className="text-white group-hover:text-blue-900 transition-colors group-hover:translate-x-1 transform duration-300" />
              <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">Popular!</span>
              </Link>
            </div>
          

          {/*pop up Contact form for free quotation */}
        {isContactFormVisible && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-6">
            <div className="rounded-lg w-full max-w-2xl m-4 relative h-[400px] sm:max-h-screen overflow-y-auto">
              <ProjectInquiryForm 
          showServices={true} 
          type={"quote for new"} 
          onClose={() => setContactFormVisibility(false)} 
              />
            </div>
          </div>
        )}

          {/* Trust Indicators */}
          <div className="mt-12 pb-3 flex flex-wrap items-center gap-8 text-blue-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <span className="text-sm">100+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">⭐</span>
              </div>
              <span className="text-sm">5-Star Client Rating</span>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex-1 mt-12 lg:mt-0 max-w-lg lg:max-w-xl">
          <div className="relative">
            {/* Main Illustration Container */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 rounded-2xl rotate-12 shadow-xl animate-bounce delay-300"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-xl rotate-45 shadow-lg animate-pulse"></div>
              
              {/* Central Illustration */}
              <div className="text-center">
                {/* Main Icon */}
                <div className="relative mx-auto w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl mb-6 animate-pulse">
                  <FaLaptopCode className="text-white text-5xl" />
                  
                  {/* Floating Service Icons */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <FaBullhorn className="text-blue-600 text-sm" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                    <FaPalette className="text-blue-600 text-sm" />
                  </div>
                  <div className="absolute top-1/2 -left-6 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000">
                    <FaChartLine className="text-blue-600 text-sm" />
                  </div>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/30">
                    <div className="text-2xl font-bold text-white mb-1">10+</div>
                    <div className="text-blue-200 text-xs">Years Experience</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/30">
                    <div className="text-2xl font-bold text-white mb-1">100+</div>
                    <div className="text-blue-200 text-xs">Happy Clients</div>
                  </div>
                </div>

                {/* Process Flow */}
                <div className="flex justify-center items-center gap-2 text-white/80">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <div className="w-6 h-0.5 bg-blue-400"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <div className="w-6 h-0.5 bg-blue-400"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                </div>
                <div className="text-blue-200 text-xs mt-2">Strategy → Design → Growth</div>
              </div>
            </div>

            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-white/20 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;