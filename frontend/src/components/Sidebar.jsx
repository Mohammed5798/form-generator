import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>

      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={onClose} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-gray-800 shadow-lg z-50 transform transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 flex flex-col items-center relative">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            onClick={onClose}
            title="Close"
          >
            <AiOutlineClose />
          </button>

          <div className="bg-gray-100 rounded-full w-16 h-16 mt-8 flex items-center justify-center">
            <FaRegUser size={25} />
          </div>

          <h3 className="font-bold mt-3">User Name</h3>

          <div className="mt-3 w-full space-y-3 text-gray-600 text-sm">
            <div><span className="font-semibold">Email:</span> user@example.com</div>
            <div><span className="font-semibold">Phone:</span> +964 777 777777</div>
            <div><span className="font-semibold">Address:</span> Baghdad, Iraq</div>
          </div>

          <hr className="w-full my-4" />

          <div className="w-full space-y-2">
            <a href="/forgotPage" className="block hover:text-[#7050EF]">Change Password</a>
            <a href="/login" className="block hover:text-[#7050EF]">Log Out</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
