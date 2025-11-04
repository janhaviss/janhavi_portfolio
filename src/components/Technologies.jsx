import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiFlask,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";

export default function Technologies() {
  return (
    <section className="bg-[#F9E8E8] text-[#1A1A1A] py-12 md:py-16 px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full text-center"
      >
        <h2 className="text-3xl font-bold text-[#B23A48] mb-10">
          Programming Languages & Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {/* HTML */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <FaHtml5 className="text-5xl text-[#E44D26]" />
            <p className="mt-2 text-[#555555] font-medium">HTML5</p>
          </motion.div>

          {/* CSS */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <FaCss3Alt className="text-5xl text-[#1572B6]" />
            <p className="mt-2 text-[#555555] font-medium">CSS3</p>
          </motion.div>

          {/* JavaScript */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <SiJavascript className="text-5xl text-[#F7DF1E]" />
            <p className="mt-2 text-[#555555] font-medium">JavaScript</p>
          </motion.div>

          {/* React */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <FaReact className="text-5xl text-[#61DBFB]" />
            <p className="mt-2 text-[#555555] font-medium">React</p>
          </motion.div>

          {/* Python */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <FaPython className="text-5xl text-[#3776AB]" />
            <p className="mt-2 text-[#555555] font-medium">Python</p>
          </motion.div>

          {/* Django */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <SiFlask className="text-5xl text-[#092E20]" />
            <p className="mt-2 text-[#555555] font-medium">Flask</p>
          </motion.div>

          {/* MySQL */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <SiMysql className="text-5xl text-[#00758F]" />
            <p className="mt-2 text-[#555555] font-medium">MySQL</p>
          </motion.div>

          {/* Tailwind */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <SiTailwindcss className="text-5xl text-[#38BDF8]" />
            <p className="mt-2 text-[#555555] font-medium">Tailwind CSS</p>
          </motion.div>

          {/* Git */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <FaGitAlt className="text-5xl text-[#F34F29]" />
            <p className="mt-2 text-[#555555] font-medium">Git</p>
          </motion.div>

          {/* Git */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <SiDocker className="text-5xl text-[#F34F29]" />
            <p className="mt-2 text-[#555555] font-medium">Docker</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
