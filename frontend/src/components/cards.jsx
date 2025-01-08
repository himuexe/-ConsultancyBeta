import React, { useState } from "react";
import himanshu from "../assets/himanshu.jpg";
import akash from "../assets/akash.jpg";
import sriram from "../assets/sriram.jpg";
import sampreeth from "../assets/sampreeth.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const internsData = [
  {
    id: 1,
    name: "Himanshu Sharma",
    image: himanshu,
    email: "sharmaslov@gmail.com",
    phone: "+91 9828477222",
    resumeLink:
      "https://drive.google.com/file/d/1nT2wOGQjM3qi2eKDnFTBALZiLYE-0ymA/view?usp=sharing",
    role: "Software Engineering Intern",
    skills: [
      "MongoDb",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind",
      "Typescript",
    ],
  },
  {
    id: 2,
    name: "Akash",
    image: akash,
    email: "akashsaminathan24@gmail.com",
    phone: "+91 9840729884",
    resumeLink: "#",
    role: "Frontend Intern",
    skills: ["Next.js", "React", "Tailwind"],
  },
  {
    id: 3,
    name: "Sriram V",
    image: sriram,
    email: "sri20jan5@gmail.com",
    phone: "+91 7010557145",
    resumeLink: "https://drive.google.com/file/d/1A3a9Eh5TGGlbKtZH3AXuK5XgjRQMpvAH/view?usp=sharing",
    role: "Full Stack Intern",
    skills: ["React", "Python Flask", "PostgreSQL", "Express JS"],
  },
  {
    id: 4,
    name: "Sampreeth",
    image: sampreeth,
    email: "saisampreeth56@gmail.com",
    phone: "+91 8008328282",
    resumeLink: "https://drive.google.com/file/d/1LKGcxYj2dxLQEPqsD134PmhGJlpM0PmJ/view?usp=sharing",
    role: "Software Engineering Intern",
    skills: ["Python", "Machine Learning", "Express", "MySQL","Java"],
  },
];

const InternCard = ({ intern }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleLinkClick = (e, link) => {
    e.stopPropagation();
    if (link && link !== "#") {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="relative w-72 h-96 group overflow-hidden rounded-2xl shadow-xl border-2 border-white/30 
      transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${intern.image})`,
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          filter: isHovered ? "brightness(0.3)" : "brightness(1)",
          backgroundBlendMode: "multiply",
        }}
      />

      <div className="relative z-10 w-full h-full flex flex-col justify-end p-6 text-white">
        <div
          className="absolute bottom-0 left-0 right-0 p-6 
          bg-gradient-to-t from-black/70 to-transparent
          transition-all duration-500 ease-in-out"
        >
          <h3 className="text-2xl font-bold mb-1 text-white">{intern.name}</h3>
          <p className="text-sm opacity-80 text-gray-200">{intern.role}</p>
        </div>

        <div
          className={`
            absolute inset-0 bg-black/80 
            p-6 flex flex-col justify-center 
            transform transition-transform duration-500 ease-in-out
            ${
              isHovered
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }
          `}
        >
          <div className="space-y-4 text-center">
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href={`mailto:${intern.email}`}
                  onClick={(e) => handleLinkClick(e, `mailto:${intern.email}`)}
                  className="hover:underline text-gray-200 hover:text-white"
                >
                  {intern.email}
                </a>
              </div>

              <div className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.61 18 2 12.39 2 6V3z" />
                </svg>
                <a
                  href={`tel:${intern.phone}`}
                  onClick={(e) => handleLinkClick(e, `tel:${intern.phone}`)}
                  className="hover:underline text-gray-200 hover:text-white"
                >
                  {intern.phone}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {intern.skills.map((skill, index) => (
                <span
                  key={index}
                  className="
                    bg-white/20 text-white text-xs px-3 py-1 
                    rounded-full 
                    hover:bg-white/30 transition-all duration-300
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <a
                href={intern.resumeLink}
                onClick={(e) => handleLinkClick(e, intern.resumeLink)}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  inline-block px-8 py-3 
                  bg-white text-black 
                  font-semibold 
                  rounded-full shadow-lg
                  hover:bg-gray-100
                  transition-all duration-300 transform hover:scale-105
                  ${
                    !intern.resumeLink || intern.resumeLink === "#"
                      ? "opacity-50 pointer-events-none"
                      : ""
                  }
                `}
              >
                {intern.resumeLink && intern.resumeLink !== "#"
                  ? "View Resume"
                  : "Resume Unavailable"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InternsGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref} className="py-16 relative overflow-hidden bg-orange-50/30">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50 transform skew-x-[-15deg] origin-top-right z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-orange-50/30 transform skew-x-[15deg] origin-bottom-left z-0"></div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-center text-orange-900 mb-16 tracking-wider">
          Our Talented Interns
        </h2>
        <motion.div
          className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
          gap-8 justify-center items-center
        "
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {internsData.map((intern) => (
            <InternCard key={intern.id} intern={intern} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InternsGrid;
