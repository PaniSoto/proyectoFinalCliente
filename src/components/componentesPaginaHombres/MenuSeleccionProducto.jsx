export default function MenuSeleccionProducto({ cargarProductos }) {
    return (
        <div className="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center text-gray-800">
            <h3 rel="noopener noreferrer" onClick={() => {cargarProductos("http://localhost:3000/api/productos?search&categoria=Camisas") }} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600 gap-1 cursor-pointer">
                <span>Camisas</span>
            </h3>
            <h3 rel="noopener noreferrer" onClick={() => {cargarProductos("http://localhost:3000/api/productos?search&categoria=Pantalones") }} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900 gap-1 cursor-pointer">
                <span>Pantalones</span>
            </h3>
            <h3 rel="noopener noreferrer" onClick={() => {cargarProductos("http://localhost:3000/api/productos?search&categoria=Zapatos") }} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 gap-1 cursor-pointer">
                <span>Zapatos</span>
            </h3>
            <h3 rel="noopener noreferrer" onClick={() => {cargarProductos("http://localhost:3000/api/productos?search&categoria=Accesorios") }} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 gap-1 cursor-pointer">
                <span>Accesorios</span>
            </h3>
        </div>
    );
}