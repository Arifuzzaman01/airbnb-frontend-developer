import React from "react";
import logo from "../../assets/Airbnb_Logo_Bélo.svg.png"
import { IoMenu, IoSearch } from "react-icons/io5";
import { FaConciergeBell, FaHome, FaParachuteBox } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";



// Component for the main navigation/header
const Header = () => (
  <header className="flex justify-between items-center h-20 px-10 pt-5 mb-5 ">
    {/* Airbnb Logo */}
    <img src={logo} alt="airbnb_logo" className="w-[100px] h-auto" />

    {/* Navigation Links */}
    <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
      {/* Homes (Active) */}
      <div className="relative pb-4 cursor-pointer ">
        <div className="flex items-center">
          <FaHome size={32} className="mx-2 text-red-400" />
          <span>Homes</span>
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-black"></div>
      </div>

      {/* Experiences */}
      <div className="flex items-center relative cursor-pointer hover:text-black pb-4">
        <span className="absolute top-[-10px] right-[-15px] text-[10px] font-bold bg-pink-900 text-white rounded-t-full rounded-br-full px-2 py-0.5 shadow-md">
          NEW
        </span>
        <FaParachuteBox size={32} className="text-red-400 mx-2" />
        <span>Experiences</span>
      </div>

      {/* Services */}
      <div className="flex items-center relative cursor-pointer hover:text-black pb-4">
        <span className="absolute top-[-10px] right-[-15px] text-[10px] font-bold bg-pink-900 text-white rounded-t-full rounded-br-full px-2 py-0.5 shadow-md">
          NEW
        </span>
        <FaConciergeBell size={36} className="text-red-400" />
        <span>Services</span>
      </div>
    </div>

    {/* Right-side Icons */}
    <div className="flex items-center space-x-4 text-gray-500">
      <button className="text-sm font-medium p-3 rounded-full ">
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


const SearchBar = () => (
  <div className="flex justify-center ">
    <div className="bg-white   rounded-full shadow-xl border-[1.5px] border-gray-200 max-w-4xl w-full flex text-sm text-gray-700 gap-2">
      {/* 'Where' section */}
      <div className="flex flex-col justify-center pl-7 flex-grow   hover:bg-gray-100 rounded-full cursor-pointer py-3">
        <span className="font-bold">Where</span>
        <input
          type="text"
          placeholder="Search destinations"
          className="bg-transparent focus:outline-none placeholder-gray-500 w-full"
        />
      </div>

      {/* 'Check in' section */}
      <div className="flex items-center group ">
        {/* First div */}
        <div className="h-10 border-l-[1.5px] border-gray-300 my-auto group-hover:hidden"></div>
        {/* Second div (the border) */}
        <div className="flex flex-col justify-center hover:bg-gray-100 rounded-full cursor-pointer min-w-[170px] pl-10 h-full">
          <span className="font-bold">Check in</span>
          <span className="text-gray-500">Add dates</span>
        </div>
      </div>

      <div className="flex  items-center group">
        <div className="h-10 border-l-[1.5px] border-gray-300 my-auto group-hover:border-white"></div>
        {/* 'Check out' section */}
        <div className="flex flex-col justify-center hover:bg-gray-100 rounded-full cursor-pointer min-w-[170px] pl-10 h-full">
          <span className="font-bold">Check out</span>
          <span className="text-gray-500">Add dates</span>
        </div>

        <div className="h-10 border-l-[1.5px] border-gray-300 my-auto group-hover:border-white"></div>
      </div>

      {/* 'Who' section & Search Button */}
      <div className="flex flex-grow items-center  rounded-full cursor-pointer h-full">
        <div className="flex justify-between items-center flex-grow hover:bg-gray-100 rounded-full h-full">
          <div className="flex flex-col pl-2">
            <span className="font-bold pl-3">Who</span>
            <span className="text-gray-500 pl-3">Add guests</span>
          </div>
          <button className="p-4 mr-2 bg-red-400 rounded-full text-white transition-colors hover:bg-red-700">
            <IoSearch size={22} />
          </button>
        </div>

      
      </div>
    </div>
  </div>
);

// Main Application Container
const Navbar = () => (
  <div className="w-full bg-white sticky top-0 z-10 ">
    <Header />
    <SearchBar />
  </div>
);

export default Navbar;
