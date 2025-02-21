import { ShoppingCart, UserRound } from "lucide-react";
import React from "react";

export default function HeaderButtons() {
    return (
        <div className="flex space-x-4 gap-2 m-6 mr-8 ">
            <a href="/carrito"><ShoppingCart /></a>
            <a href="/login"><UserRound /></a>
        </div>
    );
}