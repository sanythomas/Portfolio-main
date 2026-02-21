import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#D7C9FF]/40">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-8 px-6">

        {/* Software Development Engineer - Amazon  */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-3xl shadow-md"
        >
          <h3 className="text-xl font-bold text-purple-600">
            Software Development Engineer - Amazon
          </h3>
          <p className="text-gray-500 mt-1">May 2025 – Present | Seattle, WA</p>

          <p className="text-gray-700 mt-3 leading-relaxed">
          Designed and built a Java-based automation framework to support onboarding of internal Amazon clients and
          execution of end-to-end test suites across multiple services, ensuring continuous improvement in delivery.
          </p>
        </motion.div>



        {/* Python Developer - NJIT */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-3xl shadow-md"
        >
          <h3 className="text-xl font-bold text-purple-600">
          Python Developer - NJIT
          </h3>
          <p className="text-gray-500 mt-1">May 2024 - Aug 2024 | Newark, NJ</p>
          Implemented an AI-powered error parsing and summarization system that automatically analyzes raw application
          logs, stack traces, and exception messages, converting them into human-readable error summaries.
          <p className="text-gray-700 mt-3 leading-relaxed">
          
          </p>
          
        </motion.div>

        {/* Software Engineer - Brototype */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-3xl shadow-md"
        >
          <h3 className="text-xl font-bold text-purple-600">
          Software Engineer - Brototype
          </h3>
          <p className="text-gray-500 mt-1">Jan 2023 – Aug 2023 | Kerala, India</p>

          <p className="text-gray-700 mt-3 leading-relaxed">
          Built a full-stack e-commerce platform using Python Django and ReactJS, optimizing transaction workflows and
          increasing system efficiency in financial transactions.
          </p>
        </motion.div>

        {/* System Software Engineer — Tata Consultancy Services */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-3xl shadow-md"
        >
          <h3 className="text-xl font-bold text-purple-600">
            System Software Engineer — Tata Consultancy Services
          </h3>
          <p className="text-gray-500 mt-1">Jul 2021 – Dec 2022 | Kerala, India</p>

          <p className="text-gray-700 mt-3 leading-relaxed">
            Developed and tested backend components for large-scale financial systems using Python, SQL, and Selenium.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
