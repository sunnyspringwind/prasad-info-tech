import { useState, useEffect } from 'react';
import { Camera, Video, Award, Clock, CheckCircle, PlayCircle, Smartphone, Laptop, Wifi, Phone, Star } from 'lucide-react';
import { courseOverview } from '../data/courseData';
// import internet from "../assets/img/digtel/internet.png";
// import laptop from "../assets/img/digtel/laptop.png";
// import mobile from "../assets/img/digtel/mobile.webp";
// import houseworker from "../assets/img/digtel/houseworker.jpg";
// import professional from "../assets/img/digtel/professional.png";
// import student from "../assets/img/digtel/student.avif";

interface ModuleExpansionState {
  [key: number]: boolean;
}

const AIVideoCourse = () => {
  const [activeTab, setActiveTab] = useState('course');
  const [isVisible, setIsVisible] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_enrollCount, setEnrollCount] = useState(127);
  const [expandedModules, setExpandedModules] = useState<ModuleExpansionState>({});
                    const {originalPrice, discount = 0} = courseOverview[1];
                 const discountedPrice =   Math.round(originalPrice * (1 - discount / 100))


  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setEnrollCount(prev => prev + Math.floor(Math.random() * 2));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const toggleModule = (moduleDay: number) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleDay]: !prev[moduleDay]
    }));
  };

  const courseModules = [
    { 
      day: 1, 
      title: "Introduction to AI Video Creation", 
      icon: <Camera className="w-5 h-5" />, 
      subtopics: [
        "Why AI-powered video ads are the future",
        "Overview of VOE 3, CapCut, Canva, ChatGPT",
        "Setup VOE 3 Premium free access",
        "Different earning models: Freelancing, TikTok, YouTube Shorts"
      ]
    },
    { 
      day: 2, 
      title: "Script Writing & Idea Generation with AI", 
      icon: <Video className="w-5 h-5" />, 
      subtopics: [
        "Brainstorm ad ideas using ChatGPT & VOE 3",
        "Script formula: Hook → Problem → Solution → CTA",
        "Customizing scripts for TikTok, Instagram, YouTube Shorts",
        "Practical: Generate sample ad script"
      ]
    },
    { 
      day: 3, 
      title: "Prompt Engineering for Creative Ads", 
      icon: <Star className="w-5 h-5" />, 
      subtopics: [
        "Understanding Prompts and their importance",
        "Formula: Role + Objective + Style + Details",
        "Create brand logos, product mockups, ad visuals",
        "Practical: Write & test prompts"
      ]
    },
    { 
      day: 4, 
      title: "Video Generation with VOE 3", 
      icon: <PlayCircle className="w-5 h-5" />, 
      subtopics: [
        "Step-by-step VOE 3 video creation",
        "Tips to use VOE 3 Premium features for free",
        "Combine script + images + music",
        "Practical: Generate 30–60 sec ad video"
      ]
    },
    { 
      day: 5, 
      title: "Editing & Polishing Your Video", 
      icon: <Video className="w-5 h-5" />, 
      subtopics: [
        "Editing basics: transitions, captions, subtitles",
        "Canva Pro for branding: logos, text animations, outros",
        "CapCut Pro for professional finishing: smart cuts, voiceovers",
        "Practical: Make VOE 3 video social media-ready"
      ]
    },
    { 
      day: 6, 
      title: "Monetization & Farewell Program", 
      icon: <Award className="w-5 h-5" />, 
      subtopics: [
        "Where to earn: Facebook, TikTok, YouTube, local ads",
        "Build your first portfolio with 2–3 sample ads",
        "Pitch clients and charge for services",
        "Farewell: Project showcase + certification"
      ]
    }
  ];

  const benefits = [
    "Write scripts & prompts for video ads",
    "Create logos, graphics, and branding content",
    "Generate complete video ads using VOE 3",
    "Edit & polish ads with Canva and CapCut",
    "Start earning as a freelance video ad creator"
  ];

  const requirements = [
    { icon: <Smartphone className="w-6 h-6" />, text: "क्यामेरा भएको मोबाइल (Android वा iPhone)" },
    { icon: <Laptop className="w-6 h-6" />, text: "ल्यापटप – ऐच्छिक तर सिफारिस गरिन्छ" },
    { icon: <Wifi className="w-6 h-6" />, text: "राम्रो इन्टरनेट जडान" },
    { icon: <Clock className="w-6 h-6" />, text: "दैनिक 1.5 घण्टा कक्षा र अभ्यास समय" }
  ];

  const targetAudience = [
    "Students, freelancers, social media managers",
    "Business owners and housewives",
    "Anyone wanting to earn online through video creation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className={`py-16 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
            <Camera className="w-5 h-5" />
            <span className="font-semibold">AI Video Making Mastery with VOE 3</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">6 Days</span> Bootcamp: <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Zero to Pro in AI Video Creation
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Master AI-powered video creation using VOE 3, CapCut, Canva, and ChatGPT.
            Create professional video ads, logos & graphics, and start earning online.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+977 986-2282235"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg text-xl font-bold transition-colors shadow-lg"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call Now
            </a>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              <PlayCircle className="w-5 h-5 inline mr-2" />
              Free Demo
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-4 mb-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center space-x-1 bg-gray-100 rounded-lg p-1">
            {[
              { id: 'course', label: 'Course Details' },
              { id: 'curriculum', label: 'Curriculum' },
              { id: 'benefits', label: 'Outcomes' },
              { id: 'enroll', label: 'Enroll Now' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-600 hover:text-blue-600'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="px-4 mb-16">
        <div className="container mx-auto">
          {/* Course Details */}
          {activeTab === 'course' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fadeIn">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-lg border-t-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Who should join?</h3>
                {targetAudience.map((aud, idx) => (
                  <div key={idx} className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{aud}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-8 shadow-lg border-t-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Requirements</h3>
                {requirements.map((req, idx) => (
                  <div key={idx} className="flex items-center space-x-3 mb-3">
                    {req.icon}
                    <span>{req.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Curriculum */}
          {activeTab === 'curriculum' && (
            <div className="animate-fadeIn">
              <h3 className="text-3xl font-bold text-center text-blue-600 mb-6">6-Day Curriculum</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseModules.map((module) => (
                  <div key={module.day} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => toggleModule(module.day)}>
                    {/* Day Indicator Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-white/20 rounded-full p-2">
                            <span className="text-lg font-bold">Day {module.day}</span>
                          </div>
                          <div className="text-white/90">
                            {module.icon}
                          </div>
                        </div>
                        <div className={`transform transition-transform ${expandedModules[module.day] ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Module Content */}
                    <div className="p-6">
                      <h4 className="font-bold text-gray-800 mb-3 text-lg">{module.title}</h4>
                      <div className={`transition-all overflow-hidden ${expandedModules[module.day] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <ul className="space-y-2 text-gray-700">
                          {module.subtopics.map((sub, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm leading-relaxed">{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Collapse indicator when closed */}
                      {!expandedModules[module.day] && (
                        <div className="mt-3 text-blue-600 text-sm font-medium">
                          Click to view topics →
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits / Outcomes */}
          {activeTab === 'benefits' && (
            <div className="animate-fadeIn grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <span>{benefit}</span>
                </div>
              ))}
              <div className="col-span-full bg-yellow-50 p-6 rounded-xl border-2 border-dashed border-yellow-400 text-gray-700 mt-6">
                <h4 className="font-bold mb-2">Terms & Conditions</h4>
                <p>Practical skills will be taught, but income is not guaranteed. Student effort, practice, and marketing determine success. Fees are non-refundable once course starts.</p>
              </div>
            </div>
          )}

          {/* Enroll Now */}
          {activeTab === 'enroll' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fadeIn">
              {/* Enrollment Form */}
              <div className="bg-white rounded-xl p-8 shadow-lg order-2 lg:order-1">
                <div className="text-center mb-8">
                  <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-4">
                    <Award className="w-12 h-12 text-blue-600 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Enroll in AI Video Creator Course</h3>
                  <p className="text-gray-600">Fill out the form to secure your spot in our 6-day intensive program</p>
                </div>

                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  // Redirect to payment page with course details
                  const formData = new FormData(e.target as HTMLFormElement);
                  const enrollmentData = {
                    course: 'AI Video Creator',
                    price: (discount ? discountedPrice : originalPrice),
                    originalPrice: originalPrice,
                    duration: '6 days',
                    studentName: formData.get('studentName'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    enrollmentDate: new Date().toISOString()
                  };
                  
                  // Store enrollment data and redirect to payment
                  localStorage.setItem('enrollmentData', JSON.stringify(enrollmentData));
                  window.location.href = '/payment-confirmation';
                }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="studentName"
                        required
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+977 98X-XXXXXXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Course Type</label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-300 transition-colors">
                        <input type="radio" name="preferredMode" value="online" className="text-blue-600" required />
                        <div className="ml-3">
                          <div className="font-semibold text-gray-700">Online</div>                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-blue-800">Course Guarantee</span>
                    </div>
                    <p className="text-sm text-blue-700">
                      30-day support after course completion • Certificate included • Practical skills-focused curriculum
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Proceed to Payment →
                  </button>
                </form>
                 <div className="col-span-full bg-yellow-50 p-6 rounded-xl border-2 border-dashed border-yellow-400 text-gray-700 mt-6">
                <h4 className="font-bold mb-2">Terms & Conditions</h4>
                <p>Practical skills will be taught, but income is not guaranteed. Student effort, practice, and marketing determine success. Fees are non-refundable once course starts.</p>
              </div>
              </div>

              {/* Course Summary */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg border border-blue-100 order-1 lg:order-2">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Course Summary</h3>
                  <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                      <Video className="w-5 h-5 text-blue-600 mr-2" />
                      AI Video Creator Bootcamp
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <div className="font-semibold text-gray-800">6 Days Intensive</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Daily Time:</span>
                        <div className="font-semibold text-gray-800">1.5 hours</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Level:</span>
                        <div className="font-semibold text-gray-800">Beginner to Pro</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Certificate:</span>
                        <div className="font-semibold text-gray-800">Included</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                    <h4 className="font-bold text-green-800 mb-4">Pricing Details</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Original Price:</span>
                        <span className="text-gray-500 line-through">{originalPrice}</span>
                      </div>
                     <div className="flex justify-between items-center">
                        <span className="text-gray-600">Discount ({discount}):</span>
                        <span className="text-green-600 font-semibold">{discountedPrice}</span>
                      </div>
                      <div className="border-t border-green-300 pt-2">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-gray-800">Final Price:</span>
                          <span className="text-2xl font-bold text-green-600">₹{originalPrice-discountedPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-800 mb-4">What's Included</h4>
                    <div className="space-y-3">
                      {[
                        'VOE 3 Premium access guide',
                        'Canva Pro techniques',
                        'CapCut advanced editing',
                        'ChatGPT prompt engineering',
                        'Portfolio building session',
                        'Monetization strategies'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-600 p-6 rounded-lg text-white text-center">
                    <h4 className="font-bold mb-2">Limited Time Offer</h4>
                    <p className="text-sm text-blue-100">Only 8 seats available for this batch!</p>
                  </div>
                </div>
              </div>
              
            </div>
          )}
        </div>
        
      </div>

      {/* CTA Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Seats are Limited!</h3>
          <p className="text-xl mb-8">Secure your spot today</p>
          <a
            href="tel:+977 986-2282235"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg text-xl font-bold transition-colors shadow-lg"
          >
            <Phone className="w-6 h-6 mr-3" />
            Call Now
          </a>
        </div>
      </footer>

      <style>{`
        .animate-fadeIn { animation: fadeIn 0.5s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default AIVideoCourse;
