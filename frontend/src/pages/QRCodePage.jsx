import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { QRCodeSVG } from "qrcode.react";
import Header from '../components/Header';
import {Link} from 'react-router-dom';



const QRCodePage = () => {
    const formLink = "https://formigo/forms/12345";

    const copyLink = async () => {
    await navigator.clipboard.writeText(formLink);
    alert("Link Copied to clipboard!");
  };


  return (
    <div className="h-screen w-screen ">
      {/* Navbar */}
      <div className=""><Header/></div>

        <div className='flex flex-col items-center justify-start space-y-10'>

            <h1 className="text-2xl font-semibold mt-12">Your Form is Ready!</h1>

            <div className="flex space-x-16">
                {/* QR Section */}
                <div className="border border-gray-300 w-78 rounded-lg p-12 flex flex-col items-center">
                <QRCodeSVG value={formLink} size={160} />
                <button
                    onClick={() => {
                    // You can implement downloading the QR image
                    alert("Download QR is clicked");
                    }}
                    className="border border-gray-300 rounded text-sm px-6 mt-5 py-2"
                >
                    Download QR
                </button>
                </div>

                {/* Link Section */}
                <div className="border border-gray-300 w-78 rounded-lg p-10 flex flex-col items-start space-y-3">
                    <span className="text-lg font-medium">Form link</span>
                    <input type="text" value={formLink} readOnly className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-[#6040DF]"/>
                    <div className="flex flex-col space-y-2 w-full">
                        <button onClick={copyLink} className="rounded-lg border border-gray-300 p-2 hover:bg-gray-200 focus:outline-none focus:border-[#6040DF]">
                         Copy Link
                        </button>
                        <a href={formLink} target="_blank" rel="noreferrer"
                        className="rounded-lg p-2 border border-gray-300 hover:bg-gray-200 text-center block focus:outline-none focus:border-[#6040DF]"
                        > Open Form
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="w-full flex justify-between items-center mt-12 p-4 px-14 border-t border-gray-300">
                <Link to="/formBuilder">
                    <button className="px-4 py-1 border border-gray-300 rounded-lg flex flex-row justify-center items-center focus:outline-none focus:border-[#6040DF]">
                     <IoIosArrowBack /> Back
                    </button>
                </Link>

                <Link to="/">
                    <button className="px-7 py-2 bg-[#7050EF] text-white rounded-lg">View Responses</button>
                </Link>
                
            </div>

        </div>
    </div>
  )
}

export default QRCodePage;