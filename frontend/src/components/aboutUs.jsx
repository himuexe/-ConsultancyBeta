import React from "react";
import { CircleArrowRight } from 'lucide-react';

function aboutUs() {
  return (
    <section id="about" className="py-24 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex flex-col w-full max-w-4xl">
            <div className="flex items-center mb-8">
              <CircleArrowRight className="text-orange-500 mr-2 w-8 h-8" />
              <h2 className="text-4xl font-medium text-gray-800">About Us</h2>
            </div>
            <div className="ml-0 sm:ml-10 md:ml-16 text-black-700">
              <p className="mb-4">
              Smartline Systems Pvt. Ltd. is an innovative tech startup at the forefront of Cloud Computing and Artificial Intelligence (AI), dedicated to delivering cutting-edge solutions that empower businesses to achieve unparalleled success in today's competitive landscape. With a deep commitment to excellence, Smartline Systems stands as a beacon of professionalism and expertise across all functions.
              </p>
              <p className="mb-4">
              Founded by a team of passionate tech enthusiasts, the company initially focused on product development and quickly evolved into a dynamic force in the tech industry. Smartline Systems offers a unique platform for career growth, fostering a customer-centric and employee-focused environment that equips its team with the latest technological tools and resources. This nurturing atmosphere promotes a culture of passion, creativity, and dedication.
              </p>
              <p>
              In addition to its core offerings, Smartline Systems specializes in providing comprehensive training and consulting services, ensuring both employees and clients are equipped with the knowledge and skills to navigate the ever-evolving technological landscape. Our unwavering commitment to excellence drives us to continually push boundaries and deliver innovative solutions that meet the evolving needs of our customers.              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default aboutUs;