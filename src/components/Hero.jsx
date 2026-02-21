export default function Hero() {
    return (
      <section id="hero" className="text-center py-32 px-6 relative">
  
        
        <div
          className="
            absolute 
            top-10 left-1/2 -translate-x-1/2 
            w-72 h-72 md:w-96 md:h-96 
            rounded-full 
            blur-3xl 
            bg-gradient-to-br from-[#F8EDED] via-[#D7C9FF] to-[#C3E5DF]
            -z-10
            opacity-60
          "
        />
  
        {/*PROFILE IMAGE*/}
        <div className="flex justify-center">
          <div
            className="
              w-48 h-48 md:w-64 md:h-64
              rounded-full overflow-hidden 
              shadow-[0_10px_25px_rgba(0,0,0,0.15)]
              bg-gradient-to-br from-[#F8EDED] via-[#D7C9FF] to-[#C3E5DF]
              p-[6px] 
              hover:scale-105 
              hover:shadow-[0_0_25px_8px_rgba(215,201,255,0.7)]
              transition-all duration-300
            "
          >
            <img
              src={process.env.PUBLIC_URL + "/sany.jpg"}
              alt="Sany Mary Thomas"
              className="
                w-full h-full object-cover rounded-full
              "
            />
          </div>
        </div>
  
        {/* NAME  */}
        <h1
          className="text-5xl font-bold text-gray-800 mt-8"
        >
          Hi, I'm <span className="text-purple-500">Sany Mary Thomas</span>
        </h1>
  
        <p className="mt-4 text-xl text-gray-700">
          Software Engineer
        </p>
  
        {/* LINKEDIN */}

  
        {/* CONTACT BUTTON */}
        <a
          href="#contact"
          className="mt-8 inline-block bg-purple-400 text-white px-10 py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
        >
          Contact Me
        </a>
  
      </section>
    );
  }
  