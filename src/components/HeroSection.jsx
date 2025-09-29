import React from "react";
import profile from "../assets/photo.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";


const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "Hanif Fawwaz Muyassar", // Ketik nama
        2000, // Tunggu 2 detik
        "",   // Hapus semua teks
        1000, // Tunggu 1 detik
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity} // Loop tanpa henti
      style={{ fontSize: "1em", display: "inline-block" }}
    />
  );
};



const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-16 px-10 py-28" id="home">
      {/* Foto */}
      <div className="flex-shrink-0">
        <img
          src={profile}
          alt="profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover  shadow-lg"
        />
      </div>

      {/* Text */}
      <div className="text-center md:text-left max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Hi,{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mt-4 leading-snug">
          My Name is <br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent inline-block ">
            <ExampleComponent />
          </span>
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
          Front-End Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mt-6 leading-relaxed">
          Passionate about building{" "}
          <span className="font-semibold">modern, responsive web apps</span>.
          Always eager to learn new technologies and create impactful digital
          solutions.
        </p>

        {/* Tombol Sosmed */}
        <div className="flex items-center justify-center md:justify-start gap-6 mt-8">
          <a
            href="https://github.com/FellsDev"
            className="text-white text-4xl hover:text-blue-500 transition"
          >
            <FaGithub className="size-18" />
          </a>
          <a
            href="https://www.linkedin.com/in/hanifitsme15/"
            className="text-white text-4xl hover:text-blue-500 transition"
          >
            <FaLinkedin className="size-18" />
          </a>

          <a
            href="https://www.instagram.com/nifffs_12"
            className="text-white text-4xl hover:text-blue-500 transition"
          >
            <FaInstagramSquare className="size-18" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
