import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/componentesMain/Home";
import InicioHombres from "./components/componentesPaginaHombres/InicioHombres";
import InicioMujeres from "./components/componentesPaginaMujeres/InicioMujeres";
import DatosArticulo from "./components/componentesCompartidosHombreMujer/DatosArticulo";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hombres" element={<InicioHombres />} />
            <Route path="/producto/:_id" element={<DatosArticulo />} />
            <Route path="/mujeres" element={<InicioMujeres />} />
        </Routes>
    );
}

export default Router;