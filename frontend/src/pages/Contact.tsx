import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import PrasadTechHeader from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
        <PrasadTechHeader />
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to transform your digital presence? Contact Prasad Info Tech
            and let's build innovative solutions together.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
            <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Let's <span className="text-blue-600">Connect</span>
              </h2>
              <p className="text-gray-600 text-lg">
              Prasad Info Tech specializes in digital marketing and software
              development. Whether you need a website, mobile app, or a
              digital strategy, we're here to help. Reach out and we'll
              respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 p-6 rounded-2xl shadow border border-gray-100">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Phone Number
                  </h3>
                  <p className="text-gray-600">025-1234567</p>
                  <p className="text-gray-600">+977-9801234567</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 rounded-2xl shadow border border-gray-100">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Email Address
                  </h3>
                  <p className="text-gray-600">
                    prasadinfotechinquiry@gmail.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-6 rounded-2xl shadow border border-gray-100">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Office Address
                  </h3>
                  <p className="text-gray-600">
                    2nd Floor, InfoTech Building, Main Road
                  </p>
                  <p className="text-gray-600">Itahari, Sunsari, Nepal</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-6 rounded-2xl shadow border border-gray-100">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <FaClock className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Working Hours
                  </h3>
                  <p className="text-gray-600">
                    Sunday – Friday: 9:00 AM – 6:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 10:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/prasadinfotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transform hover:scale-110 transition"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com/prasadinfotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transform hover:scale-110 transition"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/company/prasadinfotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transform hover:scale-110 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Let's <span className="text-blue-600">Talk</span>
              </h2>
              <p className="text-gray-600">
                Ready to start your digital transformation? Fill out the form
                and we’ll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 hover:bg-white"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 hover:bg-white"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 hover:bg-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 hover:bg-white"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50 hover:bg-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all shadow hover:shadow-lg"
              >
                <div className="flex items-center justify-center">
                  Send Message <FaPaperPlane className="ml-2 w-5 h-5" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <iframe
            title="Prasad Info Tech Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0000000!2d87.263888!3d26.663333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5aa2f5e3d29f1%3A0x7d65f1c5d9bc2d57!2sItahari%2C%20Sunsari%2C%20Nepal!5e0!3m2!1sen!2snp!4v0000000000000"
            className="w-full h-96 border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactPage;
