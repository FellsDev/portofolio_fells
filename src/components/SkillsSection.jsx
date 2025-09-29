import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import {
  FaReact,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";
import { SiNextdotjs, SiNestjs, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-5xl text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-5xl text-white" /> },
  { name: "NestJS", icon: <SiNestjs className="text-5xl text-red-500" /> },
  { name: "Laravel", icon: <FaLaravel className="text-5xl text-red-400" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-5xl text-cyan-300" />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-5xl text-yellow-300" />,
  },
  { name: "HTML5", icon: <FaHtml5 className="text-5xl text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-5xl text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-400" /> },
];

const SkillsSection = () => {
  return (
    <section className="max-w-7xl mx-auto text-white py-20" id="skills">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My Skillsets
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 2.5 }, // mobile
            640: { slidesPerView: 3 }, // tablet
            1024: { slidesPerView: 6 }, // desktop
          }}
          className="px-6"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#1e1e2e] border-t-2 border-cyan-500 p-6 rounded-md flex flex-col items-center justify-center hover:bg-[#2a2a3a] transition shadow-md h-36 w-32 ">
                {skill.icon}
                <p className="text-sm font-medium mt-3">{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SkillsSection;
