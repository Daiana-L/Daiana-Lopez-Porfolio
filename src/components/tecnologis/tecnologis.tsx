import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";

const technologies = [
  { name: "React", img: "/React.png" },
  { name: "Next.js", img: "/Next.png" },
  { name: "TypeScript", img: "/TS.png" },
  { name: "Tailwind CSS", img: "/TW.png" },
  { name: "JavaScript", img: "/JS.png" },
  { name: "SQL", img: "/SQl.png" },
];

function Tecnologis() {

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const duration = isMobile ? 12 : 20;

  return (
    <div>
      <section id="tech" className="py-6 bg-gray-900 overflow-hidden px-4 sm:px-6">
        <motion.div
          className="max-w-6xl scale-[0.75] mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-sky-500">
            Tecnologías
          </h2>
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-3 sm:gap-6 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration,
                ease: "linear",
              }}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white text-black rounded-lg flex flex-col justify-between items-center shadow p-2"
                >
                  <div className="flex-1 flex items-center justify-center w-full">
                    <Image
                      src={tech.img}
                      alt={tech.name}
                      width={45}
                      height={45}
                      className="object-contain sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[65px]"
                    />
                  </div>
                  <span className="font-medium text-[10px] sm:text-sm md:text-base">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Tecnologis;
