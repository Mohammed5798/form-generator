import React from "react";

const FormPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md p-6">
        <div className="flex flex-col items-center justify-center space-y-4 mb-4">
          <h1 className="text-3xl sm:text-3xl text-[#7050EF]" style={{ fontFamily: "'Pacifico', cursive" }}>
            Formigo
          </h1>
          <img src="/Frame.png"  alt="Calendar" className=" lg:h-full"/>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Form Title</h2>
        <p className="text-md text-gray-700 mb-4">Please fill out the form below:</p>

        <form className="space-y-4">
          <div>
            <label className="text-md font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[#7050EF]"
            />
          </div>

          <div>
            <label className="text-md font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[#7050EF]"
            />
          </div>

          <div className="flex flex-col items-start justify-center">
            <label className="text-md font-medium mb-1">File Upload</label>
            <div className="flex items-center space-x-2 w-full">
                <input
                type="file"
                className="text-sm file:mr-4 file:py-2 file:px-5 file:rounded-lg file:border file:text-md file:font-semibold file:bg-white file:text-gray-800 file:border-gray-300 hover:file:bg-gray-400"
                />
            </div>
           </div>


          <button
            type="submit"
            className="w-full bg-[#7050EF] text-white py-2 rounded-lg hover:bg-[#5d40d6] transition"
          >
            Submit
          </button>
        </form>

        <p className="text-ms text-center text-gray-500 mt-4">
          Your information is safe with us.
        </p>
      </div>
    </div>
  );
};

export default FormPage;
