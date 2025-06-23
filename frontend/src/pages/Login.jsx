import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaApple } from 'react-icons/fa';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";



const Login = () => {
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
        <h2 className="text-3xl text-[#7050EF] mb-4 font-semibold">
          Welcome back!
        </h2>

        <div className="w-80 mt-4 space-y-5">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7050EF]" />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 pl-10 rounded-2xl border border-[#7050EF] focus:outline-none focus:border-[#4000EF]"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7050EF]" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full p-3 pl-10 pr-10 rounded-2xl border border-[#7050EF] focus:outline-none focus:border-[#4000EF]"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#7050EF]"
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </span>
          </div>
        </div>

        <div className="w-80 flex justify-end mt-2">
          <Link  to="#" className="text-[#7050EF] text-sm font-semibold no-underline">Forget Password?</Link >
        </div>

        <button className="bg-[#7050EF] text-white rounded-2xl w-80 p-3 mt-8 hover:bg-[#6040DF] focus:outline-none focus:ring-2 focus:ring-[#7050EF]">
          Login
        </button>

        <div className="mt-4 text-gray-500">Or login with</div>

        <div className="flex space-x-4 mt-3">
          <button className="flex items-center justify-center rounded-full border border-gray-300 p-3 w-14 h-14 hover:border-[#7050EF]">
            <FcGoogle size={24} />
          </button>
          <button className="flex items-center justify-center rounded-full border border-gray-300 p-3 w-14 h-14 hover:border-[#7050EF]">
            <FaApple size={24} />
          </button>
        </div>

        <div className="flex flex-row items-center mt-3 space-x-2">
          <p className="text-gray-600">Don't Have an Account?</p>
          <Link  to="/signup" className="text-[#7050EF] font-semibold">
            Join us
          </Link >
        </div>
      </div>
    </div>
  );
};

export default Login;