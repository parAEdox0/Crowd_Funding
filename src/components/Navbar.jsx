import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa"; // Profile icon

const Navbar = ({ openLoginSignup, user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-3 w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 fixed top-0 z-20 shadow-lg">
      <div>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2.5xl xl:text-4xl font-bold text-[#FFD37A]">
          BackItUp
        </h1>
      </div>
      <div className="hidden md:flex items-center bg-zinc-200 rounded-full h-9 md:h-10 lg:h-11 xl:h-12 w-full max-w-[10rem] md:max-w-xs lg:max-w-md xl:max-w-lg px-3 md:px-4 gap-1 md:gap-2">
        <IoSearch className="text-base md:text-lg lg:text-lg xl:text-xl" />
        <input
          type="text"
          placeholder="Search Campaigns"
          className="border-none outline-none w-full bg-zinc-200 text-xs md:text-sm lg:text-sm xl:text-base"
        />
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center gap-2 lg:gap-4">
        {user ? (
          <>
            <div className="flex items-center gap-2">
              <FaUserCircle className="text-2xl text-gray-600" />
              <span className="text-sm lg:text-base font-medium">
                Hello, {user.name}
              </span>
            </div>
            <button
              onClick={onLogout}
              className="h-10 px-3 lg:px-4 text-sm lg:text-base font-semibold border border-gray-400 rounded-md hover:bg-gray-100 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={openLoginSignup}
              className="h-10 px-3 lg:px-4 text-sm lg:text-base font-semibold border border-gray-400 rounded-md hover:bg-gray-100 transition"
            >
              Login
            </button>
            <button
              onClick={openLoginSignup}
              className="h-10 px-3 lg:px-4 text-sm lg:text-base font-semibold bg-[#FFD37A] rounded-md hover:bg-[#ffca5a] transition"
            >
              Register
            </button>
          </>
        )}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="text-xl md:hidden text-zinc-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-3 md:hidden">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                <FaUserCircle className="text-2xl text-gray-600" />
                <span className="text-sm font-medium">Hello, {user.name}</span>
              </div>
              <button
                onClick={() => {
                  onLogout();
                  setIsOpen(false);
                }}
                className="h-10 px-4 text-sm font-semibold border border-gray-400 rounded-md hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  openLoginSignup();
                  setIsOpen(false);
                }}
                className="h-10 px-4 text-sm font-semibold border border-gray-400 rounded-md hover:bg-gray-100 transition"
              >
                Login
              </button>
              <button
                onClick={() => {
                  openLoginSignup();
                  setIsOpen(false);
                }}
                className="h-10 px-4 text-sm font-semibold bg-[#FFD37A] rounded-md hover:bg-[#ffca5a] transition"
              >
                Register
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
