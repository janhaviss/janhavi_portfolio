import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    year: "2025",
    link: "https://coursera.org/share/4a846237906a220bf030c9a14abcd04a",
  },
  {
    title: "Getting Started with Git and GitHub",
    issuer: "IBM",
    year: "2025",
    link: "https://coursera.org/share/ebfef8931aa7d595e28b52ec64e181f2",
  },
  {
    title: "Career Edge – Young Professional Skills Program",
    issuer: "TCS iON",
    year: "2024",
    link: "https://drive.google.com/file/d/1Gh8Vn4Mz5WFowo2GdVrdIYSuMmrJhDC9/view?usp=sharing",
  },
];

export default function Certifications() {
  return (
    <section className="bg-[#FFF9F9] text-[#1A1A1A] py-16 px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full text-center"
      >
        <h2 className="text-3xl font-bold text-[#B23A48] mb-10">
          Certifications
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="border border-[#F9E8E8] rounded-2xl shadow-sm p-6 text-left hover:shadow-lg transition-shadow bg-[#F9E8E8]"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaCertificate className="text-[#B23A48] text-xl" />
                <h3 className="text-lg font-semibold text-[#1A1A1A]">
                  {cert.title}
                </h3>
              </div>
              <p className="text-[#555555] text-sm mb-2">
                <span className="font-medium">{cert.issuer}</span> • {cert.year}
              </p>
              {cert.link && cert.link !== "#" && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#B23A48] hover:underline"
                >
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
