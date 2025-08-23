import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const portfolioItems = [
    {
      id: 1,
      title: "TechCorp Solutions",
      category: "Web & App Development",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      href: "/portfolio/techcorp",
    },
    {
      id: 2,
      title: "Global Trade Enterprise",
      category: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      href: "/portfolio/global-trade",
    },
    {
      id: 3,
      title: "HealthCare Plus",
      category: "Branding & Visuals",
      image:
        "https://images.unsplash.com/photo-1631507623112-0092cef9c70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      href: "/portfolio/healthcare",
    },
    {
      id: 4,
      title: "EduTech Academy",
      category: "Web & App Development",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      href: "/portfolio/edutech",
    },
    {
      id: 5,
      title: "Restaurant Chain Pro",
      category: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      href: "/portfolio/restaurant",
    },
    {
      id: 6,
      title: "Financial Services Group",
      category: "Branding & Visuals",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      href: "/portfolio/financial",
    },
    {
      id: 7,
      title: "Real Estate Ventures",
      category: "Web & App Development",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      href: "/portfolio/real-estate",
    },
    {
      id: 8,
      title: "Fashion Forward",
      category: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      href: "/portfolio/fashion",
    },
    {
      id: 9,
      title: "Manufacturing Co.",
      category: "Branding & Visuals",
      image:
        "https://images.unsplash.com/photo-1593106410288-caf65eca7c9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      href: "/portfolio/manufacturing",
    },
  ];

  const filterCategories = [
    "All Projects",
    "Branding & Visuals",
    "Web & App Development",
    "Digital Marketing",
  ];

  const filteredItems =
    activeFilter === "All Projects"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6 md:px-12">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl text-center font-bold text-blue-900 relative mb-4">
              Our Projects
              {/* <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div> */}
            </h2>

            <div className="mt-12 text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6 leading-tight">
                Transforming Digital Dreams into Reality:
                <br />
                <span className="text-blue-600">
                  Explore Our Success Stories
                </span>
              </h3>
              <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
                At Prasad Info Tech, we specialize in crafting innovative
                digital solutions that drive business growth. Discover how we've
                helped our clients achieve exceptional results through strategic
                digital marketing, cutting-edge web development, and compelling
                brand experiences.
              </p>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="mb-10">
            <div className="border-b-2 border-blue-200 pb-2">
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 sm:gap-x-8 sm:gap-y-0">
                {filterCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`pb-3 px-4 text-center font-semibold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 ${
                      activeFilter === category
                        ? "text-blue-600 border-b-2 border-blue-600 -mb-0.5"
                        : "text-gray-600 hover:text-blue-800 hover:border-b-2 hover:border-blue-300 -mb-0.5"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-blue-900 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h4>

                  <div className="flex justify-center">
                    <a
                      href={item.href}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Section */}
          {/* <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              Load More Projects
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              View All Work
            </button>
          </div> */}

          {/* Results Counter */}
          <div className="text-center text-blue-600 font-medium mt-6">
            Showing {filteredItems.length} of {portfolioItems.length} projects
          </div>
        </div>
      </section>

    </>
  );
};

export default Portfolio;
