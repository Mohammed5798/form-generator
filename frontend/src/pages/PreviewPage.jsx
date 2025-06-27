import React, { useState } from 'react';
import Header from '../components/Header';
import { IoIosArrowBack } from "react-icons/io";
import {Link} from 'react-router-dom';

const PreviewPage = () => {

  const [shortAnswer, setShortAnswer] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Short Answer:', shortAnswer);
    console.log('Uploaded File:', file);
  };


  return (
    <div className="min-h-screen bg-white ">
      <Header/>
      <div className='flex flex-col items-center py-5 px-4'>

        {/* Card */}
      <div className="max-[700px]:p-0 w-full max-w-2xl bg-white p-6 ">
        <div className="bg-purple-100 rounded-lg flex items-center justify-center mb-6">
          <img src="/Frame.png" alt="Calendar" className="w-full"/>
        </div>

        <h2 className="text-2xl font-semibold mb-2">Preview a Form</h2>
        <p className="mb-4 text-gray-800 text-lg">Please fill out the form below:</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Short Answer */}
          <div>
            <label className="block text-gray-900 text-lg mb-1">
              Short Answer <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={shortAnswer}
              onChange={(e) => setShortAnswer(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-gray-900 text-lg mb-1">File Upload</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="block w-full text-md text-gray-500 file:mr-4 file:py-1 file:px-5 file:rounded-lg file:border file:border-gray-300 file:text-md file:bg-purple-100 file:text-gray-900 hover:file:bg-purple-200 file:cursor-pointer"
            />
          </div>

          {/* Submit */}
          <button type="submit"
            className="w-full bg-[#7050EF] text-white py-2 rounded-lg hover:bg-[#7000EF] transition cursor-pointer"
          >
            Submit
          </button>
        </form>

      </div>

      </div>

        {/* Footer buttons */}
        <div className="footer-buttons flex justify-between items-center p-4 px-14 border-t border-gray-300">
            <Link to="/formBuilder">
                <button className="cursor-pointer px-4 py-2 border border-gray-300 rounded flex flex-row justify-center items-center focus:outline-none focus:border-[#7050EF]">
                <IoIosArrowBack /> Back
                </button>
            </Link>
            <div className="space-x-6 max-[468px]:space-x-2">
            <Link to="/formStyle">
            <button className="cursor-pointer px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#7050EF]">
                Customize Style
            </button>
            </Link>
            <Link to="/qrPage">
            <button className="cursor-pointer px-6 py-2 bg-[#7050EF] text-white rounded">Save</button>
            </Link>
            </div>
        </div>

    </div>
  )
}

export default PreviewPage;