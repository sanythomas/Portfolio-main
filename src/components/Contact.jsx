import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#F8EDED]/40">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Contact
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-lg"
      >
        <p className="text-center text-gray-700 text-lg mb-6">
          Feel free to reach out for opportunities, collaborations, or questions!
        </p>

        <div className="flex flex-col items-center gap-5">

          

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/sany-thomas/"
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-3 
              bg-purple-100 px-5 py-3 rounded-xl shadow-md
              hover:scale-105 hover:shadow-lg hover:bg-purple-200
              transition-all
            "
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="w-7 h-7"
            />
            <span className="text-lg font-medium text-gray-800">
              Connect on LinkedIn
            </span>
          </a>

        </div>
      </motion.div>
    </section>
  );
}
