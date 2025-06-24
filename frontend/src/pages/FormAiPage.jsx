import '../style/App.css';
import React from "react";
import Header from "../components/Header";

const FormAiPage = () => {
    return (
    <div className="min-h-screen flex flex-col">
        <Header />

        <div className="continer flex flex-1 justify-center items-start p-8 space-x-6">
            {/* Left Side */}
            <div className="left bg-white rounded-lg px-[15px] py-20 shadow flex flex-col items-center space-y-10 border border-gray-300 w-1/3">
            <h2 className="text-lg font-bold text-center">Describe your form To Generate By AI</h2>
            <input
                placeholder="Registration Form for a Programming Workshop"
                className="w-full max-w-sm p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#6040DF]"
                required
                />
            <button className="bg-[#7050EF] text-white rounded-xl w-full max-w-xs p-3 mb-20 hover:bg-[#7000EF]">
            Generate Form
            </button>
            </div>

            {/* Right Side*/}
            <div className="w-full max-w-sm space-y-3">
            
            <button className="text-black rounded-2xl text-xl w-full py-8 hover:bg-gray-200 border border-gray-800 flex justify-center"
            >
                Upload Image +
            </button>

                <div className="right bg-white rounded-lg p-6 shadow flex flex-col items-center space-y-4 border border-gray-300 w-full">
                    <div className="w-80 space-y-3">
                        <div>
                            <label className="text-gray-800 text-md">Form Title</label>
                            <input
                            placeholder="Enter form title..."
                            className="w-full mt-1 p-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-[#6040DF]"
                            />
                        </div>

                        <div>
                            <label className="text-gray-800 text-md">Form Description</label>
                            <textarea
                            placeholder="Describe Your Form..."
                            rows={3}
                            className="w-full mt-1 p-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-[#6040DF]"
                            />
                        </div>

                        <button
                            className="bg-gray-100 text-gray-600 rounded-2xl w-full p-3 mt-2 hover:bg-gray-200 border border-gray-300"
                        >
                            Add A Question +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default FormAiPage;