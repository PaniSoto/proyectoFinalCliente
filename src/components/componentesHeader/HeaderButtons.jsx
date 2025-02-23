import { ShoppingBag, UserRound } from "lucide-react";
import React from "react";

export default function HeaderButtons() {
    return (
        <div className="flex space-x-4 gap-2 m-6 mr-8 ">
            <a className="text-black" href="/carrito"><ShoppingBag /></a>
            <a className="text-black" href="/login"><UserRound /></a>
        </div>
    );
}