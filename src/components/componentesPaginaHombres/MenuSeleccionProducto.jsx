export default function MenuSeleccionProducto({ cargarProductos }) {
    return (
        <div className="flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-10 justify-center text-gray-800">
            <h3 onClick={() => cargarProductos("https://backend-del-proyecto-final-de-cliente.vercel.app/api/productos?search&categoria=Camisas", "Camisas")} 
                className="flex items-center flex-shrink-0 px-5 py-3 text-gray-600 gap-1 cursor-pointer">
                <span>Camisas</span>
            </h3>
            <h3 onClick={() => cargarProductos("https://backend-del-proyecto-final-de-cliente.vercel.app/api/productos?search&categoria=Pantalones", "Pantalones")} 
                className="flex items-center flex-shrink-0 px-5 py-3 text-gray-900 gap-1 cursor-pointer">
                <span>Pantalones</span>
            </h3>
            <h3 onClick={() => cargarProductos("https://backend-del-proyecto-final-de-cliente.vercel.app/api/productos?search&categoria=Zapatos", "Zapatos")} 
                className="flex items-center flex-shrink-0 px-5 py-3 text-gray-600 gap-1 cursor-pointer">
                <span>Zapatos</span>
            </h3>
            <h3 onClick={() => cargarProductos("https://backend-del-proyecto-final-de-cliente.vercel.app/api/productos?search&categoria=Accesorios", "Accesorios")} 
                className="flex items-center flex-shrink-0 px-5 py-3 text-gray-600 gap-1 cursor-pointer">
                <span>Accesorios</span>
            </h3>
        </div>
    );
}