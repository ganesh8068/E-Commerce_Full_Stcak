import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
          <img src={assets.dropdown_icon} alt="" className={`h-3 hidden `} />
        </p>

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-bhej2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input value={"Men"} type="checkbox" className="w-3" /> Men
            </p>

            <p className="flex gap-2">
              <input value={"Women"} type="checkbox" className="w-3" /> Women
            </p>

            <p className="flex gap-2">
              <input value={"Kids"} type="checkbox" className="w-3" /> Kids
            </p>
          </div>
        </div>

        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-bhej2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input value={"Topwear"} type="checkbox" className="w-3" />{" "}
              Top wear
            </p>

            <p className="flex gap-2">
              <input value={"Bottomwear"} type="checkbox" className="w-3" />{" "}
              Bottom wear
            </p>

            <p className="flex gap-2">
              <input value={"Winterwear"} type="checkbox" className="w-3" />{" "}
              Winter wear
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
