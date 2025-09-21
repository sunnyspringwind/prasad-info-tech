import React from "react";
import { Clock, Users, CircleCheckBig, ArrowRight } from "lucide-react";

export interface CourseCardProps {
  title: string;
  instructor: string;
  level: string;
  duration: string;
  students: number;
  originalPrice: number;
  discount?: number;
  technologies: string[];
  highlights: string[];
  category: string;
  imageUrl?: string; // optional course image
  courseLink: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  level,
  duration,
  students,
  originalPrice,
  discount = 0,
  technologies,
  highlights,
  category,
  imageUrl,
  courseLink,
}) => {
  
  // Calculate discounted price from original price and discount percentage
  const discountedPrice = discount > 0 
    ? Math.round(originalPrice * (1 - discount / 100)) 
    : originalPrice;
  
  // Calculate actual savings amount
  const savingsAmount = originalPrice - discountedPrice;
  const hasDiscount = discount > 0 && savingsAmount > 0;
  
  return (
    <div className="group relative rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.15)] border border-gray-100 hover:border-blue-300 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden backdrop-blur-sm">
      {/* Gradient overlay for 3D effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-gray-50/50 pointer-events-none rounded-2xl"></div>

      <div className="relative">
        {/* Course Image with enhanced styling */}
        <div className="relative w-full h-52 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
              <span className="text-blue-600 text-lg font-medium">
                Course Preview
              </span>
            </div>
          )}
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>

        {/* Enhanced Category Badge */}
        <div className="absolute top-5 left-5">
          <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border border-white/20 transform hover:scale-105 transition-transform duration-200">
            {category}
          </span>
        </div>

        {/* Enhanced Rating with glow effect
        <div className="absolute top-5 right-5">
          <div className="bg-white/95 backdrop-blur-md rounded-xl px-3 py-2 flex items-center space-x-2 shadow-lg border border-white/50 hover:shadow-xl transition-shadow duration-300">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-bold text-gray-800">5.0</span>
          </div>
        </div> */}

        {/* Discount Badge */}
        {hasDiscount && (
          <div className="absolute top-16 right-5">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
              -{discount}% OFF
            </div>
          </div>
        )}
      </div>

      {/* Course Info with enhanced styling */}
      <div className="relative p-6 space-y-5 bg-gradient-to-b from-white to-gray-50/50">
        {/* Header Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-xs font-bold rounded-full border border-blue-200">
                {level}
              </span>
              <div className="h-4 w-px bg-gray-300"></div>
              <span className="text-sm text-gray-600 font-medium">
                by {instructor}
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 leading-tight hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {highlights.slice(0, 2).join(" • ")}
          </p>
        </div>

        {/* Stats Section with enhanced design */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center space-x-2 text-gray-700">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Clock className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <span className="text-xs text-gray-500 block">Duration</span>
              <span className="text-sm font-semibold">{duration}</span>
            </div>
          </div>

          <div className="h-8 w-px bg-gray-300"></div>

          <div className="flex items-center space-x-2 text-gray-700">
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <span className="text-xs text-gray-500 block">Students</span>
              <span className="text-sm font-semibold">
                {students.toLocaleString()}+
              </span>
            </div>
          </div>
        </div>

        {/* Technologies with improved design */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-900 text-sm flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((tech, index) => (
              <span
                key={tech}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 hover:scale-105 ${
                  index % 2 === 0
                    ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200"
                    : "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border border-gray-200"
                }`}
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg">
                +{technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Key Highlights with enhanced styling */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-900 text-sm flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Key Learning Outcomes
          </h4>
          <div className="space-y-2">
            {highlights.slice(0, 3).map((item) => (
              <div
                key={item}
                className="flex items-start space-x-3 text-sm text-gray-700 group"
              >
                <div className="mt-0.5 p-1 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors duration-200">
                  <CircleCheckBig className="w-3 h-3 text-green-600" />
                </div>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
            {highlights.length > 3 && (
              <div className="text-xs text-gray-500 ml-6">
                +{highlights.length - 3} more learning outcomes
              </div>
            )}
          </div>
        </div>

        {/* Pricing & CTA Section with premium design */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl"></div>
          <div className="relative p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm space-y-4">
            {/* Pricing Display */}
            <div className="flex items-end justify-between">
              <div className="space-y-1">
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                    ₹{discountedPrice.toLocaleString()}
                  </span>
                  {hasDiscount && (
                    <span className="text-lg text-gray-500 line-through font-medium">
                      ₹{originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
              
              {hasDiscount && (
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">You save</div>
                  <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold rounded-lg shadow-sm">
                    ₹{savingsAmount.toLocaleString()}
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced CTA Button */}
            <a href={courseLink} className="block">
              <button
                className="group relative w-full overflow-hidden rounded-xl 
    bg-gradient-to-r from-blue-600 to-blue-500 
    hover:from-blue-700 hover:to-blue-600 
    text-white font-bold py-4 px-6 
    transform hover:scale-[1.02] transition-all duration-300 
    shadow-lg hover:shadow-xl"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-300"
                ></div>

                <div className="relative flex items-center justify-center space-x-2">
                  <span className="text-base">View Course Details</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </a>

            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 pt-2">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>30-day support after completion</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Certificate included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
