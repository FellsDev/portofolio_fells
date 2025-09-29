import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa";
import { MdSubject } from "react-icons/md";

const ContactSection = () => {
  return (
    <section className="#2c5364 text-white py-16" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gray-800 p-8 md:p-12 rounded-lg shadow-lg grid md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Connect With Me</h2>
            <p className="text-gray-400 mb-6">
              Have a project in mind or a question? Reach out and let's turn
              your ideas into reality.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                <p>
                  <span className="font-semibold">
                    hanifitsme15@gmail.com
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-500" />
                <p>
                  <span className="font-semibold">+62 81234 56789</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" />
                <p>
                  <span className="font-semibold">Depok, Indonesia</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side (Form) */}
          <form className="space-y-4">
            {/* Name */}
            <div className="flex items-center bg-[#1a1a1a] rounded-md px-4">
              <FaUser className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent py-2 outline-none text-white"
              />
            </div>

            {/* Email */}
            <div className="flex items-center bg-[#1a1a1a] rounded-md px-4">
              <FaEnvelope className="text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent py-2 outline-none text-white"
              />
            </div>

            {/* Subject */}
            <div className="flex items-center bg-[#1a1a1a] rounded-md px-4">
              <MdSubject className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent py-2 outline-none text-white"
              />
            </div>

            {/* Message */}
            <div className="bg-[#1a1a1a] rounded-md px-4">
              <textarea
                rows="4"
                placeholder="Please Drop Your Short Message..."
                className="w-full bg-transparent py-2 outline-none text-white"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gray-200 text-black font-medium py-2 rounded-md hover:bg-gray-300"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
