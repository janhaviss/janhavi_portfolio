export default function Education() {
  return (
    <section className="bg-[#F9E8E8] text-[#1A1A1A] py-12 md:py-16 px-6 flex flex-col items-center">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8">
        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold text-[#B23A48] mb-6">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">
                Dr. D. Y. Patil Arts, Commerce & Science College | Pimpri, Pune
              </h3>
              <p className="text-[#555555]">
                Masters of Science in Computer Science | 2024-2026
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Smt. Chandibai Himathmal Mansukhani College | Ulhasnagar, Thane
              </h3>
              <p className="text-[#555555]">
                Bachelor of Science in Computer Science | 2021-2024
              </p>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div>
          <h2 className="text-3xl font-bold text-[#B23A48] mb-6">Languages</h2>
          <ul className="space-y-3">
            <li className="flex justify-between border-b border-[#B23A48]/30 pb-2">
              <span>Hindi</span>
              <span className="text-[#555555]">Native</span>
            </li>
            <li className="flex justify-between border-b border-[#B23A48]/30 pb-2">
              <span>English</span>
              <span className="text-[#555555]">Proficient</span>
            </li>
            <li className="flex justify-between border-b border-[#B23A48]/30 pb-2">
              <span>Marathi</span>
              <span className="text-[#555555]">Basic</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
