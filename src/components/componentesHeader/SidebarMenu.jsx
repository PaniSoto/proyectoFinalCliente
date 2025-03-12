import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function SidebarMenu() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative" onClick={() => setIsHovered(!isHovered)}>
      {/* Ícono del menú que activa el sidebar al pasar el cursor */}
      <div
        className="flex justify-start ml-3 m-6 cursor-pointer md:ml-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Menu className="hover:scale-110 transition duration-200 text-black" onClick={() => setIsHovered(!isHovered)} />
      </div>

      {/* Sidebar Desplegable */}
      <motion.div
        initial={{ x: -420, opacity: 0 }}
        animate={{ x: isHovered ? 0 : -420, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed left-0 top-0 h-full w-94 bg-gray-100 text-white shadow-lg z-20 p-4 sm:w-96"
      >
        <X className="block md:hidden cursor-pointer text-black" onClick={() => setIsHovered(false)} />
        <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b-2">Menú</h2>
        <ul className="space-y-2 text-gray-700 flex flex-col">
          <Link to="/" className="p-2 rounded-lg hover:bg-gray-500 bg-gray-300 text-black cursor-pointer">Inicio</Link>
        </ul>

        {/* Categorías */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-2">Hombres</h3>
          <ul className="grid grid-cols-2 gap-2 bg-gray-100 text-gray-700">
            <Link to="/hombres" className="p-2 rounded-lg hover:bg-gray-500 cursor-pointer bg-gray-300 text-black">Camisas</Link>
            <Link to="/hombres" className="p-2 rounded-lg hover:bg-gray-500 cursor-pointer bg-gray-300 text-black">Pantalones</Link>
            <Link to="/hombres" className="p-2 rounded-lg hover:bg-gray-500 cursor-pointer bg-gray-300 text-black">Zapatos</Link>
            <Link to="/hombres" className="p-2 rounded-lg hover:bg-gray-500 cursor-pointer bg-gray-300 text-black">Accesorios</Link>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-2">Mujeres</h3>
          <ul className="grid grid-cols-2 gap-2">
            <Link to="/mujeres" className="p-2 rounded-lg hover:bg-gray-500 cursor-pointer bg-gray-300 text-black">Vestidos</Link>
            <Link to="/mujeres" className="p-2 rounded-lg hover:bg-gray-500 cursor-pointer bg-gray-300 text-black">Shorts</Link>
            <Link to="/mujeres" className="p-2 rounded-lg hover:bg-gray-500 cursor-pointer bg-gray-300 text-black">Blazer</Link>
            <Link to="/mujeres" className="p-2 rounded-lg hover:bg-gray-500 cursor-pointer bg-gray-300 text-black">Accesorios</Link>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default SidebarMenu;