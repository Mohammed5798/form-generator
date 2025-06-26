import '../style/App.css';
import { CgTemplate } from "react-icons/cg";
import { FaBrain } from "react-icons/fa6";
import { MdDashboardCustomize } from "react-icons/md";
import { IoDocumentsSharp } from "react-icons/io5";
import React, { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import { FaRegUser } from "react-icons/fa6";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  function translate_list() {
    if (menuRef.current.classList.contains('open')) {
      menuRef.current.style.transform = "translateX(100%)";
      menuRef.current.classList.remove("open")
    }else{
      menuRef.current.style.transform = "translateX(-100%)";
      menuRef.current.classList.add("open")
    }
  }

  return (
    <>
      <nav className="bg-white flex justify-between items-center border border-b-gray-300 p-4 text-white">
        <div className="logo flex items-center space-x-3 ml-6">
          <img src="/logo1.png" alt="user" className="w-8" />
          <span className="font-bold text-2xl text-[#7050EF]">Formigo</span>
        </div>
            <div className="list flex space-x-6 text-[#7050EF] text-lg font-semibold">
                <a href="/main" className="hover:underline underline-offset-6">AI Form</a>
                <a href="#" className="hover:underline underline-offset-6">My Forms</a>
                <a href="#" className="hover:underline underline-offset-6">Customize</a>
                <a href="#" className="hover:underline underline-offset-6">Templates</a>
            </div>
        <div className="profile bg-gray-200 rounded-full w-10 h-10 cursor-pointer mr-6 flex items-center justify-center"
          onClick={toggleSidebar}
        >
          <FaRegUser size={25} className="text-2xl text-gray-600"/>
        </div>
        <div onClick={translate_list} className="hidden burger cursor-pointer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div ref={menuRef} className="mobile-menu transition-all duration-300 ease-in-out rounded-bl-[10px]">
        <a href="#" className="hover:bg-[#c4c4c4] block"><FaBrain className="inline mr-[10px]" />AI Form</a>
        <a href="#" className="hover:bg-[#c4c4c4] block"><IoDocumentsSharp className="inline mr-[10px]" />My Forms</a>
        <a href="#" className="hover:bg-[#c4c4c4] block"><MdDashboardCustomize className="inline mr-[10px]" />Customize</a>
        <a href="#" className="hover:bg-[#c4c4c4] block"><CgTemplate className="inline mr-[10px]" />Templates</a>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;
