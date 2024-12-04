import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 py-16 flex flex-col items-center justify-center text-center text-white px-4 ">
      <div className="container mx-auto">
      <h1 className=" md:text-6xl font-bold mb-8 max-w-3xl mx-auto leading-tight">
          Smart Line Services
        </h1>

        <h1 className="text-4xl md:text-3xl font-bold mb-8 max-w-3xl mx-auto leading-tight">
          People, Cloud-Based Bookkeeping and Business Management Solutions
        </h1>

        <div className="flex justify-center space-x-6">
          <button 
            className="bg-white text-orange-600 hover:bg-orange-100 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Get Started
          </button>
          
          <button 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;