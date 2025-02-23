import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/componentesMain/Home";
import InicioHombres from "./components/componentesPaginaHombres/InicioHombres";



function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<h1>Carrito</h1>} />
            <Route path="/login" element={<h1 className="text-black">Login</h1>} />
            <Route path="/hombres" element={<InicioHombres />} />
            {/* <Route path="*" element={
                <div className="flex items-center justify-center h-screen">
                    <h1 className="text-black">Página no encontrada</h1>
                </div>
            } /> */}
        </Routes>
    );
}

export default Router;