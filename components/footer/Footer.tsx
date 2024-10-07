import Image from "next/image";
import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';



const Footer = () => {
    return (
        <>
      <footer className="bg-blue-900 text-white">
      <div className="p-8">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div>
          <img src="/images/logo2.png" alt="Logo" width={200} />
          <p className="mt-2">
          LinguaHub connects you with professional translators for events, travel, and document translation. Discover expert translators tailored to your needs.     
           </p>
        </div>
    
        <div className="flex space-x-8">
          <div>
            <h4 className="text-lg font-bold">Languages</h4>
            <ul className="space-y-2">
                <a href="#">
              <li>English</li>
              </a>
              <a href="#">
              <li>Indonesia</li>
              </a>

                <a href="#">
              <li>Japan</li>
              </a>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Specialization</h4>
            <ul className="space-y-2">
                <a href="#">
              <li>General</li>
              </a>
              <a href="#">
              <li>Business</li>
              </a>
              <a href="#">
              <li>Finance</li>
              </a>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Social</h4>
            <div className="flex flex-row items-center gap-2">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors duration-300">
              <FaInstagram size={20} className="sm:w-6 sm:h-6" />
            </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-300">
              <FaFacebook size={20} className="sm:w-6 sm:h-6" />
            </a>
    
            </div>
          </div>
        </div>
      </div>
      </div>
    
      <div className="mt-8 pt-6">
        <hr className="border-t border-gray-400 w-full" />
        <p className="text-center text-white text-sm mt-4 p-5">
          &copy; {new Date().getFullYear()} LinguaHub. All rights reserved.
        </p>
      </div>
    </footer>
    </>
    );
};


export default Footer