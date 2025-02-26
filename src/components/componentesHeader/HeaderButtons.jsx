import { useState } from "react";
import { ShoppingBag, UserRound, X } from "lucide-react";
import SidebarCarrito from "../componentesPaginaHombres/SidebarCarrito";
import Login from "../Login";

export default function HeaderButtons() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <div className="flex space-x-4 gap-2 m-6 mr-6">
            <div onClick={() => setIsCartOpen(true)}>
                <ShoppingBag className="hover:scale-110 text-black cursor-pointer" />
            </div>

            <div onClick={() => setIsLoginOpen(true)} className="text-black">
                <UserRound className="hover:scale-110 text-black cursor-pointer"/>
            </div>

            {/* SidebarCarrito */}
            <SidebarCarrito open={isCartOpen} onClose={() => setIsCartOpen(false)} />

            {/* Modal de Login */}
            {isLoginOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
                    <div className="relative">
                            <X className="absolute top-7 right-7 text-black text-xl" onClick={() => setIsLoginOpen(false)}/>
                        <Login />
                    </div>
                </div>
            )}
        </div>
    );
}
