import React, { useState } from "react";
import { ChevronRight } from "lucide-react"; // optional icon package (lucide-react)

const ServicesDropdown: React.FC = () => {

  return (
    <div
      className="relative group"
    
    >
      <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors ">
        Services
        <ChevronRight className="w-4 h-4 pt-1 transform group-hover:rotate-90 transition-transform" />
      </button>
        <div className="absolute -left-0 top-full mt-2 w-[600px] bg-white shadow-lg border border-gray-200 rounded-lg p-6 grid grid-cols-2 gap-6 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transition-200">
          {/* Social Media */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">Social Media</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="/services/social/facebook" className="hover:text-blue-600">Facebook Marketing</a></li>
              <li><a href="/services/social/instagram" className="hover:text-blue-600">Instagram Marketing</a></li>
              <li><a href="/services/social/influencer" className="hover:text-blue-600">Influencer Marketing</a></li>
              <li><a href="/services/social/what-is" className="hover:text-blue-600">What is Social Media Marketing?</a></li>
              <li><a href="/services/social/why" className="hover:text-blue-600">Why Choose This Service?</a></li>
            </ul>
          </div>

          {/* SEO */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">SEO</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="/services/seo" className="hover:text-blue-600">SEO Service</a></li>
              <li><a href="/services/seo/what-is" className="hover:text-blue-600">What is SEO?</a></li>
              <li><a href="/services/seo/why" className="hover:text-blue-600">Why SEO Matters</a></li>
            </ul>
          </div>

          {/* Software Development */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">Software Development</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="/services/dev/web" className="hover:text-blue-600">Website Development</a></li>
              <li><a href="/services/dev/mobile" className="hover:text-blue-600">Mobile App Development</a></li>
              <li><a href="/services/dev/software" className="hover:text-blue-600">Software Solutions</a></li>
              <li><a href="/services/dev/what-is" className="hover:text-blue-600">What is Software Dev?</a></li>
              <li><a href="/services/dev/why" className="hover:text-blue-600">Why Invest In It?</a></li>
            </ul>
          </div>

          {/* Graphic Design */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">Graphic Design</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="/services/design/logo" className="hover:text-blue-600">Logo Design</a></li>
              <li><a href="/services/design/branding" className="hover:text-blue-600">Branding Kit</a></li>
              <li><a href="/services/design/what-is" className="hover:text-blue-600">What is Graphic Design?</a></li>
              <li><a href="/services/design/why" className="hover:text-blue-600">Why You Need It</a></li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default ServicesDropdown;
