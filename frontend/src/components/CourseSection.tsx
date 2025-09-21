import type React from "react";
import { useState } from "react";
import { courses } from "../data/courseData";
import { FaCamera, FaYoutube } from "react-icons/fa";
import CoursePromoTemplete, { type Course } from "./CoursePromoTemplete";

export const CourseSection: React.FC = () => {
  const [currentCourse, setCurrentCourse] = useState<Course>(courses[0]);
  const [isSelected, setIsSelected] = useState(0);

  const toggleCourseFlags = (idx: number) => {
    setCurrentCourse(courses[idx]);
    setIsSelected(idx);
  };

  return (
    <div className="p-10 relative w-full min-h-screen overflow-hidden bg-gradient-to-tl from-slate-900 via-blue-900 to-indigo-900">
      {/* courses buttons  */}
      <div className="pt-5  justify-center gap-4 sm:flex">
        <button onClick={() => toggleCourseFlags(0)}>
          <div
            className={`inline-flex items-center space-x-2 text-white px-6 py-3 rounded-full mb-8 shadow-lg animate-bounce
    ${
      isSelected === 0
        ? "bg-gradient-to-r from-green-400 to-green-800 border-2"
        : "bg-gradient-to-r from-red-500 to-pink-500"
    }
  `}
          >
            {" "}
            <FaCamera className="w-5 h-5" />
            <span className="font-semibold">Digital Creator बन्नुहोस्!</span>
            <div className="bg-white text-red-500 px-2 py-1 rounded-full text-xs font-bold ml-2">
              120+ Enrolled
            </div>
          </div>
        </button>
        <button onClick={() => toggleCourseFlags(1)}>
          <div
            className={`inline-flex items-center space-x-2 text-white px-6 py-3 rounded-full mb-8 shadow-lg animate-bounce
    ${
      isSelected === 1
        ? "bg-gradient-to-r from-green-400 to-green-800 border-2"
        : "bg-gradient-to-r from-red-500 to-pink-500"
    }
  `}
          >
            <FaYoutube className="w-5 h-5" />
            <span className="font-semibold">AI Video Creator बन्नुहोस्!</span>
            <div className="bg-white text-red-500 px-2 py-1 rounded-full text-xs font-bold ml-2">
              15+ Enrolled
            </div>
          </div>
        </button>
      </div>

      {/* MAIN COURSES SHOWCASE */}
      <div>
        <CoursePromoTemplete course={currentCourse} />
      </div>
    </div>
  );
};
