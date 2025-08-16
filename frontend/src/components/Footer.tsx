import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {

  // const navigate = useNavigate();

  //  const goToSection = (sectionId: string) => {
  //       sessionStorage.setItem("scrollTarget", sectionId);
  //       navigate("/"); // Go to home
  //     }
     
  //   useEffect(() => {
  //     const target = sessionStorage.getItem("scrollTarget");
  //     if (target) {
  //       setTimeout(() => {
  //         document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  //         sessionStorage.removeItem("scrollTarget");
  //       }, 100); // slight delay for DOM to load
  //     }
  //   }, []);

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-wrap gap-3 md:gap-12">
          {/* Quick Links */}
          <div className="w-full sm:w-1/2 md:w-1/5 text-center sm:text-left">
            <h3 className="text-xl font-semibold md:mb-6">Quick Links</h3>
            <ul className=" md:space-y-3 text-blue-200">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Our Works", href: "/portfolio" },
                { label: "About", href: "/about" },
                { label: "Career", href: "/career" },
                { label: "Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
              {/* <button onClick={() => goToSection("contact")} className="hover:text-white transition-colors duration-200">
                Contact
              </button> */}
            </ul>
          </div>

          {/* Services */}
          <div className="w-full sm:w-1/2 md:w-1/4 text-center sm:text-left">
            <h3 className="text-xl font-semibold md:mb-6">Services</h3>
            <ul className="md:space-y-3 text-blue-200">
              {[
                {
                  label: "Website Development",
                  href: "/services/website-development",
                },
                {
                  label: "Facebook Marketing",
                  href: "/services/facebook-marketing",
                },
                {
                  label: "Instagram Marketing",
                  href: "/services/instagram-marketing",
                },
                {
                  label: "Search Engine Optimization",
                  href: "/services/seo",
                },
                {
                  label: "Content Marketing",
                  href: "/services/ppc-marketing",
                },
                {
                  label: "Graphic & Logo Design",
                  href: "/services/logo-design",
                },
              ].map(({ label, href }) => (
                <li key={label}>
                    <Link
                    to={href}
                    className="hover:text-white transition-colors duration-200"
                    >
                    {label}
                    </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-1/2 md:w-1/4 text-center sm:text-left">
            <h3 className="text-xl font-semibold md:mb-6">Contact Us</h3>
            <address className="not-italic mb-4 text-blue-200">
              Prasad Info Tech Pvt. Ltd.
              <br />
              2nd Floor, InfoTech Building
              <br />
              Kathmandu, Nepal
            </address>
            <div className="flex flex-col gap-2 text-blue-200 mb-4 items-center sm:items-start">
              {/* <a
                href="tel: 986-2282235"
                className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              >
                <FaPhone />
                986-2282235
              </a> */}
              <a
                href="tel:+977 986-2282235"
                className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              >
                <FaPhone />
                +977 986-2282235
              </a>
              <a
                href="mailto:prasadinfotechinquiry@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              >
                <FaEnvelope />
                prasadinfotechinquiry@gmail.com
              </a>
            </div>
            <div className="flex justify-center md:justify-start gap-5 text-blue-200 text-2xl">
              <a
                href="https://www.facebook.com/prasadinfotech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white transition-colors duration-200"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/prasadinfotech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-white transition-colors duration-200"
              >
                <FaTwitterSquare />
              </a>
              <a
                href="https://www.linkedin.com/company/prasadinfotech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors duration-200"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/prasadinfotech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-white transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/prasadinfotech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-white transition-colors duration-200"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full sm:w-1/2 md:w-1/3 h-72 rounded overflow-hidden shadow-lg">
            <iframe
              title="Prasad Info Tech Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0000000!2d87.263888!3d26.663333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5aa2f5e3d29f1%3A0x7d65f1c5d9bc2d57!2sItahari%2C%20Sunsari%2C%20Nepal!5e0!3m2!1sen!2snp!4v0000000000000"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <p className="mt-10 max-w-3xl mx-auto text-center text-blue-300">
          At Prasad Info Tech, based in Itahari, Nepal, we specialize in
          crafting innovative digital marketing solutions that drive business
          growth. From SEO and social media strategies to creative content and
          web development, we blend technology and creativity to deliver
          measurable results and help your brand connect with its audience
          effectively.
        </p>

        <div className="mt-8 border-t border-blue-700 pt-6 text-center text-blue-400 text-sm select-none">
          © 2025 <strong>Prasad Info Tech</strong>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
