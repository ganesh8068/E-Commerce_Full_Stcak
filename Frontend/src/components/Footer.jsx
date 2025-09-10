import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="mt-20 text-sm text-gray-600">
      {/* Grid Content */}
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-14">
        
        {/* Logo & About */}
        <div>
          <img src={assets.logo} alt="Logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi dolorem hic? Sed vitae quisquam dicta id asperiores? Nesciunt numquam nihil quia. Dicta, fuga? Vero voluptatibus nemo adipisci rerum fuga.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5 text-black">COMPANY</p>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-black cursor-pointer transition">Home</li>
            <li className="hover:text-black cursor-pointer transition">About Us</li>
            <li className="hover:text-black cursor-pointer transition">Delivery</li>
            <li className="hover:text-black cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-medium mb-5 text-black">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2">
            <li className="cursor-default">+91 1234567890</li>
            <li className="cursor-default">contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className='mt-10'>
        <hr />
        <p className="py-5 text-sm text-center">© 2025 forever.com — All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
