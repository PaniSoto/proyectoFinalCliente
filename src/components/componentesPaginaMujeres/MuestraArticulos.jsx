import { useEffect, useState } from "react";
import ArticuloMujeres from "./ArticuloMujeres";
import MenuSeleccionProducto from "./MenuSeleccionProducto";

function MuestraArticulos() {
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Todos nuestros productos");
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        cargarProductos("https://backend-del-proyecto-final-de-cliente.vercel.app/api/productos?search&sexo=Mujer", "Todos nuestros productos");
    }, []);

    useEffect(() => {
        if (busqueda.trim()) {
            cargarProductos(`https://backend-del-proyecto-final-de-cliente.vercel.app/api/productos?search=${busqueda}&sexo=Mujer`, `Resultados para "${busqueda}"`);
        } else {
            cargarProductos("https://backend-del-proyecto-final-de-cliente.vercel.app/api/productos?search&sexo=Mujer", "Todos nuestros productos");
        }
    }, [busqueda]);

    const cargarProductos = (endpoint, nuevoTitulo) => {
        fetch(endpoint)
            .then((response) => response.json())
            .then((productosRecibidos) => setProductos(productosRecibidos));
        setTitulo(nuevoTitulo);
    };

    return (
        <div>
            <div className="pt-28">
                <h1 className="text-center text-2xl font-bold text-gray-800 underline">{titulo}</h1>
            </div>

            <div className="text-center pt-4">
                <input
                    type="text"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    placeholder="Buscar productos..."
                    className="border-black border p-3 rounded-full w-1/2 text-center text-black mt-4"
                />
            </div>

            <MenuSeleccionProducto cargarProductos={cargarProductos} />

            <section className="pb-20 pt-10 bg-gray-100">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {productos.map((producto) => (
                        <ArticuloMujeres key={producto._id} producto={producto} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default MuestraArticulos;