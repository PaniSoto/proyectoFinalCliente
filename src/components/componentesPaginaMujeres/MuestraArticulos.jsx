import { useEffect, useState } from "react";
import ArticuloMujeres from "./ArticuloMujeres";
import MenuSeleccionProducto from "./MenuSeleccionProducto";

function MuestraArticulos() {
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Todos nuestros productos");

    useEffect(() => {
        fetch("http://localhost:3000/api/productos?search&sexo=Mujer")
            .then((response) => response.json())
            .then((productosRecibidos) => setProductos(productosRecibidos));
    }, []);

    const cargarProductos = (endpoint, nuevoTitulo) => {
        fetch(endpoint)
            .then((response) => response.json())
            .then((productosRecibidos) => setProductos(productosRecibidos));
        setTitulo(nuevoTitulo);
    };

    return (
        <div>
            {/* <!-- Title --> */}
            <div className="pt-28">
                <h1 className="text-center text-2xl font-bold text-gray-800 underline">{titulo}</h1>
            </div>

            {/* <!-- Tab Menu --> */}
            <MenuSeleccionProducto cargarProductos={cargarProductos} />

            {/* <!-- Product List --> */}
            <section className="pb-20 pt-10 bg-gray-100">
                <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-5 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {productos.map((producto) => (
                        <ArticuloMujeres key={producto._id} producto={producto} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default MuestraArticulos;