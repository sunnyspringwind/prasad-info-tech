import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight, Menu, X, Phone, Mail, Watch } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "./../assets/img/logo.png";
import ServicesDropdown from "./ServicesDropdown";
import MobileServicesDropdown from "./MobileServicesDropdown";

// type HeaderProps = {
//   isMainPage: boolean;
// };

const PrasadTechHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({
    services: false,
    resources: false,
    company: false,
  });

  const toggleDropdown = (key: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // fixes the glitch on navbar
  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        requestAnimationFrame(() => {
          // Only update if scroll position has changed significantly
          if (Math.abs(currentScrollY - lastScrollY) > 5) {
            const shouldBeScrolled = currentScrollY > 80;
            if (shouldBeScrolled !== scrolled) {
              setScrolled(shouldBeScrolled);
            }
            lastScrollY = currentScrollY;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  return (
    <header className="sticky top-0 shadow-lg z-50 bg-transparent w-full h-15">
      <div
        className={`w-full h-15 bg-white shadow-lg transform-gpu transition-all duration-500 ease-out ${
          scrolled ? "h-17" : "sm:h-21"
        }`}
      >
        {/* Mobile Header */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-50 ">
          <div className="flex items-center justify-between py-1 px-2">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="Prasad tech logo" className={`p-1 h-14 sm:h-16`} />
              </a>
            </div>
            <button onClick={toggleMobileMenu} className="p-2 bg-gray-200 rounded-full">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Sidebar */}
          <div
            className={`fixed top-18 bg-white border-2 border-gray-200 shadow-lg right-0 max-h-screen overflow-y-scroll w-60 text-black transform transition-transform duration-300 z-100 ${
              isMobileMenuOpen ? "visible" : "hidden"
            }`}
          >
            <div className="py-4 px-4">
              <div className="py-2"><NavLink to="/" className={({ isActive }) => `hover:to-blue-600 ${isActive ? 'text-blue-600' : ''}`}>Home</NavLink></div>
              

              {/* Services */}
              <div className=" ">
                <button
                  onClick={() => toggleDropdown("services")}
                  className={`flex items-center w-full text-left hover:to-blue-600 py-2 hover:text-blue-600 ${
                  window.location.pathname.includes('/services') ? 'text-blue-600' : ''
                  }`}
                >
                  Services
                  <ChevronRight
                  className={`transform transition-transform pt-1 ${
                    openDropdowns.services ? "rotate-90" : ""
                  }`}
                  size={16}
                  />
                </button>
                {openDropdowns.services && (
                 <div className="overflow-y-auto"><MobileServicesDropdown/></div> 
                )}
              </div>

              <div className=" hover:text-blue-600 py-2">                                  <NavLink to="/portfolio" className={({ isActive }) => `hover:to-blue-600 ${isActive ? 'text-blue-600' : ''}`}>Portfolio</NavLink>

</div>

              {/* Resources */}
              <div className="">
                <button
                  onClick={() => toggleDropdown("resources")}
                  className="flex items-center w-full text-left py-2 hover:text-blue-600"
                >
                 Resources
                  <ChevronRight
                    className={`transform transition-transform pt-1 ${
                      openDropdowns.resources ? "rotate-90" : ""
                    }`}
                    size={16}
                  />
                </button>
                {openDropdowns.resources && (
                  <div className="pl-4">
                    <div className="">
                      <a
                        href="/social-media-marketing"
                        className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                      >
                        Blog
                      </a>
                      <a
                        href="/facebook-marketing"
                        className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                      >
                        Downloads
                      </a>
                
                    </div>
                  </div>
                )}
              </div>

              {/* About Company */}
              <div className="hover:text-blue-600">
                <button
                  onClick={() => toggleDropdown("company")}
                  className="flex items-center w-full text-left hover:to-blue-600 py-2"
                >
                  Company
                  <ChevronRight
                    className={`transform transition-transform pt-1 ${
                      openDropdowns.company ? "rotate-90" : ""
                    }`}
                    size={16}
                  />
                </button>
                {openDropdowns.company && (
                  <div className="pl-4 ">
                    <a
                      href="/company"
                      className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    >
                      About us
                    </a>
                    <a
                      href="/career"
                      className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    >
                      Career
                    </a>
  
              
                  </div>
                )}
              </div>

                {/* Contact Section of the site */}
              <div className="">
                {/* <button
                  onClick={() => goToSection("contact")}
                  className="block w-full text-left py-2 hover:text-blue-600"
                >
                  Contact
                </button> */}
                <NavLink to="/contact" className={({ isActive }) => `hover:text-blue-600 ${isActive ? 'text-blue-600' : ''}`}>Contact</NavLink>
              </div>
            </div>

            {/* Social Icons */}
            <div className="justify-center space-x-4 bottom-0 sticky bg-white py-2 ">
              <div className="flex items-center text-gray-600 text-sm justify-center p-3">
                <Watch size={16} className="mr-1" />
                Mon - Fri : 9:00 - 5:00
              </div>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.facebook.com/prasadinfotechnepal"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/prasadinfotechs"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="tel:+977-986-2282235"
                  className="text-green-400 hover:text-green-300"
                >
                  <Phone size={20} />
                </a>
                <a
                  href="mailto:prasadinfotechinquiry@gmail.com"
                  className="text-red-400 hover:text-red-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block">
          <div className="my-container mx-auto">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="logo">
                <a href="/">
                  <img
                    src={logo}
                    alt="Prasad tech logo"
                    className={`p-2 pb-4 transform-gpu will-change-transform ${
                      scrolled
                        ? "w-16 h-auto transition-all duration-500 ease-in-out"
                        : "w-22 h-auto transition-all duration-500 ease-in-out"
                    }`}
                  />
                </a>
              </div>

              {/* Navigation */}
              <nav className="flex items-center space-x-4 pb-3 text-[15px]">
                {/* Home */}
                <div className="hover:text-blue-600">
                  <NavLink to="/" className={({ isActive }) => `hover:to-blue-600 ${isActive ? 'text-blue-600' : ''}`}>Home</NavLink>
                </div>

                {/* Our Services Dropdown */}
                <div className="relative">
                  <NavLink to="/services" className={({ isActive }) => `hover:to-blue-600 ${isActive ? 'text-blue-600' : ''}`}>
                    <ServicesDropdown />
                  </NavLink>
                </div>

                {/* Portfolio */}
                <div className="relative group">
                    <NavLink to="/portfolio" className={({ isActive }) => `flex items-center space-x-1 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : ''}`}>
                    Portfolio
                    </NavLink>
                </div>

                {/* Resources Dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                    <span>Resources</span>
                    <ChevronRight className="w-4 h-4 pt-1 transform group-hover:rotate-90 transition-transform" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <a
                        href="/about"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                      >
                        Blog
                      </a>
                      <a
                        href="/career"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                      >
                        Downloads
                      </a>
                    </div>
                  </div>
                </div>

                {/* About Us Dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                    <span>Company</span>
                    <ChevronRight className="w-4 h-4 pt-1 transform group-hover:rotate-90 transition-transform" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <a
                        href="/about"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                      >
                        About
                      </a>
                      <a
                        href="/career"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                      >
                        Career
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Us */}
                <div className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                  {/* <button
                    onClick={() => goToSection("contact")}
                    className=" hover:text-blue-600"
                  >
                    Contact
                  </button> */}
                    <NavLink to="/contact" className={({ isActive }) => `hover:to-blue-600 ${isActive ? 'text-blue-600' : ''}`}>Contact</NavLink>
                </div>

                {/* Contact Info */}
                <div className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-lg">
                  <div className="flex space-x-2">
                    <a
                      href="https://wa.me/9779863992047"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex hover:opacity-80"
                    >
                      <FaWhatsapp className="text-green-500" size={20} />
                      <span>+977-9862282235</span>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PrasadTechHeader;

