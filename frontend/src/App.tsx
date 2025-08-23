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
    <Route path="course" element={<DigitalCreatorCourse />} />
    <Route path="blog" element={<Blogs />} />
    {/* <Route path="blo" element={<BlogPost/>}/> */}
  </Route>

  {/* Catch-all route */}
  <Route path="*" element={<Navigate to="/" />} />
</Routes>

    </>
  )
}

export default App
