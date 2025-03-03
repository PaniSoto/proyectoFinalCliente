export default function MenuSeleccionProducto({ cargarProductos }) {
    return (
        <div className="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center text-gray-800">
            <h3 rel="noopener noreferrer" onClick={() => {cargarProductos("http://localhost:3000/api/productos?search&categoria=Vestidos") }} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600 gap-1 cursor-pointer">
                <span>Vestidos</span>
            </h3>
            <h3 rel="noopener noreferrer" onClick={() => {cargarProductos("http://localhost:3000/api/productos?search&categoria=Shorts") }} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900 gap-1 cursor-pointer">
                <span>Shorts</span>
            </h3>
            <h3 rel="noopener noreferrer" onClick={() => {cargarProductos("http://localhost:3000/api/productos?search&categoria=Blazer") }} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 gap-1 cursor-pointer">
                <span>Blazer</span>
            </h3>
            <h3 rel="noopener noreferrer" onClick={() => {cargarProductos("http://localhost:3000/api/productos?search&categoria=Bolsos") }} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 gap-1 cursor-pointer">
                <span>Bolsos</span>
            </h3>
        </div>
    );
}