import React from "react";
import Footer from "../Footer";
import MuestraArticulos from "./MuestraArticulos"
function InicioHombres() {
    return ( 
        <div>
            
            <MuestraArticulos />

            <footer className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 bg-gray-300 fixed bottom-0 w-full ">
                <Footer />
            </footer>
        </div>
     );
}

export default InicioHombres;