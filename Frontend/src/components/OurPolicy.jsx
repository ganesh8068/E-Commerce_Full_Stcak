import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-row justify-around items-center text-center py-10 px-4 gap-4 text-xs sm:text-sm md:text-base text-gray-600 overflow-x-auto">

      <div className="min-w-[100px]">
        <img src={assets.exchange_icon} alt="Exchange" className="w-10 sm:w-12 m-auto mb-3 sm:mb-5" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400 text-[10px] sm:text-xs">We offer free exchange policy</p>
      </div>

      <div className="min-w-[100px]">
        <img src={assets.quality_icon} alt="Return" className="w-10 sm:w-12 m-auto mb-3 sm:mb-5" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400 text-[10px] sm:text-xs">We provide 7 days return policy</p>
      </div>

      <div className="min-w-[100px]">
        <img src={assets.exchange_icon} alt="Support" className="w-10 sm:w-12 m-auto mb-3 sm:mb-5" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400 text-[10px] sm:text-xs">We provide 24/7 customer support</p>
      </div>

    </div>
  );
};

export default OurPolicy;
