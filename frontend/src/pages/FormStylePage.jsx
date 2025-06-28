import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const FormStylePage = () => {
  const [activeTab, setActiveTab] = useState("Colors");
  const [bgColor, setBgColor] = useState("#FCFBFC");
  const [btnColor, setBtnColor] = useState("#7C3AED");
  const [textColor, setTextColor] = useState("#333");
  const [fontFamily, setFontFamily] = useState("sans-serif");
  const [borderRadius, setBorderRadius] = useState("4px");
  const [spacing, setSpacing] = useState("8px");

  return (
    <div className="min-h-screen flex flex-col">
        <Header/>
      <div className="flex flex-1 space-x-20 mt-4 p-8 px-12">
        {/* Left Side: Form Preview */}
        <div className="flex-1 space-y-4">
            <div className="bg-[#E3DAFF] rounded-lgflex justify-center items-center rounded-lg">
                <img src="/Frame.png" alt="user" className="w-full" />
            </div>

            <h2 className="text-2xl font-bold">Preview a Form</h2>
            <p className="text-gray-600">Please fill out the form below:</p>

            <div className="space-y-4 p-4 rounded" style={{ backgroundColor: bgColor, fontFamily, color: textColor, borderRadius, }} >
                <div>
                <label className="font-medium">
                    Short Answer <span className="text-red-600">*</span>
                </label>
                <input className="border border-gray-300 rounded-lg p-2 w-full mt-1 focus:outline-none focus:border-[#6040DF]" placeholder="" />
                </div>
                <div>
                <label className="font-medium">File Upload</label>
                <div className="flex items-center mt-1 space-x-3">
                    <label className="cursor-pointer border border-gray-300 rounded-lg p-2 px-4 hover:bg-gray-200 focus:outline-none focus:border-[#6040DF]">
                    Choose File
                    <input type="file" className="hidden" onChange={() => { /* handle file change  */ }} />
                    </label>
                    <span className="text-gray-600">No file chosen</span>
                </div>
                </div>
                <button className="w-full rounded py-2 text-white mt-4" style={{ backgroundColor: btnColor }}> Submit</button>
            </div>
        </div>


        {/* Right Side: Form Styling Panel */}
        <div className="w-96 rounded-lg border border-gray-300 p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Style Your Form</h3>
            <span className="cursor-pointer text-gray-500">✕</span>
          </div>

         <div className="flex justify-around text-md font-medium border border-gray-300  rounded-lg">
            {["Colors", "Typography", "Layout"].map((tab) => (
                <span
                key={tab}
                className={`cursor-pointer flex-1 text-center rounded-lg p-2 
                    ${activeTab === tab 
                        ? "bg-gray-200 text-[#6040DF] font-bold" 
                        : "text-gray-500"
                    }`}
                onClick={() => setActiveTab(tab)}
                >
                {tab}
                </span>
            ))}
         </div>


          {/* Tab Content */}
          {activeTab === "Colors" && (
            <div className="space-y-3">
            <div>
                <label className="text-md">Background color</label>
                <div className="flex items-center mt-1 space-x-2 border border-gray-300 rounded-lg">
                    <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-10 h-10 rounded-lg p-1 text-md"
                    />
                    <span className="text-gray-700">FCBFC</span>
                </div>
            </div>

            <div>
                <label className="text-md">Button color</label>
                <div className="flex items-center mt-1 space-x-2 border border-gray-300 rounded-lg">
                    <input
                        type="color"
                        value={btnColor}
                        onChange={(e) => setBtnColor(e.target.value)}
                        className="w-10 h-10 rounded-lg p-1"
                    />
                    <span className="text-gray-700">Color</span>
                </div>
            </div>

            <div>
                <label className="text-md">Text color</label>
                <div className="flex items-center mt-1 space-x-2 border border-gray-300 rounded-lg">
                    <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-10 h-10 rounded-lg p-1"
                    />
                    <span className="text-gray-700">Auto</span>
                </div>
            </div>
            </div>

          )}

          {activeTab === "Typography" && (
            <div className="space-y-3 mb-38">
              <div>
                <label className="text-md">Font Family</label>
                <select
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 mt-2 w-full text-md focus:outline-none focus:border-[#6040DF]"
                >
                  <option value="sans-serif">Sans Serif</option>
                  <option value="serif">Serif</option>
                  <option value="monospace">Monospace</option>
                </select>
              </div>
              <div>
                <label className="text-md">Text Color</label>
                <div className="flex items-center mt-1 space-x-2 border border-gray-300 rounded-lg">
                    <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-10 h-10 rounded-lg p-1 mt-1"
                    />
                    <span className="text-gray-700">Color</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Layout" && (
            <div className="space-y-3 mb-38">
              <div>
                <label className="text-md">Field Border Radius</label>
                <input
                  type="text"
                  value={borderRadius}
                  onChange={(e) => setBorderRadius(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 mt-2 w-full text-md focus:outline-none focus:border-[#6040DF]"
                />
              </div>
              <div>
                <label className="text-md">Field Spacing</label>
                <input
                  type="text"
                  value={spacing}
                  onChange={(e) => setSpacing(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 mt-2 w-full text-md focus:outline-none focus:border-[#6040DF]"
                />
              </div>
            </div>
          )}

            <div className="bg-[#E3DAFF] rounded-lg p-3 mt-20 flex justify-center">
                <button
                className="font-semibold text-[#6040DF]"
                onClick={() => {
                    alert(`تم حفظ التنسيقات!\n
                        Background: ${bgColor}\n
                        Button Color: ${btnColor}\n
                        Text Color: ${textColor}\n
                        Font Family: ${fontFamily}\n
                        Border Radius: ${borderRadius}\n
                        Spacing: ${spacing}`);
                }}
                >
                Save Style
                </button>
            </div>
        </div>
      </div>

               {/* Footer Buttons */}
            <div className="w-full flex justify-between items-center mt-12 p-4 px-14 border-t border-gray-300">
                <Link to="/preview">
                    <button className="px-4 py-1 border border-gray-300 rounded-lg flex flex-row justify-center items-center focus:outline-none focus:border-[#6040DF]">
                        <IoIosArrowBack /> Back
                    </button>
                </Link>

                <Link to="/formResponses">
                    <button className="max-[725px]:p-[8px] px-7 py-2 bg-[#7050EF] text-white rounded-lg">View Responses</button>
                </Link>
                
            </div>



    </div>
  );
};

export default FormStylePage;