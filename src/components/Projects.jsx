import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "2048 Game",
    description:
      "A responsive and interactive 2048 puzzle game built with React and Tailwind CSS, featuring custom themes, animations, and sound effects.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/janhaviss/2048_Game",
    live: "https://2048-game-nu-nine.vercel.app/",
  },
  {
    title: "AI Text-Based Game Platform",
    description:
      "A web app integrating NLP models through Flask and Hugging Face APIs to deliver dynamic, text-based storytelling games.",
    tech: ["React", "Flask", "Hugging Face API"],
    github: "https://github.com/janhaviss/TypePlay-Game",
    live: "#",
  },
  {
    title: "Text Summarization Tool",
    description:
      "An NLP-based web app that generates concise summaries from long text or documents using Hugging Face Transformers and Flask backend.",
    tech: ["Flask", "React", "Hugging Face", "Python"],
    github: "https://github.com/janhaviss/Summarization_Tool",
    live: "#",
  },
  {
    title: "Online Home Services Platform",
    description:
      "A full-stack platform connecting users with professionals for home repair and maintenance services, featuring booking, authentication, and responsive UI.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/janhaviss/HomeServices",
    live: "#",
  },
  {
    title: "Pathology Appointment System",
    description:
      "A dynamic web system for scheduling pathology tests, managing patient profiles, and retrieving reports with secure backend integration.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/janhaviss/pathoLab",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#F9E8E8] text-[#1A1A1A] py-16 px-6 flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full text-center"
      >
        <h2 className="text-3xl font-bold text-[#B23A48] mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white shadow-lg rounded-2xl p-6 text-left flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <div>
                <h3 className="text-xl font-semibold text-[#B23A48] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#555555] text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#F9E8E8] text-[#B23A48] text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-[#B23A48] hover:underline"
                >
                  <FaGithub /> GitHub
                </a>
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-[#B23A48] hover:underline"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
