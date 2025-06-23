import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPage = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("تم تقديم الفورم");
  };

  return (
    <div className="min-h-screen flex">
      {/* القسم اليسار */}
      <div className="w-1/2 bg-[#7050EF] flex flex-col justify-center items-center">
        <img src="/security.png" alt="user" className="h-96 object-cover"/>
      </div>

      {/* القسم اليمين */}
      <div className="w-1/2 flex flex-col justify-center items-center p-12">
        <h1 className="text-3xl text-[#7050EF] font-semibold">Forgot Password?</h1>
        <p className="text-sm text-gray-500 mt-2">Enter your email to reset your password.</p>

        <form onSubmit={handleSubmit} className="w-80 mt-6 space-y-5">
          <div>
            <label className="text-gray-800 text-md">Email</label>
            <input
              type="email"
              placeholder="eventify1@gmail.com"
              className="w-full mt-1 p-3 rounded-2xl border border-[#7000EF] focus:outline-none focus:border-[#6040DF]"
              required
            />
          </div>

          <div>
            <label className="text-gray-800 text-md">Verification code</label>
            <input
              type="text"
              placeholder="Enter the code"
              className="w-full mt-1 p-3 rounded-2xl border border-[#7000EF] focus:outline-none focus:border-[#6040DF]"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#7050EF] text-white rounded-2xl w-80 p-3 mt-4 hover:bg-[#6040DF] focus:outline-none focus:ring-2 focus:ring-[#7050EF]"
          >
            Send
          </button>
        </form>

        <Link to="/" className="mt-4 text-gray-500 hover:text-[#7050EF]">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPage;
