// Layout.tsx
import { Outlet } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";
import PrasadTechHeader from "./Header";
import Footer from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <PrasadTechHeader/>
      <main className="flex-grow">
        <Outlet /> {/* Page content goes here */}
      </main>
      <Footer/>
      <MobileMenu /> {/* Always visible at the bottom */}
    </div>
  );
};
