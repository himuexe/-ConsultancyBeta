import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Nav';

const SignUpPage = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input}) => {
    setData({...data,[input.name]:input.value});
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const url = "http://localhost:8080/api/users";
      const {data: res} = await axios.post(url, data);
      navigate("/login")
      console.log(res.message);
    }catch(error){
      if(error.response && 
        error.response.status>=400 &&
        error.response.status <= 500
      ){
        setError(error.response.data.message)
      }
    }

  };

  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50 transform skew-x-[-15deg] origin-top-right z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-orange-50/30 transform skew-x-[15deg] origin-bottom-left z-0"></div>
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8 transform transition-all duration-300 hover:scale-[1.02]">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Create an account</h1>
              <p className="text-gray-500">Sign up to get started</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 block">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="name"
                    type="text"
                    name='fullName'
                    value={data.fullName}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="email"
                    type="email"
                    name = "email"
                    value={data.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700 block">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="password"
                    name = "password"
                    type={showPassword ? 'text' : 'password'}
                    value={data.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 outline-none"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  I agree to the <a href="#" className="text-orange-600 hover:text-orange-500">Terms and Conditions</a>
                </label>
              </div>

              {error && <div className="p-3 mb-4 text-sm text-red-500 bg-red-50 rounded-lg border border-red-200">
                {error}
              </div>}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 transition-all duration-200 font-medium"
              >
                Sign up
              </button>

              <div className="text-center">
                <span className="text-gray-500 text-sm">
                  Already have an account?{' '}
                  <Link 
                    to="/login" 
                    className="text-orange-600 hover:text-orange-500 font-medium transition-colors duration-200"
                  >
                    Login
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
