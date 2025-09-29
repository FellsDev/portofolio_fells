import React from "react";
import photo from "../assets/photo_1.jpg";
import { FaDownload } from "react-icons/fa";

const AboutSection = () => {
  // bikin variabel bio di sini
  const bioText = `As a frontend developer, I focus on creating modern, responsive, and user-friendly web applications. I specialize in React.js and Tailwind CSS to build clean and efficient interfaces, and I use Figma to transform design ideas into interactive digital experiences. With a strong understanding of UI/UX principles, I enjoy bridging the gap between design and development by turning concepts into functional, pixel-perfect components.

I am passionate about writing clean and maintainable code, building reusable components, and ensuring accessibility and performance across different devices. My goal is to continuously grow as a developer while crafting seamless digital experiences that are both visually appealing and highly functional.
`;

  return (
    <section id="about" className="max-w-7xl mx-auto text-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Bio Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About Me
          </h2>
          <blockquote className="border-l-4 text-1xl border-gray-600 pl-4 italic text-gray-300">
            {bioText}
          </blockquote>

          {/* Download CV */}
          <div className="mt-10">
            <a
              href="/cv_hanif.pdf" // taruh file cv_hanif.pdf di folder public/
              download
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-300"
            >
              <FaDownload className="text-lg" />
              Download CV
            </a>
          </div>
        </div>

        {/* Foto */}
        <div className="flex justify-center">
          <img
            src={photo}
            alt="Profile"
            className="w-80 rounded-2xl border border-gray-700 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
