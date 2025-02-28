import React, { use } from "react";
import HeaderButtons from "../componentesHeader/HeaderButtons";
import SidebarMenu from "./SidebarMenu";
import { Navigate, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <header className="fixed top-0 left-0 w-full flex items-center justify-between bg-gray-300/30 z-10" >
            <SidebarMenu />
            <h1 onClick={() => { navigate("/") }} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-black cursor-pointer">
                CosoRaro
            </h1>
            <HeaderButtons />
        </header>
    );
}