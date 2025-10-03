"use client";
import Tecnologis from "@/components/tecnologis/tecnologis";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import Proyects from "@/components/proyects/proyects";
import Contact from "@/components/contact/contact";
import FloatingChat from "@/components/floatingChat/FloatingChat";

export default function Home() {
  return (
    <main className="bg-black text-white font-sans scroll-smooth">
      {/* Navbar */}
        <Navbar/>

      {/* Hero */}
          <Hero/>

      {/* Tecnologías */}
         <Tecnologis/>

      {/* Proyectos */}
          <Proyects/>

      {/* Contacto */}
          <Contact/>
          
       {/* Chat */}
      <FloatingChat/>
    </main>
  );
};