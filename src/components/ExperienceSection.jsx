import React from "react";
import { HiOutlineBuildingOffice2, HiOutlineMapPin } from "react-icons/hi2";
import { IoIosSchool } from "react-icons/io";
import companyLogo from "../assets/dkriuk.png";
import educationLogo from "../assets/rb.png"; 

const ExperienceSection = () => {
  return (
    <section className="max-w-7xl mx-auto text-white py-20" id="experience">
      {/* About Me */}
      <div className="mb-12 mx-auto mt-30 px-6 ">
        {/* Work Experience */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Work Experience & Education 
          </h2>

          <div className="border-b border-gray-200 pb-6 mb-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">IT Support</h3>
              <span className="bg-blue-500 text-white text-2 px-3 py-1 rounded-full">
                Internship
              </span>
            </div>
            <div className="flex items-center text-sm text-white gap-4 mt-2.5">
              <span className="flex items-center gap-1 text-2xl">
                <HiOutlineBuildingOffice2 className="w-8 h-8" /> PT. Raja Rasa
                Kuliner
              </span>

              <span className="flex items-center gap-1 text-2xl">
                <HiOutlineMapPin className="w-8 h-8" /> Cilebut
              </span>
            </div>
            <div
              className="w-30 h-30 bg-cover bg-center mt-5 "
              style={{ backgroundImage: `url(${companyLogo})` }}
            ></div>

            <p className="text-2xl text-white  mt-2">
              Januari 2025 - April 2025
            </p>
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Education</h2>

          <div className="border-b border-gray-200 pb-6 mb-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">IT Support</h3>
              <span className="bg-blue-500 text-white text-2 px-3 py-1 rounded-full">
                Full Time
              </span>
            </div>
            <div className="flex items-center text-sm text-white gap-4 mt-2.5">
              <span className="flex items-center gap-1 text-2xl">
                <HiOutlineBuildingOffice2 className="w-8 h-8" />
                Rabbaanii Islamic School
              </span>

              <span className="flex items-center gap-1 text-2xl">
                <HiOutlineMapPin className="w-8 h-8" /> Cikarang
              </span>
            </div>
            <div
              className="w-30 h-30 bg-cover bg-center mt-5 "
              style={{ backgroundImage: `url(${educationLogo})` }}
            ></div>

            <p className="text-2xl text-white  mt-2">Juni 2023 - Now</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
