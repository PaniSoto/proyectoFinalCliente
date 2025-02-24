import { useState } from "react";
import { ShoppingBag, UserRound } from "lucide-react";
import SidebarCarrito from "../componentesPaginaHombres/SidebarCarrito";


export default function HeaderButtons() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <div className="flex space-x-4 gap-2 m-6 mr-8">
            <div className="relative" onClick={() => setIsCartOpen(!isCartOpen)}>
            <ShoppingBag 
                className="hover:scale-110 text-black cursor-pointer" 
                onClick={() => setIsCartOpen(true)} 
            />
            </div>
            {/* Icono del carrito con evento onClick */}
            

            <a className="text-black" href="/login"><UserRound /></a>

            {/* SidebarCarrito solo se muestra si isCartOpen es true */}
            {isCartOpen && <SidebarCarrito onClose={() => setIsCartOpen(false)} />}
        </div>
    );
}
