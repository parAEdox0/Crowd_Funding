import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import LoginSignup from "./components/LoginSignup";

const App = () => {
  const projectsRef = useRef(null);
  const [isLoginSignupOpen, setIsLoginSignupOpen] = useState(false);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
      <Projects ref={projectsRef} />
      <Footer scrollToProjects={scrollToProjects} />
      <LoginSignup isOpen={isLoginSignupOpen} onClose={closeLoginSignup} />
    </div>
  );
};

export default App;
