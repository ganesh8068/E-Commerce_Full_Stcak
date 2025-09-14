import React from "react";
import Tittle from "../components/Tittle";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Tittle text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 mb-28 flex flex-col md:flex-row items-center md:items-start justify-center gap-10 px-4">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px] rounded-lg shadow-md"
          alt="Contact"
        />

        <div className="flex flex-col justify-center items-start gap-6 max-w-xl">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            561 Bandra Linking Road <br />
            Mumbai-51, Maharashtra
          </p>
          <p className="text-gray-500">
            Tel: (91) 12345-67890 <br />
            Email: user@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Career at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
