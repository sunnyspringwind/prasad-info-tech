import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Services from "./pages/Services"
import ContactPage from "./pages/Contact"
import ServicePage from "./pages/ServicePage"
import AboutPage from "./pages/About"
import CareersPage from "./pages/Career"
import DigitalCreatorCourse from "./pages/DigitalCreatorCourse"
import Blog from "./pages/Blog"

function App() {

  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/:slug" element={<ServicePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/career" element={<CareersPage/>}/>
          <Route path="/course" element={<DigitalCreatorCourse/>}/>
          <Route path="/blog" element={<Blog/>}/>
          


          {/* <Route path="/project-details/:id" element={<ProjectPage />} /> */}
                    {/* catch-all route for GitHub Pages */}
          <Route path="*" element={<Navigate to='/' />}/>
        </Routes>
    </>
  
    </>
  )
}

export default App
