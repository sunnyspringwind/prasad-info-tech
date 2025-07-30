import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ReactTyped } from "react-typed";

// Mock data for hero slides
const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    title: "Effort is your prayer,",
    subtitle: "Growth is the prasad.",
    description: "We help businesses connect, converse, and convert through powerful digital strategies tailored for Nepal's market.",
    primaryCTA: "Get a Free Consultation",
    secondaryCTA: "View Portfolio"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    title: "Transform Your Business",
    subtitle: "With Digital Excellence",
    description: "Innovative solutions that drive engagement, boost conversions, and accelerate your digital transformation journey.",
    primaryCTA: "Start Your Journey",
    secondaryCTA: "Learn More"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Innovation Meets",
    subtitle: "Local Expertise",
    description: "Bridging global digital trends with deep understanding of the Nepali market to create impactful business solutions.",
    primaryCTA: "Discover Solutions",
    secondaryCTA: "Our Process"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Success Stories",
    subtitle: "Built Together",
    description: "Join hundreds of businesses that have transformed their digital presence and achieved remarkable growth with us.",
    primaryCTA: "See Results",
    secondaryCTA: "Client Stories"
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Images with Transitions */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Hero ${slide.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="hidden absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full  bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white hover:bg-opacity-30 hover:scale-110 transition-all duration-300 sm:flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-lg" />
      </button>

      <button
        onClick={goToNext}
        className="hidden absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white hover:bg-opacity-30 hover:scale-110 transition-all duration-300 sm:flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-lg" />
      </button>

      {/* Content with Slide Animation */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 sm:px-12 lg:px-20 max-w-4xl text-white">
        <div
          key={currentSlide}
          className="animate-fade-in-up"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg mb-2">
            {   <ReactTyped
    strings={[currentSlideData.title]}
    typeSpeed={70}
    backSpeed={40}
    loop
    className="text-blue-600 font-semibold"
  />} <br />
            <span className="text-blue-400">{currentSlideData.subtitle}</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl drop-shadow-md max-w-2xl leading-relaxed">
            {currentSlideData.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            {/* Primary CTA */}
            <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95">
              <FaCheckCircle className="text-white text-lg" />
              {currentSlideData.primaryCTA}
            </button>

            {/* Secondary CTA */}
            <button className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold bg-transparent hover:bg-white hover:text-blue-700 hover:scale-105 transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-white active:scale-95 group">
              {currentSlideData.secondaryCTA}
              <FaArrowRight className="text-white group-hover:text-blue-700 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
              index === currentSlide
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-black bg-opacity-30">
        <div
          className="h-full bg-blue-500 transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
          }}
        />
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;