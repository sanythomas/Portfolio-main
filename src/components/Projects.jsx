import { motion } from "framer-motion";

const projects = [
  {
    title: "Placement Management System",
    tech: "Java • Spring Boot • React • MySQL • REST APIs",
    desc: "Developed a full-stack system for managing student profiles, company job postings, and placement workflows. Implemented secure authentication, role-based access, reusable React components, and optimized MySQL queries for fast data operations.",
  },
  {
    title: "DeepFake Detection Challenge",
    tech: "Python • ML • CNN • OpenCV",
    desc: "Built a machine learning pipeline to classify real vs. synthetic deepfake images. Designed preprocessing and augmentation workflows, trained CNN models, and achieved high accuracy by optimizing hyperparameters and validation strategies.",
  },
  {
    title: "Professional Interior Design Website",
    tech: "Node.js • Express.js • HTML/CSS • JavaScript",
    desc: "Developed a responsive, modern website for an interior design brand featuring services, portfolio, and a client inquiry system. Built dynamic routes, modular components, and optimized page load performance for smooth user experience.",
  },
  {
    title: "Database Normalization Automation Tool",
    tech: "Python • SQL • Data Validation",
    desc: "Created an automated tool to normalize relational datasets and detect schema issues. Implemented functional dependency detection and normal form suggestions, enabling fast, automated database cleanup and transformation.",
  },
  {
    title: "Self-Supervised Image Classification (SimCLRv2)",
    tech: "Python • PyTorch • Computer Vision",
    desc: "Implemented a self-supervised SimCLRv2-style training pipeline for image representation learning. Created evaluation and fine-tuning workflows demonstrating strong generalization across downstream tasks without labeled data.",
  },
  
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Projects
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 rounded-3xl shadow-xl"
          >
            <h3 className="text-xl font-semibold text-purple-600">
              {p.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">{p.tech}</p>

            <p className="text-gray-700 mt-3 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
