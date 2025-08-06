import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaChevronRight } from "react-icons/fa6";
import Footer from "../components/Footer";
import PrasadTechHeader from "../components/Header";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const ServicesOverview: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const allServices = servicesData.flatMap(c => c);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

  const navigate = useNavigate();

   const goToSection = (sectionId: string) => {
        sessionStorage.setItem("scrollTarget", sectionId);
        navigate("/"); // Go to home
      }
     
    useEffect(() => {
      const target = sessionStorage.getItem("scrollTarget");
      if (target) {
        setTimeout(() => {
          document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
          sessionStorage.removeItem("scrollTarget");
        }, 100); // slight delay for DOM to load
      }
    }, []);


  return (
    <>
    <PrasadTechHeader />
    <section className="bg-white py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Minimal Header */}
        <div className="text-center mb-20">
          <motion.h2 
            className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Services
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Thoughtfully designed solutions to help your business thrive in the digital landscape.
          </motion.p>
        </div>

        {/* Services Grid - Apple-inspired */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {allServices.map((service, index) => (
            <motion.div
              key={service.href}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(service.href)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group cursor-pointer border-2 border-amber-500 rounded-3xl"
               transition={{
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1]
  }}
            >
              <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2">
                {/* Image with subtle overlay */}
                <div className="aspect-[16/10] overflow-hidden bg-gray-50">
                  <img
                    src={service.img1 || `https://images.unsplash.com/photo-${1460925895917 + index}?w=600&h=400&fit=crop&auto=format`}
                    alt={service.label}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>

                {/* Content with generous spacing */}
                <div className="p-10">
                  {/* Price badge */}
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                      {service.priceRange}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                    {service.label}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 font-light">
                    {service.desc1}
                  </p>

                  {/* Features list */}
                  {service.features && (
                    <div className="mb-8">
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies (if available) */}
                  {service.technologies && (
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <motion.a
                      href={`services/${service.slug}`}
                      className="inline-flex items-center text-blue-600 font-medium group/link"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>{service.cta || "Learn More"}</span>
                      <FaChevronRight className="ml-2 w-3 pt-1 h-3 transition-transform group-hover/link:translate-x-1" />
                    </motion.a>
                    
                    {/* Subtle hover indicator */}
                    <motion.div
                      onClick={() => window.location.href = service.href}
                      animate={{ 
                      opacity: hoveredCard === service.href ? 1 : 0,
                      scale: hoveredCard === service.href ? 1 : 0.8
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
                    >
                      <FaArrowRight className="w-3 h-3 text-white" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section - minimal and clean */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-24"
        >
          <p className="text-gray-500 mb-8 font-light">
            Need something specific? We'd love to hear about your project.
          </p>
          <button onClick={() => goToSection("contact")}  className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start a Conversation
            <FaArrowRight className="ml-3 w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ServicesOverview;