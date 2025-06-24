import '../style/App.css';
import React from 'react'
import Header from "../components/Header";

const ManualForm = () => {
    return (
    <div className="min-h-screen flex flex-col">
        <Header /> 
        <div className="continer flex flex-1 justify-center items-start p-8 space-x-6">
            {/* Left Side */}
            <div className="left bg-white rounded-lg py-20 shadow flex flex-col items-center space-y-10 border border-gray-300 w-1/3">
            <h2 className="text-lg font-bold text-center">Describe your form...</h2>
            <textarea
                placeholder="Registration Form for a Programming Workshop"
                className="max-w-full w-92 p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#6040DF]"
                required
            ></textarea>
            <button className="max-w-full bg-[#7050EF] text-white rounded-xl w-80 p-3 mb-28 hover:bg-[#7000EF]">
                Generate Form
            </button>
            </div>
            

            {/* Right Side*/}
            <div className="right bg-white rounded-lg p-6 shadow flex flex-col space-y-4 items-center border border-gray-300 w-1/3">
                <h2 className="text-xl font-bold">Form Preview</h2>
            
                <div className="p-4 w-80 space-y-3">
                    <div>
                        <label className="text-gray-800 text-md">Name</label>
                        <input placeholder="Enter name..."
                            className="w-full mt-1 p-2 rounded-xl border border-gray-300 focus:outline-none focus:border-[#6040DF]"
                        />
                    </div>

                    <div>
                        <label className="text-gray-800 text-md">Email</label>
                        <input placeholder="Enter email..."
                            className="w-full mt-1 p-2 rounded-xl border border-gray-300 focus:outline-none focus:border-[#6040DF]"
                        />
                    </div>

                    <div className="flex flex-col items-start">
                        <label className="text-gray-800 text-md">Upload File</label>
                        <div className="mt-2 flex items-center space-x-3">
                            <label className="bg-gray-100 text-gray-600 rounded-lg border border-gray-300 p-2 text-sm cursor-pointer hover:bg-gray-200">
                                Choose File
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => {
                                    const file = e.target.files[0];
                                    const fileNameLabel = document.getElementById("file-name-label");
                                    if (file) {
                                        fileNameLabel.textContent = file.name;
                                    } else {
                                        fileNameLabel.textContent = "no file chosen";
                                    }
                                    }}
                                />
                            </label>
                            <span id="file-name-label" className="text-gray-600 text-sm">no file chosen</span>
                        </div>
                    </div>
                </div>

                <div className="w-80 space-y-2">
                    <button className="text-gray-600 rounded-xl w-full p-2 hover:bg-gray-200 border border-gray-300">
                       Edit with Builder
                    </button>
                    <button className="text-gray-600 rounded-xl w-full p-2 hover:bg-gray-200 border border-gray-300">
                       Customize Design
                    </button>
                    <button className="text-gray-600 rounded-xl w-full p-2 hover:bg-gray-200 border border-gray-300">
                        Share
                    </button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default ManualForm;