import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-gray-900 md:p-6 shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Nombre */}
        <span className="font-bold md:text-md text-white">
          Daiana Celeste Lopez
        </span>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>
            <a href="#about" className="hover:text-sky-400 transition">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-sky-400 transition">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-sky-400 transition">
              Contacto
            </a>
          </li>
        </ul>

        {/* Botón hamburguesa */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="md:hidden bg-gray-900 text-white flex flex-col items-center space-y-4 py-4">
          <li>
            <a href="#about" onClick={toggleMenu} className="hover:text-sky-400 transition">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu} className="hover:text-sky-400 transition">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu} className="hover:text-sky-400 transition">
              Contacto
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
