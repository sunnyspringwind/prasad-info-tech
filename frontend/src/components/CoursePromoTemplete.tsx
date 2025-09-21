import { useState, useEffect, type ReactNode } from "react";
import { FaArrowRight, FaPlay, FaStar, FaMobile, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CourseHighlight {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

interface Skill {
  skill: string;
  image: string;
}

export interface CTA {
  text?: string;      // button label for link
  link?: string;      // url / route to course page
  phone?: string;     // phone number to show on call button
}

export interface Stats {
  students?: string;    // enroll count
  rating?: string;      // average rating e.g. 4.9
  successRate?: string; // percent 0..100
}


interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

export interface Course {
  title: ReactNode;
  description: ReactNode;
  courseHighlights: CourseHighlight[];
  skillsYouLearn: Skill[];
  testimonials?: Testimonial[];
  subtitle?: string;
  cta?: CTA;                            // <-- new
  stats?: Stats;  
}

interface Props {
  course: Course;
}

const CoursePromoTemplete = ({ course }: Props) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    let testimonialInterval: NodeJS.Timeout | undefined;

    if (course.testimonials && course.testimonials.length > 0) {
      testimonialInterval = setInterval(() => {
        setCurrentTestimonial(
          (prev) => (prev + 1) % course.testimonials!.length
        );
      }, 4000);
    }

    return () => {
      if (testimonialInterval) clearInterval(testimonialInterval);
    };
  }, [course.testimonials, course.testimonials?.length]);

return (
<section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-tl from-slate-900 via-blue-900 to-indigo-900">
  {/* Background Blobs */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
    <div className="absolute top-40 right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"></div>
    <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
  </div>

  <div className="relative px-6 sm:px-12 lg:px-20 py-16">
    {/* Header */}
    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      {course.title}
      {course.subtitle && <h2 className="text-2xl text-white mb-4">{course.subtitle}</h2>}
      {course.description && <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">{course.description}</p>}
    </div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">

      {/* Left Column: Success + Testimonials + Stats */}
      <div className="space-y-8">
        {/* Main Success Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
            alt="Students learning digital creation"
            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex">{[...Array(5)].map((_, i) => <FaStar key={i} className="w-4 h-4 text-yellow-400" />)}</div>
                <span className="text-white font-semibold">{course.stats?.rating ?? "4.9"}/5 Rating</span>
              </div>
              <p className="text-white font-medium text-lg leading-relaxed">
                "यो कोर्स लिएपछि मेरो जिन्दगी नै बदलियो। अब मैले आफ्नै YouTube channel सुरु गरेको छु!"
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        {course.testimonials && course.testimonials.length > 0 && (
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">विद्यार्थीहरूका अनुभव</h3>
            <div className="relative">
              {course.testimonials.map((testimonial, index) => (
                <div key={index} className={`transition-all duration-500 ${index === currentTestimonial ? "opacity-100 visible" : "opacity-0 invisible absolute inset-0"}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-4 border-white/30" />
                    <div>
                      <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-blue-200 text-sm">{testimonial.role}</p>
                      <div className="flex mt-1">{[...Array(testimonial.rating)].map((_, i) => <FaStar key={i} className="w-3 h-3 text-yellow-400" />)}</div>
                    </div>
                  </div>
                  <p className="text-blue-100 text-lg italic leading-relaxed">"{testimonial.text}"</p>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {course.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentTestimonial ? "bg-white scale-125" : "bg-white/30 hover:bg-white/60"}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Stats */}
        {course.stats && (
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl py-6 sm:p-6 text-center border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-xl sm:text-3xl font-bold text-yellow-400 mb-2">{course.stats.students ?? 0}</div>
              <div className="text-blue-200 text-sm">Students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl py-6 sm:p-6 text-center border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-xl sm:text-3xl font-bold text-green-400 mb-2">{course.stats.rating ?? 4.9}</div>
              <div className="text-blue-200 text-sm">Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl py-6 sm:p-6 text-center border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-xl sm:text-3xl font-bold text-purple-400 mb-2">{course.stats.successRate ?? "100%"}</div>
              <div className="text-blue-200 text-sm">Success</div>
            </div>
          </div>
        )}
      </div>

      {/* Right Column: Highlights + Skills */}
      <div className="space-y-8">
        {/* Course Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {course.courseHighlights.map((highlight, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <div className={`bg-gradient-to-r ${highlight.color} p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
                {highlight.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{highlight.title}</h3>
              <p className="text-blue-200 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">के-के सिक्नुहुन्छ?</h3>
          <div className="grid grid-cols-2 gap-4">
            {course.skillsYouLearn.map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <img src={item.image} alt={item.skill} className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300" />
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
    {course.cta && (
      <div className="text-center mt-20">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">🚀 सीट सीमित छ - अहिले नै जोइन गर्नुहोस्!</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {course.cta.phone && (
              <button className="bg-white text-red-600 px-10 py-4 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200 flex items-center gap-3">
                <FaMobile className="w-5 h-5" />
                Call: {course.cta.phone}
              </button>
            )}
            {course.cta.link && (
              <Link to={course.cta.link} className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <FaVideo className="w-4 h-4" />
                {course.cta.text ?? "कोर्स हेर्नुहोस्"}
                <FaArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    )}

  </div>
</section>

);
}
export default CoursePromoTemplete;
