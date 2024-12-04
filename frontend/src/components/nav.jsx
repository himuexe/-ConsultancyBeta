import React from 'react';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-4  text-white mx-auto px-96 shadow-lg">
      {/* Left Side */}
      <div className="flex items-center">
        {/* <div className="mr-4">
          
          <img src="/path/to/logo.png" alt="Logo" className="h-8" />
        </div> */}
        <div className="text-3xl  text-orange-500">
          {/* Company Name */}
          Smart Line Services
        </div>
      </div>

      {/* Right Side */}
      <div className="flex space-x-4">
        <div>
          {/* Contact Us Button */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
        <div>
          {/* Services Button */}
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Services
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;