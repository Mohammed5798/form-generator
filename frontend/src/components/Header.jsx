import '../style/App.css';
import { CgTemplate } from "react-icons/cg";
import { FaBrain, FaRegUser } from "react-icons/fa6";
import { MdDashboardCustomize } from "react-icons/md";
import { IoDocumentsSharp } from "react-icons/io5";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleMobileMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <nav className="bg-white flex justify-between items-center border-b border-gray-300 p-4 relative z-50">
        {/* Logo */}
        <div className="flex items-center space-x-3 ml-2 sm:ml-6">
          <img src="/logo1.png" alt="logo" className="w-8" />
          <span className="text-2xl sm:text-3xl text-[#7050EF]" style={{ fontFamily: "'Pacifico', cursive" }} >
            Formigo
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-[#7050EF] text-md sm:text-lg font-semibold">
          <a href="/main" className="hover:underline underline-offset-6">AI Form</a>
          <a href="#" className="hover:underline underline-offset-6">My Forms</a>
          <a href="#" className="hover:underline underline-offset-6">Customize</a>
          <a href="#" className="hover:underline underline-offset-6">Templates</a>
        </div>

        <div className="hidden md:flex bg-gray-200 rounded-full w-10 h-10 cursor-pointer mr-6 items-center justify-center"
          onClick={toggleSidebar}
        >
          <FaRegUser size={20} className="text-gray-600" />
        </div>

        {/* Mobile: Profile + Menu Icon */}
        <div className="flex items-center space-x-3 md:hidden mr-2">
          <div className="bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center" onClick={toggleSidebar}>
            <FaRegUser size={20} className="text-gray-600" />
          </div>

          {/* Hamburger Menu */}
          <div onClick={toggleMobileMenu} className="flex flex-col cursor-pointer space-y-1">
            <span className="w-6 h-0.5 bg-[#7050EF]"></span>
            <span className="w-6 h-0.5 bg-[#7050EF]"></span>
            <span className="w-6 h-0.5 bg-[#7050EF]"></span>
          </div>
        </div>
      </nav>


      {/* Mobile Menu */}
      <div
        className={`fixed top-[64px] right-0 w-40 bg-gray-50 shadow-md rounded-lg z-40 transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <a href="/main" className="block px-4 py-3 hover:bg-gray-100 text-[#7050EF] text-lg">
          <FaBrain className="inline mr-2" /> AI Form
        </a>
        <a href="#" className="block px-4 py-3 hover:bg-gray-100 text-[#7050EF] text-lg">
          <IoDocumentsSharp className="inline mr-2" /> My Forms
        </a>
        <a href="#" className="block px-4 py-3 hover:bg-gray-100 text-[#7050EF] text-lg">
          <MdDashboardCustomize className="inline mr-2" /> Customize
        </a>
        <a href="#" className="block px-4 py-3 hover:bg-gray-100 text-[#7050EF] text-lg">
          <CgTemplate className="inline mr-2" /> Templates
        </a>
      </div>

      {/* Sidebar Profile */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;
