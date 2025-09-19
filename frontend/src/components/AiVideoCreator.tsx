import { useEffect, useState } from "react";
import { FaClock, FaUsers, FaCertificate, FaCamera, FaStar, FaPlay, FaArrowRight, FaMobile, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

const AIVideoCreatorPromo = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [enrollCount, setEnrollCount] = useState(178);
  const [isVisible, setIsVisible] = useState(false);

  const courseHighlights = [
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "६ दिन मात्र",
      description: "दैनिक १.५ घण्टा Live Class",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "सबैका लागि",
      description: "Students, Freelancers, Housewives, Business Owners",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <FaCertificate className="w-6 h-6" />,
      title: "Certificate",
      description: "Completion प्रमाणपत्र सहित",
      color: "from-green-500 to-teal-500"
    }
  ];

  const skillsYouLearn = [
    { skill: "AI Script Writing", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop" },
    { skill: "Prompt Engineering", image: "https://images.unsplash.com/photo-1665686300209-92f2189e50a2?w=300&h=200&fit=crop" },
    { skill: "AI Video Creation", image: "https://images.unsplash.com/photo-1590608897129-79da98d1592a?w=300&h=200&fit=crop" },
    { skill: "Editing & Branding", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=300&h=200&fit=crop" }
  ];

  const testimonials = [
    {
      name: "Bikram Pokhreal",
      role: "Freelancer",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "यो ६ दिनको कोर्स लिएपछि मैले Fiverr मा आफ्नो पहिलो AI Video Ad Service सुरु गरेकी छु।"
    },
    {
      name: "Dipesh Tamang",
      role: "Student",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/43.jpg",
      text: "CapCut र Canva मा मैले आफैलाई ब्रान्ड बनाउन सकेँ। अब म local businesses का लागि ads बनाउन थालेको छु।"
    },
    {
      name: "Aleesa Acharya",
      role: "Social Media Manager",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      text: "VOE 3 ले video बनाउन सजिलो बनाइदियो। TikTok campaigns मा immediate results पाएँ।"
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    // Animate enrollment counter
    const counterInterval = setInterval(() => {
      setEnrollCount(prev => prev + Math.floor(Math.random() * 3));
    }, 8000);

    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      clearInterval(counterInterval);
      clearInterval(testimonialInterval);
    };
  }, [testimonials.length]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-tl from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative px-6 sm:px-12 lg:px-20 py-16">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full mb-8 shadow-lg animate-bounce">
            <FaCamera className="w-5 h-5" />
            <span className="font-semibold">AI Video Creator बन्नुहोस्!</span>
            <div className="bg-white text-red-500 px-2 py-1 rounded-full text-xs font-bold ml-2">
              {enrollCount}+ Enrolled
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            <span className="text-white">६ दिनमै सिक्नुहोस्</span><br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              AI Video Creation
            </span><br />
            <span className="text-blue-300">VOE 3, Canva, CapCut बाट</span>
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ads, Graphics, Logo देखि Professional Video सम्म - 
            <span className="font-semibold text-white"> सबै सिक्नुहोस् र कमाउन सुरु गर्नुहोस्!</span>
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content - Success Stories */}
          <div className="space-y-8">
            {/* Main Success Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="Students learning AI video creation"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-white font-semibold">4.9/5 Rating</span>
                  </div>
                  <p className="text-white font-medium text-lg leading-relaxed">
                    "यो कोर्सले मलाई professional ads बनाउन सिकायो। अहिले मैले मेरो पहिलो client project complete गरिसकेको छु!"
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials Slider */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">विद्यार्थीहरूका अनुभव</h3>
              
              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={`transition-all duration-500 ${
                      index === currentTestimonial ? 'opacity-100 visible' : 'opacity-0 invisible absolute inset-0'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white/30"
                      />
                      <div>
                        <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-blue-200 text-sm">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="w-3 h-3 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-blue-100 text-lg italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                ))}
              </div>

              {/* Testimonial Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{enrollCount}+</div>
                <div className="text-blue-200 text-sm">Students</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-3xl font-bold text-green-400 mb-2">4.9</div>
                <div className="text-blue-200 text-sm">Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-blue-200 text-sm">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Course Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {courseHighlights.map((highlight, index) => (
                <div 
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group`}
                >
                  <div className={`bg-gradient-to-r ${highlight.color} p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
                    <div className="text-white">
                      {highlight.icon}
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{highlight.title}</h3>
                  <p className="text-blue-200 text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">के-के सिक्नुहुन्छ?</h3>
              <div className="grid grid-cols-2 gap-4">
                {skillsYouLearn.map((item, index) => (
                  <div 
                    key={index}
                    className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <img 
                      src={item.image} 
                      alt={item.skill}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white font-bold text-lg">{item.skill}</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaPlay className="w-3 h-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              🚀 ६ दिनमै AI Video Expert बन्नुहोस् - अहिले नै जोइन गर्नुहोस्!
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-red-600 px-10 py-4 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200 flex items-center gap-3">
                <FaMobile className="w-5 h-5" />
                Call: +977 986-2282235
              </button>
              <Link to="/course" className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <FaVideo className="w-4 h-4" />
                कोर्स विवरण हेर्नुहोस्
                <FaArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AIVideoCreatorPromo;
