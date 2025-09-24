import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBook, FaServicestack, FaEnvelope, FaBars, FaBriefcase, FaPenNib, FaUser } from "react-icons/fa";

export const MobileMenu: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore((prev) => !prev);

  const baseLink =
    "flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200";
  const activeLink = "bg-blue-700 text-white";
  const inactiveLink = "text-white hover:bg-blue-600";

  return (
    <section className="sm:hidden w-full fixed bottom-0 left-0 right-0 z-50 bg-blue-900 shadow-lg">
      {/* Expandable more section */}
      {showMore && (
        <div className="bg-blue-800 border-t border-blue-700">
          <ul className="flex flex-col gap-2 p-3 text-sm">
            <li>
              <NavLink
                onClick={toggleShowMore}
                to="/portfolio"
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeLink : inactiveLink}`
                }
              >
                <FaBriefcase /> Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
              onClick={toggleShowMore}
                to="/blog"
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeLink : inactiveLink}`
                }
              >
                <FaPenNib /> Blog
              </NavLink>
            </li>
            <li>
              <NavLink
              onClick={toggleShowMore}
                to="/about"
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeLink : inactiveLink}`
                }
              >
                <FaUser /> About
              </NavLink>
            </li>
            <li>
              <NavLink
              onClick={toggleShowMore}
                to="/career"
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeLink : inactiveLink}`
                }
              >
                <FaServicestack /> Career
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      {/* Bottom fixed navigation */}
 <div id="mobile-menu" className="">
        <ul className="flex justify-around items-center">
          <li className="flex-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center min-h-[60px] px-1 xs:px-2 py-2 rounded-md transition-colors duration-200 ${
                  isActive ? activeLink : inactiveLink
                }`
              }
            >
              <FaHome className="text-base xs:text-lg mb-1" />
              <span className="text-[10px] leading-tight">Home</span>
            </NavLink>
          </li>
          <li className="flex-1">
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center min-h-[60px] px-1 xs:px-2 py-2 rounded-md transition-colors duration-200 ${
                  isActive ? activeLink : inactiveLink
                }`
              }
            >
              <FaBook className="text-base xs:text-lg mb-1" />
              <span className="text-[10px] leading-tight">Course</span>
            </NavLink>
          </li>
          <li className="flex-1">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center min-h-[60px] px-1 xs:px-2 py-2 rounded-md transition-colors duration-200 ${
                  isActive ? activeLink : inactiveLink
                }`
              }
            >
              <FaServicestack className="text-base xs:text-lg mb-1" />
              <span className="text-[10px] leading-tight">Services</span>
            </NavLink>
          </li>
          <li className="flex-1">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center min-h-[60px] px-1 xs:px-2 py-2 rounded-md transition-colors duration-200 ${
                  isActive ? activeLink : inactiveLink
                }`
              }
            >
              <FaEnvelope className="text-base xs:text-lg mb-1" />
              <span className="text-[10px] leading-tight">Contact</span>
            </NavLink>
          </li>
          <li className="flex-1">
            <button
              type="button"
              onClick={toggleShowMore}
              className="flex flex-col items-center justify-center min-h-[60px] px-1 xs:px-2 py-2 rounded-md text-white hover:bg-blue-600 transition-colors w-full"
            >
              <FaBars className="text-base xs:text-lg mb-1" />
              <span className="text-[10px] leading-tight">More</span>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};




