import React from "react";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ProjectSection from "../components/ProjectSection";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection id="home" />
      <AboutSection id="about" />
      <ExperienceSection id="experience" />
      <SkillsSection id="skills" />
      <ProjectSection id="projects" />
      <ContactSection id="contact" />
      <Footer />
    </div>
  );
};

export default Home;
