import React from "react";
import Footer from "../Footer";
import MuestraArticulos from "./MuestraArticulos"

function InicioHombres() {
    return (
        <div>
            <MuestraArticulos endpoint={"http://localhost:3000/api/productos?search&sexo=Hombre"}/>

            <footer className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 bg-gray-300 w-full ">
                <Footer />
            </footer>
        </div>
    );
}

export default InicioHombres;