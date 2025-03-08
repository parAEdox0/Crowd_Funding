import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import LoginSignup from "./components/LoginSignup";

const App = () => {
  const [isLoginSignupOpen, setIsLoginSignupOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        // Split JWT into header, payload, signature; decode payload
        const payload = JSON.parse(atob(token.split(".")[1]));
        console.log("Decoded payload:", payload); // Debug
        setUser({ name: payload.name || payload.email || "User" });
      } catch (error) {
        console.error("Token decoding failed:", error);
        localStorage.removeItem("token"); // Clear invalid token
      }
    }
  }, []);

  const openLoginSignup = () => {
    setIsLoginSignupOpen(true);
  };

  const closeLoginSignup = (userData) => {
    setIsLoginSignupOpen(false);
    if (userData) {
      setUser(userData);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        openLoginSignup={openLoginSignup}
        user={user}
        onLogout={handleLogout}
      />
      <Hero />
      <Projects />
      <Footer />
      <LoginSignup isOpen={isLoginSignupOpen} onClose={closeLoginSignup} />
    </div>
  );
};

export default App;
