import { useState, useEffect } from 'react';
import { Camera, Video, Award, Clock, CheckCircle, PlayCircle, Smartphone, Laptop, Wifi, Mail, Phone, MapPin, Globe, Star } from 'lucide-react';

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
  const [_enrollCount, setEnrollCount] = useState(127);
  const [expandedModules, setExpandedModules] = useState<ModuleExpansionState>({});

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
              { id: 'contact', label: 'Contact' }
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
                  <div key={module.day} className="bg-white p-6 rounded-xl shadow-lg cursor-pointer" onClick={() => toggleModule(module.day)}>
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-bold text-gray-800">{module.title}</h4>
                      <div className={`transform transition-transform ${expandedModules[module.day] ? 'rotate-180' : ''}`}>
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <div className={`transition-all overflow-hidden ${expandedModules[module.day] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <ul className="list-disc pl-5 text-gray-700">
                        {module.subtopics.map((sub, idx) => <li key={idx}>{sub}</li>)}
                      </ul>
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

          {/* Contact */}
          {activeTab === 'contact' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fadeIn">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4"><MapPin className="w-6 h-6 text-blue-600" /><span>Kathmandu, Nepal</span></div>
                  <div className="flex items-center space-x-4"><Phone className="w-6 h-6 text-blue-600" /><span>+977 986-2282235</span></div>
                  <div className="flex items-center space-x-4"><Mail className="w-6 h-6 text-blue-600" /><span>prasadinfotechinquiry@gmail.com</span></div>
                  <div className="flex items-center space-x-4"><Globe className="w-6 h-6 text-blue-600" /><span>prasadinfotech.netlify.app</span></div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Quick Inquiry</h3>
                <div className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                  <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>In-person</option>
                    <option>Online</option>
                  </select>
                  <textarea placeholder="Your Question or Comment" rows={4} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">Send Message</button>
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
