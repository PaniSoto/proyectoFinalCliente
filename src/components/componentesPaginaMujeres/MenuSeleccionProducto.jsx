export default function MenuSeleccionProducto({ cargarProductos }) {
    return (
        <div className="flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-10 justify-center text-gray-800">
            <h3 onClick={() => cargarProductos("https://backend-del-proyecto-final-de-cliente.vercel.app/api/productos?search&categoria=Vestidos", "Vestidos")}
                className="flex items-center flex-shrink-0 px-5 py-3 text-gray-600 gap-1 cursor-pointer">
                <span>Vestidos</span>
            </h3>
            <h3 onClick={() => cargarProductos("https://backend-del-proyecto-final-de-cliente.vercel.app/api/productos?search&categoria=Shorts", "Shorts")}
                className="flex items-center flex-shrink-0 px-5 py-3 text-gray-900 gap-1 cursor-pointer">
                <span>Shorts</span>
            </h3>
            <h3 onClick={() => cargarProductos("https://backend-del-proyecto-final-de-cliente.vercel.app/api/productos?search&categoria=Blazer", "Blazer")}
                className="flex items-center flex-shrink-0 px-5 py-3 text-gray-600 gap-1 cursor-pointer">
                <span>Blazer</span>
            </h3>
            <h3 onClick={() => cargarProductos("https://backend-del-proyecto-final-de-cliente.vercel.app/api/productos?search&categoria=Bolsos", "Bolsos")}
                className="flex items-center flex-shrink-0 px-5 py-3 text-gray-600 gap-1 cursor-pointer">
                <span>Bolsos</span>
            </h3>
        </div>
    );
}