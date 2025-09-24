import { Link, NavLink } from "react-router-dom"
import CourseCard from "../components/CourseCard"
import { courseOverview } from "../data/courseData"

export const CoursesPage: React.FC = () => {

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Header Section */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                            Our Courses
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Master the latest technologies with our comprehensive, industry-focused courses designed by experts
                        </p>
                        <div className="flex items-center justify-center space-x-8 pt-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">{courseOverview.length}+</div>
                                <div className="text-sm text-gray-500">Courses Available</div>
                            </div>
                            <div className="h-8 w-px bg-gray-300"></div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">100%</div>
                                <div className="text-sm text-gray-500">Practical Learning</div>
                            </div>
                            <div className="h-8 w-px bg-gray-300"></div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">24/7</div>
                                <div className="text-sm text-gray-500">Support Available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Filter/Sort Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-gray-900">Available Courses</h2>
                        <p className="text-gray-600">Choose from our carefully curated selection of professional courses</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-500">Showing {courseOverview.length} courses</span>
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm font-medium text-blue-600">All Categories</span>
                    </div>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {courseOverview.map((course, idx) => (
                        <div key={idx} className="h-full">
                            <Link to={course.courseLink}>
                            <CourseCard {...course} />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Call to Action Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-blue-50 via-blue-25 to-transparent rounded-2xl p-8 border border-blue-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Can't find the right course?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            We're constantly adding new courses. Contact us to suggest a topic or get notified about upcoming releases.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <NavLink to="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
                                Request Custom Course
                            </NavLink>
                            <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-xl transition-all duration-300">
                                Get Course Updates
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}   