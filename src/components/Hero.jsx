// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpeg"; // replace with your image path
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#F9E8E8] flex flex-col justify-center py-16 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left: Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left space-y-6 max-w-2xl"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-snug">
            Hello, I am <span className="text-[#B23A48]">Janhavi Singh</span>
          </h1>

          <p className="text-[#555] leading-relaxed text-base sm:text-lg">
            Hi, I’m Janhavi. I’m a computer science graduate who loves turning
            ideas into real projects through code. I’ve worked on things that
            combine AI, data, and web technologies, like NLP-based games and
            smart summarization tools. I’m always exploring how technology can
            make everyday experiences feel a little smarter and more human.
          </p>

          <p className="text-[#555] leading-relaxed text-base sm:text-lg">
            Feel free to check out my portfolio — I’d love to collaborate or
            discuss creative projects. Your visit means a lot!
          </p>

          <motion.button
            onClick={() => window.open(resume, "_blank")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-[#B23A48] hover:bg-[#992E3A] text-white font-medium py-2.5 px-7 rounded-full shadow-md transition"
          >
            View Resume
          </motion.button>
        </motion.div>

        {/* Right: Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 flex-shrink-0"
        >
          <div className="absolute inset-0 bg-[#B23A48]/20 rounded-full -z-10 scale-110" />
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-[#1A1A1A]/10 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
