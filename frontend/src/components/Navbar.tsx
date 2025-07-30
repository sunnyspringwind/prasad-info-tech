
// components/Navbar.tsx
import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import ServicesDropdown from "./ServicesDropdown";
import MobileServicesDropdown from "./MobileServicesDropdown";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-700">Prasad InfoTech</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center">
          <li><ServicesDropdown /></li>
          <li><a href="/about" className="hover:text-blue-600">About</a></li>
          <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-6 pb-6 pt-2 shadow-sm">
          <ul className="space-y-4">
            {/* Expandable Services */}
            <li>
              <button
                className="flex items-center justify-between w-full font-semibold text-gray-800"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                {mobileServicesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {mobileServicesOpen && <MobileServicesDropdown />}
            </li>

            <li><a href="/about" className="block text-gray-700 hover:text-blue-600">About</a></li>
            <li><a href="/contact" className="block text-gray-700 hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
