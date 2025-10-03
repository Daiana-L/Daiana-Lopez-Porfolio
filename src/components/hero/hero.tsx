import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import { PiMapPinLine } from 'react-icons/pi';

function Hero() {
  return (
    <div>
{/* Hero */}
<section
  id="about"
  className="w-full flex items-center justify-center px-4 sm:px-6
             pt-24 sm:pt-28 md:pt-20
             min-h-[60vh] md:min-h-[70vh]"
>
  <motion.div
    className="flex flex-col md:flex-row items-center gap-8 md:gap-10
               transform md:scale-[0.75] md:origin-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Foto */}
    <div className="md:w-1/3 flex justify-center">
      <Image
        src="/foto-profesional2.jpg"
        alt="Daiana Celeste Lopez"
        width={450}
        height={550}
        className="rounded-xl shadow-lg object-cover w-[200px] sm:w-[250px] md:w-[450px] h-auto"
      />
    </div>

    {/* Info */}
    <div className="text-center md:text-left max-w-md sm:max-w-xl md:max-w-2xl mx-auto flex flex-col items-center md:items-start">
      <span className="text-base sm:text-lg mb-2 block">
        Bienvenidos a mi porfolio profesional!
      </span>
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-1 mb-3">
        Soy Daiana Celeste Lopez
      </h1>
      <p className="text-sm sm:text-base md:text-xl mb-3 text-gray-300 leading-relaxed">
        Desarrolladora Frontend Junior enfocada en React, Next.js, TypeScript y TailwindCSS, 
        con experiencia en bases de datos (MySQL, MongoDB), integración de APIs REST y 
        optimización de interfaces responsivas.
      </p>
      <p className="mb-3 gap-1 font-medium flex items-center justify-center md:justify-start text-gray-400">
        <PiMapPinLine size={24} /> Buenos Aires, Argentina
      </p>
      <p className="mb-4 text-gray-300 text-sm sm:text-base text-center md:text-left">
        Tecnologías: React, Next.js, TypeScript, JavaScript, Zustand, Tailwind CSS, SQL
      </p>
      <a
        href="/Daiana-Lopez-Desarrolladora-Frontend.pdf"
        download
        className="inline-block bg-sky-600 text-white px-5 sm:px-6 py-3 rounded-lg hover:bg-sky-700 transition mb-10"
      >
        Descargar CV
      </a>
    </div>
  </motion.div>
</section>
</div>
  )
};

export default Hero;
