import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* القسم اليسار */}
      <div className="w-1/2 bg-[#7050EF] flex flex-col justify-center items-start p-12 text-white">
        <div className="bg-gray-300 rounded-full w-16 h-16 mb-4"></div>
        <h1 className="text-3xl font-bold">Hello,</h1>
        <h2 className="text-3xl font-bold">Welcome back!</h2>
      </div>

      {/* القسم اليمين */}
      <div className="w-1/2 flex flex-col justify-center items-center p-12">
        <h2 className="text-3xl font-bold text-[#7050EF] mb-3">Welcome To Eventify</h2>

        <div className="w-80 mt-4 space-y-4">
          <div>
            <label className="text-gray-800 text-md">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full mt-1 p-3 rounded-2xl border border-[#7000EF] focus:outline-none"
            />
          </div>

          
          <div>
            <label className="text-gray-800 text-md">Email address</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full mt-1 p-3 rounded-2xl border border-[#7000EF] focus:outline-none"
            />
          </div>

          
          <div className="relative">
            <label className="text-gray-800 text-md">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full p-3 rounded-2xl border border-[#7000EF] focus:outline-none"
              />
              <span onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#7050EF]"
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </span>
            </div>
          </div>

          
          <div className="flex items-center space-x-2 mt-2">
            <input type="checkbox" id="terms" className="accent-[#7050EF]"/>
            <label htmlFor="terms" className="text-gray-600 text-sm">
              I agree to the Terms & Privacy
            </label>
          </div>

          
          <button className="bg-[#7050EF] text-white rounded-2xl w-full p-3 mt-3 hover:bg-[#6040DF] focus:outline-none focus:ring-2 focus:ring-[#7050EF]">
            Sign Up
          </button>

          <div className="text-gray-600 mt-3 flex justify-center">
            Already have an account?{" "}
            <Link to="/" className="text-[#7050EF] font-semibold ml-2 " >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;