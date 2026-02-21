import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>

        <p className="text-gray-700 leading-relaxed">
        I’m Sany Thomas, a Software Engineer and Full-Stack Developer with strong experience in building scalable backend systems and reliable web applications. 
        My core strengths include Java, Spring Boot, React, Angular, and microservices architecture, along with hands-on experience across databases, APIs, and CI/CD pipelines.
        </p>

        <p className="mt-4 text-gray-700">
        I currently work as a Software Engineer at Amazon, where I design and maintain production-grade data pipelines, AI-driven automation tools, and machine learning workflows. 
        My work focuses on a centralized, one-stop backend platform that onboards multiple Amazon digital products like Prime Video, Kindle, Amazon Music etc.
        </p>

        <p className="mt-4 text-gray-700">
        Previously, I worked as a Full Stack Engineer, leading the development of high-availability web platforms used by engineering faculty, with a strong focus on performance optimization, maintainability, and secure backend integrations. 
        Before that, I was an System Software Engineer at TCS, where I developed enterprise-scale microservices using Java and Spring Boot, built REST APIs, optimized PostgreSQL databases, and contributed to CI/CD pipelines and automated testing.
        </p>


        <p className="mt-4 text-gray-700">
        I hold a Master’s degree in Computer Science and enjoy working on systems that sit at the intersection of backend engineering, data, and real-world impact.
        </p>
      </motion.div>
    </section>
  );
}



