import React from "react";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav
      id="Navbar"
      className="h-[17vh] flex items-center justify-between px-[70px]"
    >
      <div id="logo" className="w-[17vw]">
        {/* <img src="logo.png" alt="" /> */}
        <h1 className="text-[2.5vw] font-bold text-[#FFD37A]">BackItUp</h1>
      </div>
      <div
        id="search-bar"
        className="flex items-center bg-zinc-100 rounded-3xl h-12 w-[30vw] px-6 gap-2"
      >
        <IoSearch className="text-[#8A6B7D] font-bold" />
        <input
          type="text"
          placeholder="Search Projects/Campaigns/Rewards"
          className="border-none outline-none w-[80%] bg-zinc-100 h-5 text-[#8A6B7D]"
        />
      </div>
      <div id="buttons">
        <button
          className="ml-6 h-10 rounded-md text-sm w-[10vw] text-[#8A6B7D] font-semibold"
          id="asCreator"
        >
          Get Started as Creator
        </button>
        <button
          className="bg-[#FFD37A] ml-6 h-10 text-white rounded-md text-[14px] font-semibold w-[10vw]"
          id="asBacker"
        >
          Explore as Backer
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
