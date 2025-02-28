import React from "react";
// import { useCart } from "./Hook/useCart";

export default function Footer() {
    // const {cart} = useCart();
    return (
        <footer className="mx-auto">
            {/* {
                JSON.stringify(cart, null, 2)
            } */}
            <p className="text-sm text-gray-600 text-center mx-auto">© 2025 VayaTela. Todos los derechos reservados.</p>
            <p className="text-sm text-gray-600 text-center">Contáctanos</p>
        </footer>
    );
}