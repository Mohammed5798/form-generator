import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
        <nav className="bg-[#7050EF] flex justify-between items-center p-4 text-white">
            <div className="flex items-center space-x-3 ml-6">
                <img src="/logo.png" alt="user" className="w-16" />
                <span className="font-bold text-lg">Infinity</span>
            </div>

            <div className="flex space-x-6">
                <a href="#" className="hover:underline">AI Form</a>
                <a href="#" className="hover:underline">My Forms</a>
                <a href="#" className="hover:underline">Customize</a>
                <a href="#" className="hover:underline">Templates</a>
            </div>

            <div className="bg-gray-200 rounded-full w-10 h-10 cursor-pointer mr-6 flex items-center justify-center" onClick={toggleSidebar}>
                <span className="text-2xl text-gray-600">👤</span>
            </div>
        </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      
    </>
  );
};

export default Header;
