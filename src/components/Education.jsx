import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#F8EDED]/40">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Education
      </h2>

      <div className="max-w-4xl mx-auto space-y-8 px-6">

        {/* Master's Degree */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-3xl shadow-md border-l-8 border-purple-300"
        >
          <h3 className="text-2xl font-semibold text-purple-600">
            New Jersey Institute of Technology
          </h3>
          <p className="text-gray-700 text-lg mt-2">
            Master of Science in Computer Science
          </p>
          <p className="text-gray-500 mt-1">
            2023 – 2024
          </p>
        </motion.div>

        {/* Bachelor's Degree */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-3xl shadow-md border-l-8 border-purple-300"
        >
          <h3 className="text-2xl font-semibold text-purple-600">
            A.P.J Abdul Kalam Technological University
          </h3>
          <p className="text-gray-700 text-lg mt-2">
            Bachelor of Technology in Computer Science
          </p>
          <p className="text-gray-500 mt-1">
            2017 – 2021
          </p>
        </motion.div>

      </div>
    </section>
  );
}
