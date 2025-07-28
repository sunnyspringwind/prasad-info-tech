import FAQSection from "./components/FAQSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import IntroSection from "./components/IntroSection"
import TalkToUsForm from "./components/TalkToUs"

function App() {

  return (
    <>
      <div className="">
        <Header/>
        <HeroSection/>
        <IntroSection/>
        <FAQSection/>
        <TalkToUsForm/>
        <Footer/>

      </div>
  
    </>
  )
}

export default App
