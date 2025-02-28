import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import SidebarCarrito from "../componentesPaginaHombres/SidebarCarrito";
import LoginButton from "../Auth/LoginButton";


export default function HeaderButtons() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="flex space-x-4 gap-2 m-6 mr-6">
      <div onClick={() => setIsCartOpen(true)}>
        <ShoppingBag className="hover:scale-110 text-black cursor-pointer" />
      </div>
      <LoginButton />

      {/* SidebarCarrito */}
      <SidebarCarrito open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}