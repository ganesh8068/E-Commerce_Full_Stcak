import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center justify-between px-4 sm:px-[4%] py-3">
      <img
        src={assets.logo}
        className="w-24 sm:w-28 md:w-32"
        alt="logo"
      />

      <button onClick={()=> setToken('')} className="bg-gray-600 text-white px-6 py-2 sm:px-7 sm:py-2.5 rounded-full text-sm sm:text-base cursor-pointer hover:[background-color:#C586A5]">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
