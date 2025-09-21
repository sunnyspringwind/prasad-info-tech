import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Services from "./pages/Services"
import ContactPage from "./pages/Contact"
import ServicePage from "./pages/ServicePage"
import AboutPage from "./pages/About"
import CareersPage from "./pages/Career"
import DigitalCreatorCourse from "./pages/DigitalCreatorCourse"
import Blogs from "./pages/Blogs"
import { Layout } from "./components/Layout"
import { BlogPostPage } from "./pages/BlogPost"
import AIVideoCourse from "./pages/AiVideoCreatorCourse"
import { CoursesPage } from "./pages/Course"
import PaymentConfirmation from "./pages/PaymentConfirmation"
// import BlogPost from "./pages/BlogPost"

function App() {

  return (
    <>
       <Routes>
  {/* Layout wrapper */}
  <Route path="/" element={<Layout />}>
    {/* Home is the index route inside Layout */}
    <Route index element={<Home />} />
    <Route path="portfolio" element={<Portfolio />} />
    <Route path="services" element={<Services />} />
    <Route path="services/:slug" element={<ServicePage />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="career" element={<CareersPage />} />
    <Route path="courses" element={<CoursesPage/>}/>
    <Route path="courses/digital-creator" element={<DigitalCreatorCourse />} />
    <Route path="courses/ai-video-mastery" element={<AIVideoCourse />} />
    <Route path="blog" element={<Blogs />} />
    <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
    <Route path="blog/:slug" element={<BlogPostPage/>}/>

  </Route>

  {/* Catch-all route */}
  <Route path="*" element={<Navigate to="/" />} />
</Routes>

    </>
  )
}

export default App
