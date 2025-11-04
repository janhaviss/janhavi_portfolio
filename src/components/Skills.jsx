export default function Skills() {
  return (
    <section className="bg-[#FFF9F9] text-[#1A1A1A] py-12 md:py-16 px-6 flex flex-col items-center">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12">
        {/* Core Skills */}
        <div>
          <h2 className="text-3xl font-bold text-[#B23A48] mb-6">
            Core Skills
          </h2>
          <ul className="list-disc list-inside text-[#555] space-y-2">
            <li>ReactJS, Flask, and Python for full-stack development</li>
            <li>
              Responsive UI design with Tailwind CSS and modern JavaScript
            </li>
            <li>SQL databases and RESTful API integration</li>
            <li>
              Machine learning, feature engineering, and data handling
              (scikit-learn, pandas)
            </li>
            <li>Version control and collaboration with Git and GitHub</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-3xl font-bold text-[#B23A48] mb-6">
            Soft Skills
          </h2>
          <ul className="space-y-2 text-[#555555]">
            <li>Curiosity and Continuous Learning</li>
            <li>Attention to Detail</li>
            <li>Time management</li>
            <li>Adaptability</li>
            <li>Problem Solving & Analytical Thinking</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
