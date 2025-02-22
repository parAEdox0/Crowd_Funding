import React from "react";

const Footer = ({ scrollToProjects }) => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-[#FFD37A]">BackItUp</h3>
          <p className="text-sm">Support the future.</p>
        </div>
        <div className="flex flex-col gap-2">
          <a href="#hero" className="hover:underline">
            Home
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToProjects();
            }}
            className="hover:underline"
          >
            Projects
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-xl">
            🐦
          </a>
          <a href="#" className="text-xl">
            📘
          </a>
          <a href="#" className="text-xl">
            📸
          </a>
        </div>
      </div>
      <p className="text-center text-sm mt-6">
        © 2025 BackItUp. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
