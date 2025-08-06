import React, { useState } from 'react';
import { 
  Users, 
  Rocket, 
  Heart, 
  Briefcase, 
  Palette, 
  Code, 
  Search, 
  GraduationCap, 
  MapPin, 
  Clock, 
  DollarSign,
  Lock,
  CheckCircle,
  Lightbulb
} from 'lucide-react';
import Footer from '../components/Footer';
import PrasadTechHeader from '../components/Header';

const CareersPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const jobCategories = [
    { id: 'all', name: 'All Positions', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'design', name: 'Design', icon: <Palette className="w-4 h-4" /> },
    { id: 'development', name: 'Development', icon: <Code className="w-4 h-4" /> },
    { id: 'marketing', name: 'Marketing', icon: <Search className="w-4 h-4" /> },
    { id: 'internship', name: 'Internship', icon: <GraduationCap className="w-4 h-4" /> }
  ];

  const jobListings: Job[] = [
    {
      id: 1,
      title: 'Senior UI/UX Designer',
      description: 'We\'re looking for a creative and experienced UI/UX Designer to join our dynamic team and help create exceptional user experiences.',
      location: 'Kathmandu, Nepal',
      type: 'Full-time',
      experience: '3-5 years',
      salary: 'Competitive',
      category: 'design',
      status: 'closed',
      requirements: [
        'Expert in Figma, Adobe Creative Suite, and prototyping tools',
        'Strong portfolio showcasing web and mobile app designs',
        'Experience with user research and usability testing',
        'Knowledge of design systems and component libraries',
        'Excellent communication and collaboration skills'
      ],
      benefits: [
        'Competitive salary and benefits package',
        'Flexible working hours and remote work options',
        'Professional development opportunities',
        'Creative and collaborative work environment',
        'Health insurance and wellness programs'
      ]
    },
    {
      id: 2,
      title: 'Frontend Developer',
      description: 'Join our development team to build modern, responsive web applications using cutting-edge technologies.',
      location: 'Kathmandu, Nepal',
      type: 'Full-time',
      experience: '2-4 years',
      salary: 'Competitive',
      category: 'development',
      status: 'closed',
      requirements: [
        'Strong proficiency in React.js, JavaScript, and TypeScript',
        'Experience with modern CSS frameworks (Tailwind, Bootstrap)',
        'Knowledge of responsive design principles',
        'Familiarity with version control systems (Git)',
        'Understanding of web performance optimization'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Latest tools and technologies',
        'Continuous learning and training programs',
        'Flexible work arrangements',
        'Team building activities and events'
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      description: 'Help our clients grow their online presence through strategic digital marketing campaigns and SEO optimization.',
      location: 'Kathmandu, Nepal',
      type: 'Full-time',
      experience: '2-3 years',
      salary: 'Competitive',
      category: 'marketing',
      status: 'closed',
      requirements: [
        'Experience with Google Ads, Facebook Ads, and social media marketing',
        'Knowledge of SEO best practices and tools',
        'Analytical skills and experience with Google Analytics',
        'Content creation and copywriting abilities',
        'Project management and client communication skills'
      ],
      benefits: [
        'Competitive salary with performance-based incentives',
        'Professional certification opportunities',
        'Creative freedom and innovative projects',
        'Work with diverse clients and industries',
        'Regular team outings and celebrations'
      ]
    },
    {
      id: 4,
      title: 'UI/UX Design Intern',
      description: 'Perfect opportunity for design students and fresh graduates to gain real-world experience in UI/UX design.',
      location: 'Kathmandu, Nepal',
      type: 'Internship',
      experience: '0-1 year',
      salary: 'Stipend',
      category: 'internship',
      status: 'open',
      requirements: [
        'Basic knowledge of Figma and design principles',
        'Portfolio showcasing design projects (academic or personal)',
        'Eagerness to learn and grow',
        'Good communication skills',
        'Available for 3-6 months internship'
      ],
      benefits: [
        'Hands-on experience with real projects',
        'Mentorship from experienced designers',
        'Certificate upon completion',
        'Potential for full-time employment',
        'Flexible learning schedule'
      ]
    },
    {
      id: 5,
      title: 'Quality Assurance Engineer',
      description: 'Ensure the quality and reliability of our products through comprehensive testing and quality assurance processes.',
      location: 'Kathmandu, Nepal',
      type: 'Full-time',
      experience: '1-3 years',
      salary: 'Competitive',
      category: 'development',
      status: 'closed',
      requirements: [
        'Experience with manual and automated testing',
        'Knowledge of testing tools like Selenium, Cypress, or Jest',
        'Understanding of software development lifecycle',
        'Attention to detail and analytical thinking',
        'Experience with bug tracking and reporting tools'
      ],
      benefits: [
        'Competitive salary and benefits',
        'Professional development and training',
        'Modern testing tools and technologies',
        'Collaborative team environment',
        'Career growth opportunities'
      ]
    },
    {
      id: 6,
      title: 'Backend Developer',
      description: 'Build robust and scalable backend systems using modern technologies and best practices.',
      location: 'Kathmandu, Nepal',
      type: 'Full-time',
      experience: '2-4 years',
      salary: 'Competitive',
      category: 'development',
      status: 'closed',
      requirements: [
        'Strong proficiency in Node.js, Python, or PHP',
        'Experience with databases (MySQL, MongoDB, PostgreSQL)',
        'Knowledge of RESTful APIs and microservices',
        'Understanding of cloud platforms (AWS, Azure, GCP)',
        'Experience with version control and CI/CD pipelines'
      ],
      benefits: [
        'Competitive salary and benefits package',
        'Latest technologies and tools',
        'Professional development opportunities',
        'Flexible work arrangements',
        'Innovative project exposure'
      ]
    }
  ];

  const filteredJobs = activeFilter === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.category === activeFilter);

  interface Job {
    id: number;
    title: string;
    description: string;
    location: string;
    type: string;
    experience: string;
    salary: string;
    category: string;
    status: 'open' | 'closed';
    requirements: string[];
    benefits: string[];
  }
  
  const JobCard = ({ job }: { job: Job }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative">
      {/* Status Badge */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
        <div className={`px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2 shadow-md border ${
          job.status === 'open' 
            ? 'bg-green-100 text-green-700 border-green-300' 
            : 'bg-gray-200 text-gray-500 border-gray-300'
        }`}>
          {job.status === 'open' ? (
            <CheckCircle className="w-4 h-4 text-green-500" />
          ) : (
            <Lock className="w-4 h-4 text-gray-400" />
          )}
          {job.status === 'open' ? 'Vacancy Open' : 'Vacancy Closed'}
        </div>
      </div>

      <div className="p-8 pt-16">
        {/* Job Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
          <p className="text-gray-600 mb-4">{job.description}</p>
          
          {/* Job Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span>{job.experience}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <DollarSign className="w-4 h-4 text-blue-600" />
              <span>{job.salary}</span>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements:</h4>
          <ul className="space-y-2">
            {job.requirements.map((req, index) => (
              <li key={index} className="flex items-start space-x-2 text-gray-600">
                <span className="text-blue-600 mt-1">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
          <ul className="space-y-2">
            {job.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-2 text-gray-600">
                <span className="text-green-600 mt-1">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Apply Button */}
        <button
          className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-semibold transform transition-all duration-300 shadow-lg hover:shadow-xl ${
            job.status === 'open'
              ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={job.status === 'closed'}
        >
          {job.status === 'open' ? 'Apply Now' : 'Closed'}
        </button>
      </div>
    </div>
  );

  return (
    <>
    <PrasadTechHeader/>
    <div className="flex-grow">
      <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-blue-200">Team</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Be part of something extraordinary. Work with passionate professionals, cutting-edge technology, 
              and make a real impact in the digital world.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6" />
                <span className="text-lg">20+ Team Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <Rocket className="w-6 h-6" />
                <span className="text-lg">Innovative Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6" />
                <span className="text-lg">Great Culture</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Work at <span className="text-blue-600">Prasad Info Tech</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe in creating an environment where talent thrives, innovation flourishes, 
                and every team member feels valued and empowered.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation First</h3>
                <p className="text-gray-600">Work with cutting-edge technologies and be part of groundbreaking projects.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Great Team</h3>
                <p className="text-gray-600">Collaborate with talented professionals who share your passion for excellence.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Opportunities</h3>
                <p className="text-gray-600">Continuous learning and career advancement in a fast-growing company.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Work-Life Balance</h3>
                <p className="text-gray-600">Flexible schedules and a supportive environment that values your well-being.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Open <span className="text-blue-600">Positions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover exciting opportunities to grow your career with us. Find the perfect role that matches your skills and aspirations.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {jobCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Job Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r bg-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Don't see the perfect role?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Send Your Resume
            </button>
          </div>
        </section>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default CareersPage;