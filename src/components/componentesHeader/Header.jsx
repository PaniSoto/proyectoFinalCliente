import React from "react";
import HeaderButtons from "../componentesHeader/HeaderButtons";
import HamburgerDesplegable from "../componentesHeader/HamburgerDesplegable";


export default function Header() {
    return (
        <header className="w-full flex items-center justify-between">
            <a href="/" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl">VayaTela</a>
            <HamburgerDesplegable />
            <HeaderButtons />
        </header>
    );
}