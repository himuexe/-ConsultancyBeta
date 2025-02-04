import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/nav';
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api/Api-Client";
import { useAppContext } from "../contexts/AppContext";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { showToast } = useAppContext();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({ message: "Registration Success!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

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

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your full name"
                    {...register("name", { required: "Name is required" })}
                  />
                </div>
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name.message}</span>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your email"
                    {...register("email", { required: "Email is required" })}
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email.message}</span>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Create a password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-red-500 text-sm">{errors.password.message}</span>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Confirm your password"
                    {...register("confirmPassword", {
                      validate: (val) => {
                        if (!val) {
                          return "Password confirmation is required";
                        } else if (watch("password") !== val) {
                          return "Passwords do not match";
                        }
                      },
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
                )}
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded cursor-pointer"
                  {...register("terms", { required: "You must accept the terms and conditions" })}
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  I agree to the <a href="#" className="text-orange-600 hover:text-orange-500">Terms and Conditions</a>
                </label>
              </div>
              {errors.terms && (
                <span className="text-red-500 text-sm block">{errors.terms.message}</span>
              )}

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
