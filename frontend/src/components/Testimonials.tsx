import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

import review1 from "../assets/img/reviews/review1.jpg"
import review2 from "../assets/img/reviews/review2.jpg"
import review3 from "../assets/img/reviews/review3.jpg"
import review4 from "../assets/img/reviews/review4.jpg"
import review5 from "../assets/img/reviews/review5.jpg"
import review6 from "../assets/img/reviews/review6.jpg"
import review7 from "../assets/img/reviews/review7.jpg"
import review8 from "../assets/img/reviews/review8.jpg"
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentReviewImage, setCurrentReviewImage] = useState(0);

  // Mock testimonials data
const testimonials = [
    {
        id: 1,
        name: "Arun Shrestha",
        company: "Digital Nepal Solutions",
        position: "Marketing Director",
        content: "Working with this agency transformed our online presence completely. Our Facebook ad campaigns now generate 300% more leads than before, and our ROI has increased dramatically.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face",
        results: "+300% Lead Generation"
    },
    {
        id: 2,
        name: "Binod Maharjan",
        company: "Thakali Kitchen",
        position: "Owner",
        content: "Their social media strategy helped us reach thousands of local customers. Our Instagram followers grew from 500 to 15K in just 4 months, and our restaurant is always busy now.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        results: "15K+ Instagram Followers"
    },
    {
        id: 3,
        name: "Priya Tamang",
        company: "Nepal Fashion House",
        position: "Founder",
        content: "The website redesign and SEO optimization they provided increased our online sales by 450%. We're now ranking #1 for our main keywords on Google.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        results: "+450% Online Sales"
    },
    {
        id: 4,
        name: "Sunil Poudel",
        company: "Everest Fitness Hub",
        position: "General Manager",
        content: "Amazing results! Their Facebook and Instagram campaigns brought us 200+ new members in 3 months. The graphic designs they created are absolutely stunning.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        results: "200+ New Members"
    },
    {
        id: 5,
        name: "Sabina Gurung",
        company: "Namaste Beauty Parlour",
        position: "Owner",
        content: "Professional, creative, and results-driven! Our booking increased by 280% after they optimized our online presence. Highly recommended!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        results: "+280% Bookings"
    }
];

  //  Review screenshots data
const reviewImages = [
    {
        id: 1,
        image: review1,
        alt: "Customer review screenshot 1"
    },
    {
        id: 2,
        image: review2,
        alt: "Customer review screenshot 2"
    },
    {
        id: 3,
        image: review3,
        alt: "Customer review screenshot 3"
    },
    {
        id: 4,
        image: review4,
        alt: "Customer review screenshot 4"
    },
    {
        id: 5,
        image: review5,
        alt: "Customer review screenshot 5"
    },
    {
        id: 6,
        image: review6,
        alt: "Customer review screenshot 6"
    },
    {
        id: 7,
        image: review7,
        alt: "Customer review screenshot 7"
    },
    {
        id: 8,
        image: review8,
        alt: "Customer review screenshot 8"
    }
];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Auto-advance review images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReviewImage((prev) => (prev + 1) % reviewImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviewImages.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See how we've helped businesses like yours achieve 
            remarkable growth through strategic digital marketing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Testimonial Carousel */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
              <Quote className="w-12 h-12 text-blue-400 mb-6" />
              
              <div className="mb-8">
                <div className="flex mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-white text-lg md:text-xl leading-relaxed mb-6 font-light">
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
                  {testimonials[currentTestimonial].results}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full border-4 border-blue-400 mr-4"
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-blue-200">
                      {testimonials[currentTestimonial].position}
                    </p>
                    <p className="text-blue-300 text-sm">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Progress indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-blue-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Review Screenshots Showcase */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Real Reviews, Real Results
              </h3>
              <p className="text-blue-200">
                Screenshots from our satisfied clients across all platforms
              </p>
            </div>

            {/* Main Review Image */}
            <div className="relative group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/20 hover:scale-105 transition-all duration-500">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden relative">
                  <img
                    src={reviewImages[currentReviewImage].image}
                    alt={reviewImages[currentReviewImage].alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    {/* <Play className="w-16 h-16 text-white/80" /> */}
                  </div>
                </div>
                {/* REVEIW TILTES */}
                {/* <div className="mt-4 text-center">
                  <span className="text-blue-300 font-semibold">
                    {reviewImages[currentReviewImage].platform}
                  </span>
                </div> */}
              </div>
            </div>

            {/* Review Thumbnails */}
            <div className="grid grid-cols-2 gap-4">
              {reviewImages.slice(0, 4).map((review, index) => (
                <div
                  key={review.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-3 cursor-pointer transition-all duration-300 border ${
                    index === currentReviewImage 
                      ? 'border-blue-400 scale-105' 
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  onClick={() => setCurrentReviewImage(index)}
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
                    <img
                      src={review.image}
                      alt={review.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <p className="text-white text-xs mt-2 text-center font-medium">
                    {review.platform}
                  </p> */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "98%", label: "Success Rate" },
            { number: "10,000+", label: "Leads Generated" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Take Your Business To Next Level?
          </h3>
          <Link to='/services' className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 transform">
            Select your required service today.
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;