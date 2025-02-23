import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

function HamburgerDesplegable() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative" onClick={() => setIsHovered(!isHovered)}>
      {/* Ícono del menú que activa el sidebar al pasar el cursor */}
      <div
        className="flex justify-start ml-8 m-6 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Menu className="hover:scale-110 transition duration-200 text-black" onClick={() => setIsHovered(!isHovered)}/>
      </div>

      {/* Sidebar Desplegable */}
      <motion.div
        initial={{ x: -420, opacity: 0 }}
        animate={{ x: isHovered ? 0 : -420, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed left-0 top-0 h-full w-94 bg-gray-100 text-white shadow-lg p-4 sm:w-96"
      >
        <X className="block md:hidden cursor-pointer text-black" onClick={() => setIsHovered(false)} />
        
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Menú</h2>
      <ul className="space-y-2 text-gray-700 flex flex-col">
        <a href="/" className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">Inicio</a>
        <a href="/servicios" className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">Servicios</a>
        <a href="/acerca" className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">Acerca</a>
        <a href="/contacto" className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">Contacto</a>
      </ul>
      
      {/* Categorías */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-2">Hombres</h3>
        <ul className="space-y-2 text-gray-700">
          <a href="/hombres/camisas" className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">Camisas</a>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-2">Mujeres</h3>
        <ul className="space-y-2 text-gray-700">
          <a href="/mujeres/vestidos" className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">Vestidos</a>
        </ul>
      </div>
    
      </motion.div>
    </div>
  );
}

export default HamburgerDesplegable;