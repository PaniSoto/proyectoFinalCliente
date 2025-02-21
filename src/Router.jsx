import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/componentesMain/Home";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<h1>Carrito</h1>} />
            <Route path="/login" element={<h1 className="text-black">Login</h1>} />
            <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Routes>
    );
}

export default Router;