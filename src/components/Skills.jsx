import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "languages",
    title: "Programming Languages",
    emoji: "💻",
    tooltip: "Languages used across development and automation",
    skills: [
      "Java", "Python", "C", "C++", "C#", "JavaScript", "TypeScript", "Go", "R"
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    emoji: "🧩",
    tooltip: "Frontend & backend frameworks",
    skills: [
      "Spring Boot", "Spring", "React.js", "Angular", "Node.js",
      "Vue.js", "Next.js", "Bootstrap", "jQuery"
    ],
  },
  {
    id: "databases",
    title: "Databases",
    emoji: "🗄️",
    tooltip: "Relational & NoSQL databases",
    skills: [
      "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Oracle", "NoSQL"
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    emoji: "☁️",
    tooltip: "Cloud platforms & DevOps tools",
    skills: [
      "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform",
      "Jenkins", "Git", "GitHub"
    ],
  },
  {
    id: "web",
    title: "Web Technologies",
    emoji: "🌐",
    tooltip: "Frontend & backend web technologies",
    skills: [
      "HTML5", "CSS3", "PHP", "XML", "REST APIs", "GraphQL",
      "AJAX", "JSON", "SOAP"
    ],
  },
  {
    id: "testing",
    title: "Testing Tools",
    emoji: "🧪",
    tooltip: "Testing, QA, and automation tools",
    skills: [
      "JUnit", "Selenium", "Mockito", "Jest"
    ],
  },
  {
    id: "principles",
    title: "Software Engineering Principles",
    emoji: "📘",
    tooltip: "Core engineering concepts",
    skills: [
      "OOP", "MVC", "Microservices", "Data Structures", "TDD", "Agile (Scrum)"
    ],
  },
  {
    id: "ai",
    title: "AI & Data Science",
    emoji: "🤖",
    tooltip: "AI & automation capabilities",
    skills: [
      "Machine Learning", "NLP", "Data Science", "Python Automation"
    ],
  },
];

export default function Skills() {
  const [openId, setOpenId] = useState("languages");

  const toggleCategory = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="skills" className="py-20 bg-[#C3E5DF]/40">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        {categories.map((cat) => {
          const isOpen = openId === cat.id;

          return (
            <motion.div
              key={cat.id}
              whileHover={{ scale: 1.02 }}
              className="group bg-white rounded-3xl shadow-md p-6 relative overflow-hidden"
            >
              {/* Soft pastel hover overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-60 bg-gradient-to-br from-[#F8EDED] via-[#D7C9FF] to-[#C3E5DF] transition-opacity duration=300" />

              <div className="relative z-10">
                
                {/* Header */}
                <button
                  onClick={() => toggleCategory(cat.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-[#F8EDED] shadow-sm">
                      <span className="text-xl">{cat.emoji}</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-purple-600">
                        {cat.title}
                      </h3>
                      <span className="text-xs text-gray-500 group-hover:text-gray-700">
                        {cat.tooltip}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-xl text-gray-500 transform transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {/* Collapsible content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-4"
                    >
                      {/* Pastel skill chips */}
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-[#F8EDED] text-gray-700 text-sm shadow-sm hover:bg-purple-100 hover:shadow-md transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
