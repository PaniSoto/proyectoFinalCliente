import React from "react";
import HeaderButtons from "../componentesHeader/HeaderButtons";
import HamburgerDesplegable from "../componentesHeader/HamburgerDesplegable";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full flex items-center justify-between bg-gray-300/30 z-10" >
            <a href="/" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-black">
                CosoRaro
            </a>
            <HamburgerDesplegable />
            <HeaderButtons />
        </header>

    );
}