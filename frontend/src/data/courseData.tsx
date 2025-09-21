import { FaClock, FaUsers, FaCertificate, FaTools } from "react-icons/fa";
import type { Course } from "../components/CoursePromoTemplete";
import type { CourseCardProps } from "../components/CourseCard";
import aivideocreator from "../assets/img/courses/aivideocreator.webp"
import digitalcreator from "../assets/img/courses/digitalcreator.webp"

export const courses: Course[] = [
  {
    title: (
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
        <span className="text-white">15 दिनमा बन्नुहोस्</span><br />
        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Digital Creator
        </span><br />
        <span className="text-blue-300">मोबाइलबाटै!</span>
      </h1>
    ),
    description: (
      <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
        फोटो, भिडियो बनाउने देखि Facebook, Instagram, YouTube मा अपलोड गर्ने सम्म - 
        <span className="font-semibold text-white"> सबै सिक्नुहोस्!</span>
      </p>
    ),
    courseHighlights: [
      {
        icon: <FaClock className="w-6 h-6" />,
        title: "15 दिन मात्र",
        description: "दैनिक 1 घण्टा अभ्यास",
        color: "from-red-500 to-pink-500"
      },
      {
        icon: <FaUsers className="w-6 h-6" />,
        title: "सबैका लागि",
        description: "कुनै अनुभव चाहिँदैन",
        color: "from-blue-500 to-purple-500"
      },
      {
        icon: <FaCertificate className="w-6 h-6" />,
        title: "Certificate",
        description: "प्रमाणित योग्यता",
        color: "from-green-500 to-teal-500"
      }
    ],
    skillsYouLearn: [
      { skill: "Photo खिच्ने", image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=200&fit=crop" },
      { skill: "Video बनाउने", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=300&h=200&fit=crop" },
      { skill: "Editing सिक्ने", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300&h=200&fit=crop" },
      { skill: "Social Media", image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=300&h=200&fit=crop" }
    ],
    testimonials: [
      {
        name: "सुनिता श्रेष्ठ",
        role: "गृहिणी, काठमाडौं",
        text: "15 दिनमै YouTube मा आफ्नो पहिलो भिडियो अपलोड गरें। अब घरबाटै कमाउने सपना देख्दैछु!",
        rating: 5,
        image: "https://www.lensnepal.com/files/profiles/sunita-thakur.jpg"
      },
      {
        name: "राम महत",
        role: "किसान, चितवन",
        text: "आफ्ना बालीको फोटो र भिडियो बनाएर अनलाइनमा बेच्न सिकें। धेरै फाइदा भयो।",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      {
        name: "अनिता पौडेल",
        role: "विद्यार्थी, पोखरा",
        text: "मोबाइलबाटै प्रोफेसनल भिडियो बनाउन सिकें। अब classmates हरू impressed छन्!",
        rating: 5,
        image: "https://www.nasc.org.np/sites/default/files/styles/150x150-people/public/images/Anita%20Poudel.jpg?itok=tDuK4T1z"
      }
    ],
    stats: {
      students : "128+",
      rating : "4.9",
      successRate : "98%" 
    },
    cta: {
      text: "कोर्स विवरण हेर्नुहोस्",
      link: "/courses/digital-creator",
        phone: "+977 986-2282235"
    }
  },
  {
    title: (
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
        <span className="text-white">6 दिनमै बन्नुहोस्</span><br />
        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          AI Video Creator
        </span><br />
        <span className="text-blue-300">VOE 3, Canva & CapCut संग</span>
      </h1>
    ),
    description: (
      <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
        🎬 <span className="font-semibold text-white">From Zero to Pro</span> — 
        AI-powered video ads, branding, editing & freelancing सिक्नुहोस्।
        <span className="font-semibold text-white"> 6 दिनमै आफ्नो करियर सुरु गर्नुहोस्!</span>
      </p>
    ),
    courseHighlights: [
      {
        icon: <FaClock className="w-6 h-6" />,
        title: "6 दिन मात्र",
        description: "दैनिक 1.5 घण्टा Live Class + Projects",
        color: "from-red-500 to-pink-500"
      },
      {
        icon: <FaTools className="w-6 h-6" />,
        title: "Premium Tools",
        description: "VOE 3 Premium, Canva Pro, CapCut Pro, ChatGPT",
        color: "from-yellow-500 to-orange-500"
      },
      {
        icon: <FaUsers className="w-6 h-6" />,
        title: "सबैका लागि",
        description: "Students, Freelancers, Social Media Managers, Housewives",
        color: "from-blue-500 to-purple-500"
      },
      {
        icon: <FaCertificate className="w-6 h-6" />,
        title: "Certificate",
        description: "Completion प्रमाणपत्र सहित",
        color: "from-green-500 to-teal-500"
      }
    ],
    skillsYouLearn: [
      { skill: "AI Script Writing & Storytelling", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop" },
      { skill: "Prompt Engineering for Ads & Logos", image: "https://images.unsplash.com/photo-1665686300209-92f2189e50a2?w=300&h=200&fit=crop" },
      { skill: "AI Video Creation with VOE 3", image: "https://images.unsplash.com/photo-1590608897129-79da98d1592a?w=300&h=200&fit=crop" },
      { skill: "Editing & Branding with CapCut + Canva", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=300&h=200&fit=crop" },
      { skill: "Monetization & Freelancing", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop" }
    ],
    testimonials: [
      {
        name: "Bikram Pokhreal",
        role: "Freelancer",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        text: "यो 6 दिनको कोर्स लिएपछि मैले Fiverr मा आफ्नो पहिलो AI Video Ad Service सुरु गरेकी छु।"
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
    ],
    stats: {
      students : "8+",
      rating : "4.9",
      successRate : "100%" 
    },
    cta: {
      text: "कोर्स विवरण हेर्नुहोस्",
      link: "/courses/ai-video-mastery",
      phone: "+977 986-2282235"
    }
  }
];



// course overview card data
export const courseOverview: CourseCardProps[] = [
  {
  title: "15 दिनमा बन्नुहोस् Digital Creator मोबाइलबाटै!",
  instructor: "Prakash Sharma",
  level: "Beginner",
  duration: "15 days (1 hr/day)",
  students: 128,
  originalPrice: 9999,
  discount: 50,
  technologies: ["Facebook", "Instagram", "YouTube", "Canva", "CapCut"],
  highlights: [
    "15 दिन मात्र — दैनिक 1 घण्टा अभ्यास",
    "सबैका लागि — कुनै अनुभव चाहिँदैन",
    "Certificate — प्रमाणित योग्यता सहित"
  ],
  category: "Digital Media",
  imageUrl: digitalcreator,
  courseLink: "/courses/digital-creator"
}
,
{
  title: "6 दिनमै बन्नुहोस् AI Video Creator VOE 3, Canva & CapCut संग",
  instructor: "Sujata Koirala",
  level: "Intermediate",
  duration: "6 days (1.5 hrs/day)",
  students: 8,
  originalPrice: 10999,
  discount: 37,
  technologies: ["VOE 3", "Canva Pro", "CapCut Pro", "ChatGPT"],
  highlights: [
    "6 दिन मात्र — दैनिक 1.5 घण्टा Live Class + Projects",
    "Premium Tools — VOE 3, Canva Pro, CapCut Pro, ChatGPT",
    "सबैका लागि — Students, Freelancers, Social Media Managers, Housewives",
    "Certificate — Completion प्रमाणपत्र सहित"
  ],
  category: "AI & Video",
  imageUrl: aivideocreator,
  courseLink: "/courses/ai-video-mastery"
}

]