import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    name: "StudioConnect",
    description: "Plataforma colaborativa para artistas y estudios.",
    image: "/StudioConnect.png",
    youtube: "https://www.youtube.com/watch?v=tRjDscwI334",
  },
  {
    name: "Hysteria 3D | Shop",
    description: "E-commerce con autenticación y carrito funcional.",
    image: "/hysteria.png",
    youtube: "https://www.youtube.com/watch?v=6ZB_oYsGi3s",
  },
  {
    name: "Aurora Studio",
    description: "App web para gestión de turnos y registro de usuarios.",
    image: "/aurora.png",
    youtube: "https://www.youtube.com/watch?v=XJMVlnWBzQQ",
  },
];

function Proyects() {
  return (
    <div>
     <section id="projects" className="py-10 bg-black scroll-mt-24 px-4 sm:px-6">
  <motion.div
    className="max-w-6xl mx-auto flex flex-col justify-center items-center 
               min-h-[60vh] md:min-h-[70vh] text-center
               transform md:scale-[0.90] md:origin-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-sky-600">
      Proyectos
    </h2>

    {/* Grid responsive */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Image
            src={project.image}
            alt={project.name}
            width={600}
            height={300}
            className="w-full h-48 sm:h-56 md:h-64 object-cover"
          />
          <div className="p-4 sm:p-6 text-left flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-sky-400">
              {project.name}
            </h3>
            <p className="mb-4 text-gray-300 text-sm sm:text-base flex-grow">
              {project.description}
            </p>
            <a
              href={project.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:underline text-sm sm:text-base"
            >
              Ver demo en YouTube
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

    </div>
  )
}

export default Proyects;
