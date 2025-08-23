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
    <section className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-blue-900 shadow-lg">
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
      <div id="mobile-menu" className="p-2">
        <ul className="flex justify-between items-center text-sm">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/course"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              <FaBook /> Course
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              <FaServicestack /> Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              <FaEnvelope /> Contact
            </NavLink>
          </li>
          <li>
            <button
            type="button"
              onClick={toggleShowMore}
              className="flex items-center gap-1 px-3 py-2 rounded-md text-white hover:bg-blue-600 transition-colors"
            >
              <FaBars /> More
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};
