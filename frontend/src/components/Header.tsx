import { useEffect, useState } from 'react';
import { ChevronRight, Menu, X, Phone, Mail, Watch} from 'lucide-react';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "./../assets/logo.png"

const PrasadTechHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({
    socialMedia: false,
    seo: false,
    seoBlog: false,
    branding: false,
    designBlog: false,
    outsource: false,
    about: false
  });

  const toggleDropdown = (key: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
    
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrolled]);

  return (
    <header className="sticky top-0 z-50 bg-transparent w-full h-15">
      <div 
        className={`w-full bg-white shadow-lg transform-gpu transition-all duration-500 ease-out ${
          scrolled ? 'h-15' : 'h-22'
        }`}
      >
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 ">
        <div className="flex items-center justify-between py-1 px-2">
          <div className="logo">
            <a href="/">
              <img
                src={logo}
                alt="Prasad tech logo"
                className={`p-1 h-16`}
              />
            </a>
          </div>
          <button 
            onClick={toggleMobileMenu}
            className="p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 left-0 h-screen overflow-y-auto w-80 bg-white text-black transform transition-transform duration-300 z-40 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
       
          <div className="pt-20 px-4">
            {/* Social Media */}
            <div className="mb-4">
              <button 
                onClick={() => toggleDropdown('socialMedia')}
                className="flex items-center justify-between w-full text-left text-lg py-2 hover:text-blue-600"
              >
                Social Media
                <ChevronRight 
                  className={`transform transition-transform ${openDropdowns.socialMedia ? 'rotate-90' : ''}`}
                  size={16}
                />
              </button>
                {openDropdowns.socialMedia && (
                  <div className="pl-4 mt-2 space-y-2 overflow-hidden">
                    <div className="">
                      <a href="/social-media-marketing" className="block py-1 text-sm hover:text-blue-600">
                        Social Media Marketing
                      </a>
                      <a href="/facebook-marketing" className="block py-1 text-sm hover:text-blue-600">
                        Facebook Marketing
                      </a>
                      <a href="/influencer-marketing" className="block py-1 text-sm hover:text-blue-600">
                        Influencer Marketing
                      </a>
                      <a href="/social-media-blog" className="block py-1 text-sm hover:text-blue-600">
                        Social Media Blog
                      </a>
                    </div>
                  </div>
                )}
            </div>

            {/* SEO */}
            <div className="mb-4">
              <button 
                onClick={() => toggleDropdown('seo')}
                className="flex items-center justify-between w-full text-left text-lg py-2 hover:text-blue-600"
              >
                SEO
                <ChevronRight 
                  className={`transform transition-transform ${openDropdowns.seo ? 'rotate-90' : ''}`}
                  size={16}
                />
              </button>
              {openDropdowns.seo && (
                <div className="pl-4 mt-2 space-y-2">
                  <a href="/what-is-seo" className="block py-1 text-sm hover:text-blue-600">What is SEO?</a>
                  <a href="/seo-service-nepal" className="block py-1 text-sm hover:text-blue-600">SEO in Nepal</a>
                  <a href="/hotel-seo" className="block py-1 text-sm hover:text-blue-600">Hotel SEO</a>
                  <a href="/ecommerce-seo" className="block py-1 text-sm hover:text-blue-600">E-Commerce SEO</a>
                  
                  <button 
                    onClick={() => toggleDropdown('seoBlog')}
                    className="flex items-center justify-between w-full text-left text-sm py-1 pl-4 hover:text-blue-600"
                  >
                    SEO Blog
                    <ChevronRight 
                      className={`transform transition-transform ${openDropdowns.seoBlog ? 'rotate-90' : ''}`}
                      size={14}
                    />
                  </button>
                  {openDropdowns.seoBlog && (
                    <div className="pl-8 mt-2 space-y-1">
                      <a href="/seo-benefits-for-business" className="block py-1 text-xs hover:text-blue-600">
                        SEO Benefits for business in Nepal
                      </a>
                      <a href="/selling-products-on-facebook" className="block py-1 text-xs hover:text-blue-600">
                        Is Selling Products On Facebook A Good Choice?
                      </a>
                      <a href="/how-to-turn-visitors-into-customers" className="block py-1 text-xs hover:text-blue-600">
                        How can you Turn your visitors into customers?
                      </a>
                      <a href="/blog/seo-friendly-content-writing" className="block py-1 text-xs hover:text-blue-600">
                        How To Write SEO Friendly Content
                      </a>
                      <a href="/blog/keyword-research" className="block py-1 text-xs hover:text-blue-600">
                        Keyword Research Guide
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Branding */}
            <div className="mb-4">
              <button 
                onClick={() => toggleDropdown('branding')}
                className="flex items-center justify-between w-full text-left text-lg py-2 hover:text-blue-600"
              >
                Branding
                <ChevronRight 
                  className={`transform transition-transform ${openDropdowns.branding ? 'rotate-90' : ''}`}
                  size={16}
                />
              </button>
              {openDropdowns.branding && (
                <div className="pl-4 mt-2 space-y-2">
                  <a href="/graphic-design-nepal" className="block py-1 text-sm hover:text-blue-600 ">
                    Graphic Design
                  </a>
                  <a href="/web-design-development" className="block py-1 text-sm hover:text-blue-600">
                    Web Design
                  </a>
                  <button 
                    onClick={() => toggleDropdown('designBlog')}
                    className="flex items-center justify-between w-full text-left text-sm py-1 pl-4 hover:text-blue-600"
                  >
                    Design Blog
                    <ChevronRight 
                      className={`transform transition-transform ${openDropdowns.designBlog ? 'rotate-90' : ''}`}
                      size={14}
                    />
                  </button>
                  {openDropdowns.designBlog && (
                    <div className="pl-8 mt-2 space-y-1">
                      <a href="/seo-benefits-for-business" className="block py-1 text-xs hover:text-blue-600">
                        How to make a good design logo
                      </a>
                    </div>
                  )}
                </div>
                
              )}
            </div>

            {/* Outsource */}
            {/* <div className="mb-4">
              <button 
                onClick={() => toggleDropdown('outsource')}
                className="flex items-center justify-between w-full text-left text-lg py-2 hover:text-blue-600"
              >
                Outsource
                <ChevronRight 
                  className={`transform transition-transform ${openDropdowns.outsource ? 'rotate-90' : ''}`}
                  size={16}
                />
              </button>
              {openDropdowns.outsource && (
                <div className="pl-4 mt-2 space-y-2">
                  <a href="/outsource-seo" className="block py-1 text-sm hover:text-blue-600">Outsource SEO</a>
                  <a href="/outsource-content-writing" className="block py-1 text-sm hover:text-blue-600">Outsource Content Writing</a>
                  <a href="/outsource-web-design" className="block py-1 text-sm hover:text-blue-600">Outsource Web Design</a>
                  <a href="/outsource-graphic-design" className="block py-1 text-sm hover:text-blue-600">Outsource Graphic Design</a>
                </div>
              )}
            </div> */}

            <div className="mb-4">
              <a href="/contact-us" className="block text-lg py-2 hover:text-blue-600">Work with Us</a>
            </div>

            {/* About Company */}
            <div className="pb-4">
              <button 
                onClick={() => toggleDropdown('about')}
                className="flex items-center justify-between w-full text-left text-lg py-2"
              >
                About Us
                <ChevronRight 
                  className={`transform transition-transform ${openDropdowns.about ? 'rotate-90' : ''}`}
                  size={16}
                />
              </button>
              {openDropdowns.about && (
                <div className="pl-4 mt-2 space-y-2">
                  <a href="/about-us" className="block py-1 text-sm hover:text-blue-600">About us</a>
                  <a href="/ourteam" className="block py-1 text-sm hover:text-blue-600">Our Team</a>
                  <a href="/portfolio" className="block py-1 text-sm hover:text-blue-600">Our Portfolio</a>
                  <a href="/blog" className="block py-1 text-sm hover:text-blue-600">Blog</a>
                </div>
              )}
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="justify-center space-x-4 bottom-0 sticky bg-white py-2 ">
                   <div className="flex items-center text-gray-600 text-sm justify-center p-3">
              <Watch size={16} className="mr-1" />
              Mon - Fri : 9:00 - 5:00
            </div>
          <div className='flex justify-center space-x-4'>
            <a href="https://www.facebook.com/prasadinfotechnepal" className="text-blue-400 hover:text-blue-600">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/prasadinfotechs" className="text-blue-400 hover:text-blue-600">
              <FaInstagram size={20} />
            </a>
            <a href="tel:+977-986-2282235" className="text-green-400 hover:text-green-300">
              <Phone size={20} />
            </a>
            <a href="mailto:prasadinfotechinquiry@gmail.com" className="text-red-400 hover:text-red-300">
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
                      ? 'w-16 h-auto transition-all duration-500 ease-in-out' 
                      : 'w-22 h-auto transition-all duration-500 ease-in-out'
                  }`}
                />
              </a>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-3 pb-3 text-[15px]">
              {/* Social Media Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                  <span>Social Media</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:rotate-90 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="/social-media-marketing" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600  transition-colors">
                      Social Media Marketing
                    </a>
                    <a href="/facebook-marketing" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                      Facebook Marketing
                    </a>
                    <a href="/influencer-marketing" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                      Influencer Marketing
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                      Social Media Blog
                    </a>
                  </div>
                </div>
              </div>

              {/* SEO Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                  <span>SEO</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:rotate-90 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="/what-is-seo" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">What is SEO?</a>
                    <a href="/seo-service-nepal" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 trans ition-colors">SEO in Nepal</a>
                    <a href="/hotel-seo" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">Hotel SEO</a>
                    <a href="/ecommerce-seo" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">E-Commerce SEO</a>
                    
                    <div className="relative group/nested">
                      <button className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                        <span>SEO Blog</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <div className="absolute top-0 left-full w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200">
                        <div className="py-2  text-[14px]">
                          <a href="/seo-benefits-for-business" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors text-sm">
                            SEO Benefits for business in Nepal
                          </a>
                          <a href="/selling-products-on-facebook" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors text-sm">
                            Is Selling Products On Facebook A Good Choice?
                          </a>
                          <a href="/how-to-turn-visitors-into-customers" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors text-sm">
                            How can you Turn your visitors into customers?
                          </a>
                          <a href="/blog/seo-friendly-content-writing" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors text-sm">
                            How To Write SEO Friendly Content
                          </a>
                          <a href="/blog/keyword-research" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors text-sm">
                            Keyword Research Guide
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branding Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                  <span>Branding</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:rotate-90 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2 ">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">Brand Strategy</a>
                    <a href="/web-design-development" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">Web Design</a>
                    <a href="/graphic-design-nepal" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">Graphic Design</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">Multimedia</a>
                    <a href="/ppc-services" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">PPC Marketing</a>


                  
            
   <div className="relative group/nested">
                      <button className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                        <span>Design Blog</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <div className="absolute top-0 right-full ml-2 w-70 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200">
                        <div className="py-2 text-[14px]">
                          <a href="/seo-benefits-for-business" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors text-sm">
                            How to make a good business logo
                          </a>
                        </div>
                      </div>
                    </div>
                    </div>
                        </div>
              </div>

              {/* Outsource Dropdown */}
              {/* <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                  <span>Outsource</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:rotate-90 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="/outsource-seo" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">Outsource SEO</a>
                    <a href="/outsource-content-writing" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">Outsource Content Writing</a>
                    <a href="/outsource-web-design" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">Outsource Web Design</a>
                    <a href="/outsource-graphic-design" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">Outsource Graphic Design</a>
                  </div>
                </div>
              </div> */}

              {/* About Us Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                  <span>About Us</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:rotate-90 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="/about-us" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">Our Company</a>
                    <a href="/ourteam" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">Our Team</a>
                    <a href="/portfolio" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">Our Portfolio</a>
                    <a href="/blog" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors">Our Blogs</a>
                  </div>
                </div>
              </div>

              {/* Contact Us */}
              <a href="/contact-us" className="hover:text-blue-600 transition-colors">
                Contact Us
              </a>

              {/* Contact Info */}
              <div className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-lg">
                <div className="flex space-x-2">
                  <a href="https://wa.me/9779863992047" target="_blank" rel="noopener noreferrer" className="flex hover:opacity-80">
                    <FaWhatsapp className="text-green-500" size={20} />
                    <span>+977-9863992047</span>
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