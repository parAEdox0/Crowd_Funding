import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import LoginSignup from "./components/LoginSignup";

const App = () => {
  const [isLoginSignupOpen, setIsLoginSignupOpen] = useState(false);

  const openLoginSignup = () => {
    setIsLoginSignupOpen(true);
  };

  const closeLoginSignup = () => {
    setIsLoginSignupOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar openLoginSignup={openLoginSignup} />
      <Hero />
      <Projects />
      <Footer />
      <LoginSignup isOpen={isLoginSignupOpen} onClose={closeLoginSignup} />
    </div>
  );
};

export default App;
