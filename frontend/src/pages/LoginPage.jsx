import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import Navbar from '../components/Nav';
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (<div className="">
  <Navbar />
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50 transform skew-x-[-15deg] origin-top-right z-0"></div>
    <div className="absolute bottom-0 left-0 w-1/4 h-full bg-orange-50/30 transform skew-x-[15deg] origin-bottom-left z-0"></div>
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8 transform transition-all duration-300 hover:scale-[1.02]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
            <p className="text-gray-500">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 outline-none"
                  placeholder="Enter your password"
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  Remember me
                </label>
              </div>
              <button type="button" className="text-sm font-medium text-orange-600 hover:text-orange-500 transition-colors duration-200">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 transition-all duration-200 font-medium"
            >
              Sign in
            </button>

            <div className="text-center">
              <span className="text-gray-500 text-sm">
                Don't have an account?{' '}
                <button type="button" className="text-orange-600 hover:text-orange-500 font-medium transition-colors duration-200">
                  Sign up
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;