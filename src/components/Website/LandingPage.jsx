import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AboutUs from "./Aboutus";
import Services from "./Services";
import HeroSection from "./Home";
import PrelaunchEventTime from "./PrelaunchEventTime";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <PrelaunchEventTime/>
      <Footer />
    </div>
  );
};

export default LandingPage;
