import { useEffect, useState } from "react";
import ArticuloHombres from "./ArticuloHombres";
import TituloPrincipalArticulo from "./TituloPrincipalArticulo";

function MuestraArticulos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // fetch("http://localhost:3000/api/productos?search&categoria=Camisas")
        fetch("http://localhost:3000/api/productos")
            .then((response) => response.json())
            .then((productosRecibidos) => setProductos(productosRecibidos));
    }, []);

    // console.log(productos);

    return (
        <div>
            {/* <!-- Title --> */}
            <TituloPrincipalArticulo />

            {/* <!-- Tab Menu --> */}
            <div className="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center text-gray-800">
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Camisas</span>
                </a>
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Pantalones</span>
                </a>
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span>Zapatos</span>
                </a>
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                    </svg>
                    <span>Accesorios</span>
                </a>
            </div>

            {/* <!-- Product List --> */}
            <section className="pb-20 pt-10 bg-gray-100">
                <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-5 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {productos.map((producto) => (
                        <ArticuloHombres key={producto._id} producto={producto} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default MuestraArticulos;