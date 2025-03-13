import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// Hook para usar el contexto
export const useCart = () => {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error('useCart debe estar dentro de un CartProvider')
    }

    return context
}