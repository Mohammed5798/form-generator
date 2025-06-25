import '../style/App.css';
import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { BsMagic } from "react-icons/bs";
import { FiEdit, FiLink, FiDownload } from "react-icons/fi";
import { MdFormatPaint } from "react-icons/md";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* AI Build */}
            <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center border border-gray-300 space-y-3">
                <div className="bg-purple-100 p-3 rounded-full">
                    <BsMagic className="text-[#7000EF] text-3xl" />
                </div>
                <h2 className="text-lg font-bold mt-3">Let AI Build it for You</h2>
                <p className="text-gray-600 text-center mt-2">Describe the form you want to create</p>
                <Link to="/formAI">
                    <button className="bg-[#7050EF] text-white rounded-lg mt-3 w-72 py-2  hover:bg-[#7000EF]">Generate</button>
                </Link>
            </div>

            {/* Build Yourself */}
            <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center border border-gray-300 space-y-3">
                <div className="bg-gray-100 p-3 rounded-full">
                    <FiEdit className="text-gray-600 text-3xl" />
                </div>
                <h2 className="text-lg font-bold mt-3">Build It Yourself</h2>
                <p className="text-gray-600 text-center mt-2">Start generate Select fonts, color & Style</p>
                <Link to="/createForm">
                    <button className="bg-gray-50 text-gray-600 rounded-lg mt-3 w-72 py-2 hover:bg-gray-200 border border-gray-300">Start from Scratch</button>
                </Link>
            </div>

            {/*  Cards */}
            <Card 
                icon={<BsMagic className="text-[#7000EF] text-3xl" />}
                title="Create AI Form"
                description="Generate a form with AI"
            />
            <Card 
                icon={<FiLink className="text-[#7000EF] text-3xl" />}
                title="QR Code & Link"
                description="Share your form"
            />
            <Card 
                icon={<MdFormatPaint className="text-[#7000EF] text-3xl" />}
                title="Customize Theme"
                description="Change colors, font & size"
            />
            <Card 
                icon={<FiDownload className="text-[#7000EF] text-3xl" />}
                title="Download"
                description="Save your form as file"
            />
        </div>
    </div>
  );
};

export default MainPage;

