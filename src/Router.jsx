import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/componentesMain/Home";
import InicioHombres from "./components/componentesPaginaHombres/InicioHombres";
import InicioMujeres from "./components/componentesPaginaMujeres/InicioMujeres";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hombres" element={<InicioHombres />} />
            <Route path="/mujeres" element={<InicioMujeres />} />
            {/* <Route path="/mujeres/vestidos" element={<VestidosMujeres />} /> */}
            {/* <Route path="/mujeres/pantalones" element={<PantalonesMujeres />} /> */}
            {/* <Route path="/mujeres/zapatos" element={<ZapatosMujeres />} /> */}
            {/* <Route path="/mujeres/Accesorios" element={<AccesoriosMujeres />} /> */}
        </Routes>
    );
}

export default Router;