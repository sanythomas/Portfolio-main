import { motion } from "framer-motion";
import { useRef } from "react";

export default function Certifications() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;

    scrollRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
      behavior: "smooth",
    });
  };

  const certifications = [
    "Docker Foundations Professional Certificate",
    "Big Data Management and Analytics",
    "React: Creating and Hosting a Full-Stack Site",
    "Web Developer",
    "Data Science in Python",
    "Machine Learning"
  ];

  return (
    <section id="certifications" className="py-20 bg-[#E8E7FF]/40">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Certifications
      </h2>

      {/* Carousel Container */}
      <div className="relative max-w-5xl mx-auto px-6">

        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 
            flex items-center justify-center hover:bg-purple-100 hover:scale-105 transition-all z-10 hidden md:flex"
        >
          ◀
        </button>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="overflow-x-auto flex gap-6 px-2 scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: "none" }}
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="
                min-w-[250px] md:min-w-[300px] 
                bg-white p-6 rounded-3xl shadow-md
                border-l-8 border-purple-300
                flex items-center justify-center text-center 
                text-lg font-medium text-gray-700
              "
            >
              {cert}
            </motion.div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 
            flex items-center justify-center hover:bg-purple-100 hover:scale-105 transition-all z-10 hidden md:flex"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
