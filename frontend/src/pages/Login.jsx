import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaApple } from 'react-icons/fa';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("تم تقديم الفورم");
  };

  return (
    <div className="min-h-screen flex">
      {/* القسم اليسار */}
      <div className="w-1/3 bg-[#7050EF] flex flex-col justify-center items-center text-left space-y-5 p-10 text-white">
        <img src="/logo.png" alt="user" className=" w-48 mb-4"/>
        <h1 className="text-3xl font-bold">Hello,</h1>
        <h2 className="text-3xl font-bold">Welcome back!</h2>
        <p className="text-lg">Please Login Your Account</p>
      </div>

      {/* القسم اليمين */}
      <div className="w-2/3 flex flex-col justify-center items-center p-12">
        <h3 className="text-3xl text-[#7050EF] mb-4 font-semibold">Welcome back!</h3>

        <form onSubmit={handleSubmit} className="w-80 mt-4 space-y-5">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7050EF]" />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 pl-10 rounded-2xl border border-[#7050EF] focus:outline-none focus:border-[#4000EF]"
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7050EF]" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full p-3 pl-10 pr-10 rounded-2xl border border-[#7050EF] focus:outline-none focus:border-[#4000EF]"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#7050EF]"
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </span>
          </div>

          <div className="flex justify-end mt-2">
            <Link to="/forgotPage" className="text-[#7050EF] text-sm font-semibold no-underline">
              Forget Password?
            </Link>
          </div>

          <button
            type="submit"
            className="bg-[#7050EF] text-white rounded-2xl w-80 p-3 mt-4 hover:bg-[#6040DF] focus:outline-none focus:ring-2 focus:ring-[#7050EF]"
          >
            Login
          </button>
        </form>

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
          <Link to="/signup" className="text-[#7050EF] font-semibold">Join us</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
