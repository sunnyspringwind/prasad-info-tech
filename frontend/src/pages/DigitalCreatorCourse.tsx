import { useState, useEffect } from 'react';
import { Camera, Video, Users, Award, Clock, MapPin, Phone, Mail, Globe, Star, CheckCircle, PlayCircle, Smartphone, Laptop, Wifi } from 'lucide-react';
import PrasadTechHeader from '../components/Header';
import Footer from '../components/Footer';

interface ModuleExpansionState {
  [key: number]: boolean;
}

const DigitalCreatorCourse = () => {
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
      title: "Digital Creator परिचय", 
      icon: <Users className="w-5 h-5" />, 
      subtopics: [
        { name: "Digital Creator को परिभाषा", icon: "💡" },
        { name: "Content Creation को फाइदाहरू", icon: "📈" },
        { name: "विभिन्न Platform को परिचय", icon: "🌐" }
      ]
    },
    { 
      day: 2, 
      title: "मोबाइल/ल्यापटप प्रयोग", 
      icon: <Smartphone className="w-5 h-5" />, 
      subtopics: [
        { name: "Camera Settings को परिचय", icon: "⚙️" },
        { name: "Apps Download र Setup", icon: "📱" },
        { name: "File Management सिक्ने", icon: "📁" }
      ]
    },
    { 
      day: 3, 
      title: "फोटो खिच्ने तरिका", 
      icon: <Camera className="w-5 h-5" />, 
      subtopics: [
        { name: "Lighting र Composition", icon: "💡" },
        { name: "Portrait र Landscape Mode", icon: "📸" },
        { name: "Different Angles सिक्ने", icon: "🔄" }
      ]
    },
    { 
      day: 4, 
      title: "मोबाइल फोटोग्राफी अभ्यास", 
      icon: <Camera className="w-5 h-5" />, 
      subtopics: [
        { name: "Product Photography", icon: "📦" },
        { name: "Food Photography", icon: "🍽️" },
        { name: "Nature Photography", icon: "🌿" }
      ]
    },
    { 
      day: 5, 
      title: "फोटो एडिटिङ्ग (Canva/Snapseed)", 
      icon: <Star className="w-5 h-5" />, 
      subtopics: [
        { name: "Basic Color Correction", icon: "🎨" },
        { name: "Text र Graphics थप्ने", icon: "✍️" },
        { name: "Filter र Effects प्रयोग", icon: "✨" }
      ]
    },
    { 
      day: 6, 
      title: "भिडियो खिच्ने आधारभूत तरिका", 
      icon: <Video className="w-5 h-5" />, 
      subtopics: [
        { name: "Video Resolution र Quality", icon: "🎥" },
        { name: "Stable Shot लिने तरिका", icon: "🎯" },
        { name: "Audio Recording Tips", icon: "🎵" }
      ]
    },
    { 
      day: 7, 
      title: "मोबाइल भिडियो एडिटिङ्ग (CapCut/InShot)", 
      icon: <Video className="w-5 h-5" />, 
      subtopics: [
        { name: "Video Trimming र Cutting", icon: "✂️" },
        { name: "Transition Effects थप्ने", icon: "🔄" },
        { name: "Background Music थप्ने", icon: "🎶" }
      ]
    },
    { 
      day: 8, 
      title: "ल्यापटप एडिटिङ्ग (Filmora/Clipchamp)", 
      icon: <Laptop className="w-5 h-5" />, 
      subtopics: [
        { name: "Advanced Editing Tools", icon: "🛠️" },
        { name: "Multiple Video Tracks", icon: "📹" },
        { name: "Export Settings", icon: "📤" }
      ]
    },
    { 
      day: 9, 
      title: "Reels/Shorts बनाउने", 
      icon: <PlayCircle className="w-5 h-5" />, 
      subtopics: [
        { name: "Vertical Video बनाउने", icon: "📱" },
        { name: "Trending Effects प्रयोग", icon: "🔥" },
        { name: "Quick Editing Tips", icon: "⚡" }
      ]
    },
    { 
      day: 10, 
      title: "Thumbnail र Title बनाउने", 
      icon: <Star className="w-5 h-5" />, 
      subtopics: [
        { name: "Eye-catching Thumbnail Design", icon: "👁️" },
        { name: "Clickable Title लेख्ने", icon: "📝" },
        { name: "A/B Testing बुझ्ने", icon: "📊" }
      ]
    },
    { 
      day: 11, 
      title: "Facebook/Instagram मा पोस्ट", 
      icon: <Users className="w-5 h-5" />, 
      subtopics: [
        { name: "Best Posting Times", icon: "⏰" },
        { name: "Hashtag Research", icon: "#️⃣" },
        { name: "Engagement बढाउने तरिका", icon: "❤️" }
      ]
    },
    { 
      day: 12, 
      title: "YouTube मा अपलोड", 
      icon: <PlayCircle className="w-5 h-5" />, 
      subtopics: [
        { name: "Channel Setup र Branding", icon: "📺" },
        { name: "Video Upload Process", icon: "⬆️" },
        { name: "SEO र Description लेख्ने", icon: "🔍" }
      ]
    },
    { 
      day: 13, 
      title: "Social Media सुरक्षा", 
      icon: <CheckCircle className="w-5 h-5" />, 
      subtopics: [
        { name: "Privacy Settings", icon: "🔒" },
        { name: "Copyright बुझ्ने", icon: "©️" },
        { name: "Fake News बचाउने", icon: "🚫" }
      ]
    },
    { 
      day: 14, 
      title: "अभ्यास दिन", 
      icon: <Clock className="w-5 h-5" />, 
      subtopics: [
        { name: "Complete Project बनाउने", icon: "🎬" },
        { name: "Peer Review Session", icon: "👥" },
        { name: "Final Touches थप्ने", icon: "✨" }
      ]
    },
    { 
      day: 15, 
      title: "प्रदर्शन र Feedback", 
      icon: <Award className="w-5 h-5" />, 
      subtopics: [
        { name: "Project Presentation", icon: "🎤" },
        { name: "Individual Feedback", icon: "💬" },
        { name: "Certificate Distribution", icon: "🏆" }
      ]
    }
  ];

  const benefits = [
    "फेसबुक, इन्स्टाग्राम, युट्युबमा आफैं कंटेन्ट बनाउने सीप",
    "बढेको आत्मविश्वास र रचनात्मकता",
    "Prasad Info Tech को प्रमाणित Certificate",
    "भविष्यमा अगाडि बढ्न व्यावहारिक सल्लाह"
  ];

  const requirements = [
    { icon: <Smartphone className="w-6 h-6" />, text: "क्यामेरा भएको मोबाइल (Android वा iPhone)" },
    { icon: <Laptop className="w-6 h-6" />, text: "ल्यापटप – ऐच्छिक तर सिफारिस गरिन्छ" },
    { icon: <Wifi className="w-6 h-6" />, text: "राम्रो इन्टरनेट जडान" },
    { icon: <Clock className="w-6 h-6" />, text: "दैनिक अभ्यासको लागि समय" }
  ];

  const targetAudience = [
    "शुरुआती जसले कहिले एडिटिङ्ग गरेनन्",
    "१६ देखि ६०+ वर्षका जो कोही",
    "सानो व्यवसाय चलाउने र उत्पादन प्रमोट गर्न चाहने",
    "गृहिणी, विद्यार्थी, रिटायर्ड व्यक्ति",
    "युट्युब/फेसबुक/इन्स्टाग्रामबाट कमाउन चाहने",
    "आफ्ना आइडिया, कला, वा शौक शेयर गर्न चाहने"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
     <PrasadTechHeader/>

      {/* Hero Section */}
      <section className={`py-16 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
            <Camera className="w-5 h-5" />
            <span className="font-semibold">Digital Creator Starter Camp</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">१५ दिनमा</span> आफ्नो पहिलो<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              YouTube भिडियो तयार पार्नुहोस्
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Photo & Video Creation for Beginners - कुनै टेक्निकल अनुभव नभए पनि 
            फेसबुक, इन्स्टाग्राम, युट्युबका लागि प्रोफेसनल कंटेन्ट बनाउन सिक्नुहोस्
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
            href="tel:+977 986-2282235"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg text-xl font-bold transition-colors shadow-lg"
          >
            <Phone className="w-6 h-6 mr-3" />
            अहिले नै Call गर्नुहोस्
          </a>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              <PlayCircle className="w-5 h-5 inline mr-2" />
              Free Demo हेर्नुहोस्
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-full w-16 h-16 mx-auto mb-6 shadow-lg">
                  <Clock className="w-8 h-8 text-white mx-auto" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">१५ दिन मात्र</h3>
                <p className="text-gray-600 mb-4">दैनिक १ घण्टा अभ्यास</p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-700 font-semibold">⏰ लचिलो समय तालिका</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-full -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full w-16 h-16 mx-auto mb-6 shadow-lg">
                  <Users className="w-8 h-8 text-white mx-auto" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">सबैका लागि</h3>
                <p className="text-gray-600 mb-4">१६-६०+ वर्ष, कुनै अनुभव चाहिँदैन</p>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm text-purple-700 font-semibold">👥 व्यक्तिगत मार्गदर्शन</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-full -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-green-500 to-green-700 p-4 rounded-full w-16 h-16 mx-auto mb-6 shadow-lg">
                  <Award className="w-8 h-8 text-white mx-auto" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">Certificate</h3>
                <p className="text-gray-600 mb-4">कोर्स पूरा गरेपछि प्रमाणपत्र</p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-700 font-semibold">🏆 प्रमाणित योग्यता</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-4 mb-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center space-x-1 bg-gray-100 rounded-lg p-1">
            {[
              { id: 'course', label: 'कोर्स विवरण' },
              { id: 'curriculum', label: 'पाठ्यक्रम' },
              { id: 'benefits', label: 'फाइदाहरू' },
              { id: 'contact', label: 'सम्पर्क' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
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
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600">यो कोर्स कसका लागि?</h3>
                </div>
                
                {/* Visual placeholder for target audience illustration */}
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 mb-6 border-2 border-dashed border-blue-300">
                  <div className="text-center">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-blue-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-700" />
                      </div>
                      <p className="text-xs font-semibold text-blue-700">Students</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-purple-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Star className="w-6 h-6 text-purple-700" />
                      </div>
                      <p className="text-xs font-semibold text-purple-700">Homemakers</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-green-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Laptop className="w-6 h-6 text-green-700" />
                      </div>
                      <p className="text-xs font-semibold text-green-700">Professionals</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 italic">👥 Target Audience Visualization</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {targetAudience.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-green-100 p-1 rounded-full">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-8 shadow-lg border-t-4 border-purple-500">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Smartphone className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-600">के–के चाहिन्छ?</h3>
                </div>
                
                {/* Visual placeholder for equipment illustration */}
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-6 border-2 border-dashed border-purple-300">
                  <div className="text-center">
                    <div className="flex justify-center space-x-6 mb-4">
                      <div className="text-center">
                        <div className="w-16 h-20 bg-gray-800 rounded-lg mx-auto mb-2 relative">
                          <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
                        </div>
                        <p className="text-xs font-semibold text-gray-600">📱 Mobile</p>
                      </div>
                      <div className="text-center">
                        <div className="w-20 h-12 bg-gray-700 rounded mx-auto mb-2"></div>
                        <p className="text-xs font-semibold text-gray-600">💻 Laptop</p>
                      </div>
                      <div className="text-center">
                        <div className="flex space-x-1 mb-2">
                          <div className="w-2 h-8 bg-green-500 rounded-full"></div>
                          <div className="w-2 h-6 bg-green-400 rounded-full"></div>
                          <div className="w-2 h-4 bg-green-300 rounded-full"></div>
                        </div>
                        <p className="text-xs font-semibold text-gray-600">📶 Internet</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 italic">🛠️ Required Equipment Visualization</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-purple-100 p-3 rounded-lg">
                        {req.icon}
                      </div>
                      <span className="text-gray-700 font-medium flex-1">{req.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Curriculum */}
          {activeTab === 'curriculum' && (
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-lg animate-fadeIn">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-blue-600 mb-4">१५ दिनको पाठ्यक्रम</h3>
                <p className="text-gray-600 text-lg">प्रत्येक दिन नयाँ सीप सिक्नुहोस् र अभ्यास गर्नुहोस्</p>
              </div>
              
              {/* Course progression visualization */}
              <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-xl p-8 mb-8 border-2 border-dashed border-blue-300">
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-700 mb-6">📈 Learning Journey Progression</h4>
                  <div className="flex justify-center space-x-8 mb-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-2 relative">
                        <Camera className="w-8 h-8 text-white" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">1</span>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-red-700">Photo Basics</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-blue-400"></div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-2 relative">
                        <Video className="w-8 h-8 text-white" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">2</span>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-blue-700">Video Creation</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-green-400"></div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-2 relative">
                        <PlayCircle className="w-8 h-8 text-white" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">3</span>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-green-700">Publishing</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic">🎯 Week-by-week skill development path</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseModules.map((module, index) => (
                  <div key={index} className={`relative rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer group ${
                    index < 5 ? 'bg-gradient-to-br from-red-50 to-red-100 border-l-4 border-red-500' :
                    index < 10 ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500' :
                    'bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500'
                  }`}>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-10 overflow-hidden rounded-tr-xl">
                      <div className={`w-full h-full ${
                        index < 5 ? 'bg-red-300' :
                        index < 10 ? 'bg-blue-300' :
                        'bg-green-300'
                      } transform rotate-45 translate-x-6 -translate-y-6`}></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div 
                        className="flex items-center justify-between mb-4"
                        onClick={() => toggleModule(module.day)}
                      >
                        <div className={`text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg ${
                          index < 5 ? 'bg-gradient-to-r from-red-500 to-red-600' :
                          index < 10 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                          'bg-gradient-to-r from-green-500 to-green-600'
                        }`}>
                          {module.day}
                        </div>
                        <div className={`p-2 rounded-lg ${
                          index < 5 ? 'bg-red-200 text-red-600' :
                          index < 10 ? 'bg-blue-200 text-blue-600' :
                          'bg-green-200 text-green-600'
                        }`}>
                          {module.icon}
                        </div>
                      </div>
                      
                      <div onClick={() => toggleModule(module.day)}>
                        <h4 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                          {module.title}
                        </h4>
                        
                        {/* Dropdown indicator */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs text-gray-500">
                            {module.subtopics.length} topics included
                          </span>
                          <div className={`transform transition-transform duration-200 ${
                            expandedModules[module.day] ? 'rotate-180' : ''
                          }`}>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Expandable subtopics */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        expandedModules[module.day] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="bg-white rounded-lg p-4 mt-3 space-y-3 shadow-inner">
                          <h5 className="font-semibold text-sm text-gray-700 mb-3">विषयसूची:</h5>
                          {module.subtopics.map((subtopic, subIndex) => (
                            <div key={subIndex} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                              <span className="text-lg">{subtopic.icon}</span>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-700">{subtopic.name}</p>
                              </div>
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            </div>
                          ))}
                          
                          {/* Visual illustration placeholder for each module */}
                          <div className={`mt-4 p-3 rounded-lg border-2 border-dashed ${
                            index < 5 ? 'border-red-300 bg-red-50' :
                            index < 10 ? 'border-blue-300 bg-blue-50' :
                            'border-green-300 bg-green-50'
                          }`}>
                            <div className="text-center">
                              <div className="flex justify-center space-x-2 mb-2">
                                {module.subtopics.map((_, iconIndex) => (
                                  <div key={iconIndex} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                                    index < 5 ? 'bg-red-200' :
                                    index < 10 ? 'bg-blue-200' :
                                    'bg-green-200'
                                  }`}>
                                    {module.subtopics[iconIndex].icon}
                                  </div>
                                ))}
                              </div>
                              <p className="text-xs text-gray-500 italic">🎯 Practical exercises included</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Week indicator */}
                      <div className="mt-3">
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                          index < 5 ? 'bg-red-200 text-red-800' :
                          index < 10 ? 'bg-blue-200 text-blue-800' :
                          'bg-green-200 text-green-800'
                        }`}>
                          {index < 5 ? 'Week 1: Basics' : index < 10 ? 'Week 2: Advanced' : 'Week 3: Publishing'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Course completion visualization */}
              <div className="mt-12 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-8 border-2 border-dashed border-yellow-400">
                <div className="text-center">
                  <div className="flex justify-center space-x-4 mb-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mb-3">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      <p className="font-bold text-yellow-800">Certificate</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mb-3">
                        <Camera className="w-10 h-10 text-white" />
                      </div>
                      <p className="font-bold text-purple-800">Portfolio</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-3">
                        <PlayCircle className="w-10 h-10 text-white" />
                      </div>
                      <p className="font-bold text-green-800">First Video</p>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">🎉 Course Completion Rewards</h4>
                  <p className="text-gray-600">१५ दिन पछि तपाईं पाउनुहुनेछ यी सबै!</p>
                </div>
              </div>
            </div>
          )}

          {/* Benefits */}
          {activeTab === 'benefits' && (
            <div className="animate-fadeIn">
              <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
                <h3 className="text-3xl font-bold mb-8 text-center text-blue-600">कोर्स पछि पाउने फाइदाहरू</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-800">{benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">तपाईं तयार हुनुहुन्छ?</h3>
                <p className="text-lg mb-6">आफ्नो Digital Creator यात्रा सुरु गर्न आजै नामांकन गर्नुहोस्</p>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                  <Phone className="w-5 h-5 inline mr-2" />
                  अहिले नै Call गर्नुहोस्
                </button>
              </div>
            </div>
          )}

          {/* Contact */}
          {activeTab === 'contact' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fadeIn">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">सम्पर्क जानकारी</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Prasad Info Tech</p>
                      <p className="text-gray-600">Kathmandu, Nepal</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">+977 986-2282235</p>
                      <p className="text-gray-600">अफरको लागि सम्पर्क गर्नुहोस्</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                    <p className="text-blue-600">prasadinfotech.netlify.app</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <p className="text-blue-600">prasadinfotechinquiry@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Quick Inquiry</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="तपाईंको नाम"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="फोन नम्बर"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>In-person (Itahari)</option>
                    <option>Online (Zoom)</option>
                  </select>
                  <textarea
                    placeholder="तपाईंको प्रश्न वा टिप्पणी"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Message पठाउनुहोस्
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">सीट सीमित छ!</h3>
          <p className="text-xl mb-8">आफ्नो स्थान सुरक्षित गर्न आजै सम्पर्क गर्नुहोस्</p>
          <a
            href="tel:+977 986-2282235"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg text-xl font-bold transition-colors shadow-lg"
          >
            <Phone className="w-6 h-6 mr-3" />
            अहिले नै Call गर्नुहोस्
          </a>
        </div>
      </footer>
      <Footer/>

      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default DigitalCreatorCourse;