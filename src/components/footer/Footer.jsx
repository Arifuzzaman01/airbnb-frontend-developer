import React, { useState } from "react";

const Footer = () => {
  const [active, setActive] = useState("inspirations");
  return (
    <div>
      <h1 className="text-2xl font-bold">Inspiration for future getaways</h1>
      <div>
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
      
    </div>
  );
};

export default Footer;
