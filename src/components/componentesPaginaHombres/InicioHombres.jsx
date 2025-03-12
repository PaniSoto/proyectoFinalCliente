import React from "react";
import Footer from "../componentesCompartidosHombreMujer/Footer";
import MuestraArticulos from "./MuestraArticulos"

function InicioHombres() {
    return (
        <div>
            <MuestraArticulos endpoint={"https://backend-del-proyecto-final-de-cliente.vercel.app/api/productos?search&sexo=Hombre"}/>

            <footer className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 bg-gray-400 w-full ">
                <Footer />
            </footer>
        </div>
    );
}

export default InicioHombres;