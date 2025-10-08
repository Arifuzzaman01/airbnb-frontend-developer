import React, { useState } from "react";
import FooterSecondaryTab from "./FooterSecondaryTab";
import FooterActiveTab from "./FooterActiveTab";
import { TbWorld } from "react-icons/tb";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  const [active, setActive] = useState("inspirations");
  return (
    <div className="bg-gray-50 mt-10 ">
      <div className="container mx-auto px-8 py-10">
        <div className="">
        <h1 className="text-2xl font-bold">Inspiration for future getaways</h1>
          <button
            onClick={() => setActive("inspirations")}
            className={`px-4 py-2 font-medium ${
              active === "inspirations"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Travel tips & inspiration
          </button>
          <button
            onClick={() => setActive("apartment")}
            className={`px-4 py-2 font-medium ${
              active === "apartment"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Airbnb-friendly apartments
          </button>
        </div>
        <div>{active === "inspirations" ?<FooterActiveTab/> : <FooterSecondaryTab />}</div>
        {/* Footer Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
          
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-4 lg:mb-0">
              <div className="text-gray-600 text-sm">
                © 2025 Airbnb, Inc.
              </div>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Terms
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Sitemap
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Your Privacy Choices
                </a>
              </div>
            </div>

           
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <TbWorld size={20} />
                <span>English (US)</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <span className="font-bold text-xl">$</span>
                <span>USD</span>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="text-gray-900 hover:text-gray-800 transition-colors">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-900 hover:text-gray-800 transition-colors">
                  <FaXTwitter  />
                </a>
                <a href="#" className="text-gray-900 hover:text-gray-800 transition-colors">
                  <FaInstagramSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
