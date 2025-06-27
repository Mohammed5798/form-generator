import '../style/App.css';
import React, { use, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name , setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("تم تقديم الفورم");
    console.log("Name:", name);
    console.log("Email:", email);
    
    try{
   await axios.post("http://localhost:5000/api/users/signup", {
  name,
  email,
  password
});

    setName("");
    setEmail("");
    setPassword("");
    alert("تم تسجيل الحساب بنجاح");
   navigate("/main")
    }catch(error){
     setError(error.response?.data?.message || "حدث خطأ أثناء تسجيل الحساب. حاول مرة أخرى لاحقًا.");
    }



  };
  
  return (
    <div className="min-h-screen flex">
      {/* القسم اليسار */}
      <div className="left-section w-1/2 bg-[#7050EF] flex flex-col justify-center text-center space-y-5 items-center p-12 text-white">
      <div className='flex flex-row items-center justify-center space-x-4'>
        <img src="/logo2.png" alt="user" className=""/>
        <h1 className="text-3xl text-center" style={{ fontFamily: "'Pacifico', cursive" }}>Formigo</h1>
      </div>
        <h2 className="text-4xl font-bold">Welcome!</h2>
        <p className="text-xl">Join us to start creating your own forms.</p>
      </div>

      {/* القسم اليمين */}
      <div className="right-section w-2/3 flex flex-col justify-center items-center p-12">
        <img src="/logo3.png" alt="user" className="mobile-logo hidden w-48 mb-4"/>
        <h3 className="text-2xl font-bold text-[#7050EF] mb-3">Sign up for your account</h3>

        <form onSubmit={handleSubmit} className="w-80 mt-4 space-y-4">
          <div>
            <label className="text-gray-800 text-md">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full mt-1 p-3 rounded-2xl border border-[#7000EF] focus:outline-none"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-gray-800 text-md">Email address</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full mt-1 p-3 rounded-2xl border border-[#7000EF] focus:outline-none"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <label className="text-gray-800 text-md">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full p-3 rounded-2xl border border-[#7000EF] focus:outline-none"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#7050EF]"
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              id="terms"
              className="accent-[#7050EF]"
              required
            />
            <label htmlFor="terms" className="text-gray-600 text-sm">
              I agree to the Terms & Privacy
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#7050EF] text-white rounded-2xl w-full p-3 mt-3 hover:bg-[#6040DF] focus:outline-none focus:ring-2 focus:ring-[#7050EF]"
          >
            Sign Up
          </button>
        </form>

        <div className="text-gray-600 mt-3 flex justify-center">
          Already have an account?{" "}
          <Link to="/login" className="text-[#7050EF] font-semibold ml-2">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

