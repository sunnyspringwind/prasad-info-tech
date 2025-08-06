import { useState } from "react";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import ChatWidget from "../components/ChatWidget";
import { MessageCircle } from "lucide-react";

export default function Home() {
  // const [showButton, setShowButton] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowButton(window.scrollY > 300);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const openChatbot = () => {
    setIsChatOpen(true);
  };
  return (
    <>
      <div className="">
        <Header />
        <HeroSection />
        <IntroSection />
        <FAQSection />
        <ContactSection />
        <Footer />
        <button onClick={openChatbot} className="fixed bottom-24 right-8 z-30 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2">
          <MessageCircle size={24} />
        </button>
       
        {/* {showButton && (
          <button onClick={scrollToTop}  className="fixed bottom-8 right-8 z-30 bg-blue-600 text-white p-3 rounded-full shadow-lg">
            <FaArrowCircleUp />
          </button>
        )} */}

        <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </>
  );
}
