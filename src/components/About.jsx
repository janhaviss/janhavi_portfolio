// src/components/About.jsx
import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaBehanceSquare } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#FFF9F9] text-[#1A1A1A] px-6 sm:px-10 md:px-16 lg:px-24 py-16"
    >
      <div className="max-w-5xl mx-auto text-center md:text-left">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#B23A48] mb-6">
          About Me
        </h2>

        {/* Description */}
        <p className="text-[#555] text-base sm:text-lg leading-relaxed max-w-3xl mb-10">
          I like projects that make me think in both directions — designing
          interfaces that feel simple and human, and writing code that keeps
          everything running smoothly underneath. Recently, I’ve been exploring
          how AI and data-driven systems can make digital experiences more
          intuitive. Outside of coding, I enjoy visual design, music, and
          learning new tools just for the fun of it. I’m always up for ideas
          that teach me something new or let me create something meaningful.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-8">
          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FiMail className="text-[#B23A48] text-xl" />
              <span className="text-[#1A1A1A] font-medium">
                janhavi1102singh@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-[#B23A48] text-xl" />
              <span className="text-[#1A1A1A] font-medium">+91 7261938530</span>
            </div>
            <div className="flex items-center gap-3">
              <FiMapPin className="text-[#B23A48] text-xl" />
              <span className="text-[#1A1A1A] font-medium">Pune, India</span>
            </div>
          </div>

          {/* Social Link */}
          <div className="flex sm:flex-col items-center sm:items-start gap-3">
            <FaBehanceSquare className="text-[#B23A48] text-3xl" />
            Check this game out -
            <a
              href="https://2048-game-nu-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] font-medium hover:text-[#B23A48] transition"
            >
              {" "}
              2048-game/.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
