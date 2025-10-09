import React, { useEffect, useState } from "react";
import logo from "../../assets/Airbnb_Logo_Bélo.svg.png";
import { IoMenu, IoSearch } from "react-icons/io5";
import { FaConciergeBell, FaHome, FaParachuteBox } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Header = ({ isScrolled }) => (
  <header
    className={`flex justify-center md:justify-between items-center h-20  md:px-10 pt-5 mb-5 transition-all duration-500 ${
      isScrolled ? "pb-2" : "pb-5"
    }`}
  >
    {/* Airbnb Logo */}
    <img src={logo} alt="airbnb_logo" className="w-[100px] h-auto hidden md:block" />

    {/* Navigation Links or Compact Search */}
    {isScrolled ? (
      <div className="hidden md:flex justify-center flex-grow transition-all duration-500">
        {/* Small SearchBar on scroll */}
        <SearchBar isCompact />
      </div>
    ) : (
      <div className={`flex justify-center md:justify-between gap-2 sm:gap-4 md:gap-5 items-center h-20 px-2 md:px-10 pt-5 mb-5 transition-all duration-700 transform ${
      isScrolled ? " translate-y-0 opacity-100" : "translate-y-2 "
    }`}>
        {/* Homes (Active) */}
        <div className="relative pb-4 cursor-pointer">
          <div className="flex items-center">
            <FaHome  className="mx-2 text-red-400 text-2xl md:text-3xl" />
            <span>Homes</span>
          </div>
          <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-black"></div>
        </div>

        {/* Experiences */}
        <div className="flex items-center relative cursor-pointer hover:text-black pb-4">
          <span className="absolute top-[-10px] right-[-15px] text-[10px] font-bold bg-pink-900 text-white rounded-t-full rounded-br-full px-2 py-0.5 shadow-md">
            NEW
          </span>
          <FaParachuteBox  className="text-red-400 mx-2 text-2xl md:text-3xl" />
          <span>Experiences</span>
        </div>

        {/* Services */}
        <div className="flex items-center relative cursor-pointer hover:text-black pb-4">
          <span className="absolute top-[-10px] right-[-15px] text-[10px] font-bold bg-pink-900 text-white rounded-t-full rounded-br-full px-2 py-0.5 shadow-md">
            NEW
          </span>
          <FaConciergeBell className="text-red-400 text-2xl md:text-3xl" />
          <span>Services</span>
        </div>
      </div>
    )}

    {/* Right-side Icons */}
    <div className="hidden md:flex items-center space-x-4 text-gray-500">
      <button className="text-sm font-medium p-3 rounded-full">
        Become a host
      </button>

      <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
        <TbWorld size={22} />
      </button>
      <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
        <IoMenu size={22} className="font-bold" />
      </button>
    </div>
  </header>
);

const SearchBar = ({ isCompact = false }) => (
  <div
    className={` md:flex justify-center transition-all duration-500 ${
      isCompact ? "max-w-md mx-auto" : "max-w-4xl mx-auto"
    } w-full`}
  >
    <div
      className={` bg-white rounded-full shadow-xl border-[1.5px] border-gray-200 w-full flex text-sm text-gray-700 gap-2 ${
        isCompact ? "scale-90" : "scale-100"
      } transition-all duration-500`}
    >
      {/* 'Where' section */}
      <div className="flex flex-col justify-center pl-7 flex-grow hover:bg-gray-100 rounded-full cursor-pointer py-3">
        <span className="font-bold">Where</span>
        <input
          type="text"
          placeholder="Search destinations"
          className="bg-transparent focus:outline-none placeholder-gray-500 w-full"
        />
      </div>

      {/* 'Check in' section */}
      {!isCompact && (
        <>
          <div className="flex items-center group">
            <div className="h-10 border-l-[1.5px] border-gray-300 my-auto group-hover:hidden"></div>
            <div className="flex flex-col justify-center hover:bg-gray-100 rounded-full cursor-pointer min-w-[170px] pl-10 h-full">
              <span className="font-bold">Check in</span>
              <span className="text-gray-500">Add dates</span>
            </div>
          </div>

          <div className="flex items-center group">
            <div className="h-10 border-l-[1.5px] border-gray-300 my-auto group-hover:border-white"></div>
            <div className="flex flex-col justify-center hover:bg-gray-100 rounded-full cursor-pointer min-w-[170px] pl-10 h-full">
              <span className="font-bold">Check out</span>
              <span className="text-gray-500">Add dates</span>
            </div>

            <div className="h-10 border-l-[1.5px] border-gray-300 my-auto group-hover:border-white"></div>
          </div>
        </>
      )}

      {/* 'Who' section & Search Button */}
      <div className="flex flex-grow items-center rounded-full cursor-pointer h-full">
        <div className="flex justify-between items-center flex-grow hover:bg-gray-100 rounded-full h-full">
          {!isCompact && (
            <div className="flex flex-col pl-2">
              <span className="font-bold pl-3">Who</span>
              <span className="text-gray-500 pl-3">Add guests</span>
            </div>
          )}
          <button className="p-4 mr-2 bg-red-400 rounded-full text-white transition-colors hover:bg-red-700">
            <IoSearch size={22} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

// 🟢 Main Navbar Component with Scroll Behavior
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`container mx-auto sticky top-0 z-10 transition-all  duration-700 bg-white pb-5 flex flex-col-reverse md:flex-col`}
    >
      <Header isScrolled={isScrolled} />
      {!isScrolled && <SearchBar />}
      
      <div className="flex md:hidden justify-center flex-grow transition-all duration-500">
        {/* Small SearchBar on scroll */}
        <SearchBar isCompact />
      </div>
    
    </div>
  );
};

export default Navbar;
