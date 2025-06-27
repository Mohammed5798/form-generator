import React from 'react'

const QRErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#f5f0fc] flex items-center justify-center p-4">
      <div className="w-full mx-4 lg:mx-0 max-w-md bg-white p-6 rounded-xl shadow-md text-center">

        <div className="flex justify-center py-1 mb-4">
          <h1 className="text-3xl sm:text-3xl text-[#7050EF]" style={{ fontFamily: "'Pacifico', cursive" }}>
            Formigo
          </h1>
        </div>

        <h2 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-2 py-2">This form is currently unavailable.</h2>
        <p className="text-ms lg:text-md text-gray-600 mb-4">
          The link may be invalid or the form has expired.
        </p>

        <img src="/errorimage.png" alt="Calendar" className="mx-auto " />

        <div className='flex flex-row items-center justify-center space-x-4 py-4'>
        <button 
          className="block w-1/3 bg-[#7050EF] text-white py-2 rounded-lg hover:bg-[#5d40d6] transition text-center"
        >
          Go Back
        </button>
        <button className="block w-1/3 text-[#7050EF] border border-[#7050EF] py-2 rounded-lg hover:bg-[#5d40d6] hover:text-white transition text-center">
            Reload
        </button>
        </div>
      </div>
    </div>
  )
}

export default QRErrorPage;