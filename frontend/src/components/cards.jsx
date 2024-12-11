import React, { useState } from 'react';
import himanshu from "../assets/himanshu.jpg";
import akash from "../assets/akash.jpg";
import sriram from "../assets/sriram.jpg";
import sampreeth from "../assets/sampreeth.jpg";

const internsData = [
  {
    id: 1,
    name: 'Himanshu Sharma',
    image: himanshu,
    email: 'sharmaslov@gmail.com',
    phone: '+91 9828477222',
    resumeLink: '#',
    role: 'Software Engineering Intern',
    skills: ['React', 'Node.js', 'Docker']
  },
  {
    id: 2,
    name: 'Akash',
    image: akash,
    email: 'akashsaminathan24@gmail.com',
    phone: '+91 9840729884',
    resumeLink: '#',
    role: 'Frontend Intern',
    skills: ['Next.js', 'React', 'Tailwind']
  },
  {
    id: 3,
    name: 'Sri Ram',
    image: sriram,
    email: 'sriram@company.com',
    phone: '+91 8765432109',
    resumeLink: '#',
    role: 'Marketing Intern',
    skills: ['Social Media', 'Content', 'Analytics']
  },
  {
    id: 4,
    name: 'Sampreeth',
    image: sampreeth,
    email: 'sampreeth@company.com',
    phone: '+91 7654321098',
    resumeLink: '#',
    role: 'Backend Developer',
    skills: ['Python', 'Django', 'PostgreSQL']
  }
];

const InternCard = ({ intern }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-72 h-96 perspective-custom group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`
          relative w-full h-full transition-transform duration-700 
          transform-3d ${isFlipped ? 'rotate-y-180' : ''}
        `}
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden'
        }}
      >
        <div 
          className="
            absolute w-full h-full rounded-2xl shadow-2xl overflow-hidden
            bg-gradient-to-br from-orange-100 to-orange-200 
            transform-3d backface-hidden
          "
          style={{
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <img 
            src={intern.image} 
            alt={intern.name} 
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
            <h3 className="text-xl font-bold tracking-wider">{intern.name}</h3>
            <p className="text-sm text-orange-200">{intern.role}</p>
          </div>
        </div>

        <div 
          className={`
            absolute w-full h-full bg-gradient-to-br from-orange-200 to-orange-300 
            rounded-2xl shadow-2xl p-6 flex flex-col justify-center items-center 
            transform-3d rotate-y-180 backface-hidden
            ${isFlipped ? 'visible' : 'invisible'}
          `}
          style={{
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-orange-900">{intern.name}</h3>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center text-orange-800">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {intern.email}
              </div>
              
              <div className="flex items-center justify-center text-orange-800">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.61 18 2 12.39 2 6V3z" />
                </svg>
                {intern.phone}
              </div>

              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {intern.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="
                      bg-orange-500 text-white text-xs px-2 py-1 
                      rounded-full
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4 justify-center mt-4">
              <a 
                href={intern.resumeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="
                  bg-orange-600 text-white px-6 py-2 rounded-md 
                  hover:bg-orange-700 transition duration-300
                  shadow-md hover:shadow-lg
                "
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InternsGrid = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-900 mb-16 tracking-wider">
          Our Talented Interns
        </h2>
        <div className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
          gap-8 justify-center items-center
        ">
          {internsData.map(intern => (
            <InternCard key={intern.id} intern={intern} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternsGrid;