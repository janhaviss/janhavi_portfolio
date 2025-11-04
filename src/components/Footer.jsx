import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#B23A48] w-full text-[#1A1A1A] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-[#FFF9F9]">
            Janhavi Singh
          </h3>
          <p className="text-sm text-[#F9E8E8]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right Section (Socials) */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/janhaviss"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F9E8E8] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/janhavisingh2024"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F9E8E8] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:janhavi.singh@gmail.com?subject=Inquiry"
            className="hover:text-[#F9E8E8] transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-[#FFF9F9] mt-8 pt-4 text-center text-sm text-[#FFF9F9]">
        Built with using React & Tailwind CSS
      </div>
    </footer>
  );
}
