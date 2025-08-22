import React, { use, useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location.pathname, setShowSearch]);

  return showSearch && visible ? (
    <div className="border-t border-b border-gray-300 bg-gray-50 text-center py-3">
      <div className="inline-flex items-center justify-center border border-gray-300 px-5 mx-3 rounded-full w-3/4 sm:w-1/2 bg-white">
        <input
          type="text"
          placeholder="Search"
          aria-label="Search"
          className="flex-1 outline-none bg-inherit text-sm p-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={assets.search_icon} alt="Search icon" className="w-4 ml-2" />
      </div>
      <img
        src={assets.cross_icon}
        alt="Close search"
        className="w-4 ml-3 inline cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
