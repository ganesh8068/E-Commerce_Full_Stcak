import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2 bg-white">
      <div className="flex flex-col gap-4 pt-6 pl-[10%] text-[15px]">
        {/* Add Item */}
        <NavLink
          to="/add"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 transition"
        >
          <img src={assets.add_icon} alt="Add" className="w-5" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        {/* List Items */}
        <NavLink
          to="/list"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 transition"
        >
          <img src={assets.order_icon} alt="List" className="w-5" />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        {/* Orders */}
        <NavLink
          to="/orders"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 transition"
        >
          <img src={assets.order_icon} alt="Orders" className="w-5" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
