import React from "react";
import HeaderButtons from "../componentesHeader/HeaderButtons";
import SidebarMenu from "./SidebarMenu";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <header className="fixed top-0 left-0 w-full flex items-center justify-between bg-gray-300/30 shadow-md z-10" >
            <SidebarMenu />
            <img onClick={() => { navigate("/") }} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black cursor-pointer w-45 h-45" 
                src="https://github.com/PaniSoto/proyectoFinalCliente/blob/main/src/assets/imagenes/Logo.png?raw=true"
            />
            <HeaderButtons />
        </header>
    );
}