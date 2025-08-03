import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Services from "./pages/Services"

function App() {

  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />


          {/* <Route path="/project-details/:id" element={<ProjectPage />} /> */}
                    {/* catch-all route for GitHub Pages */}
          <Route path="*" element={<Navigate to='/' />}/>
        </Routes>
    </>
  
    </>
  )
}

export default App
