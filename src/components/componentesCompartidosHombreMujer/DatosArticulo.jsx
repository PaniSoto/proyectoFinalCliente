import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { discountProduct } from '../Hook/discountProduct';
import { useCart } from '../Hook/useCart';
import { ShoppingBag, Trash2 } from 'lucide-react';

const DatosArticulo = () => {
  const { _id } = useParams();
  const [producto, setProducto] = useState(null);
  const { addProduct, removeProduct, cart } = useCart();

  useEffect(() => {
    fetch(`https://backend-del-proyecto-final-de-cliente.vercel.app/api/productos/${_id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Producto no encontrado");
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Producto recibido:", data);
        setProducto(data);
      });
  }, [_id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  const checkProductInCart = () => {
    return cart.some((item) => item._id === producto._id);
  };

  const isProductInCart = checkProductInCart();

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full p-4 md:p-8 bg-gray-100 items-center justify-center">
      {/* Imagen principal */}
      <div className="w-full md:w-5/12 p-4 flex justify-center items-center cursor-pointer md:pr-8">
        <img
          src={producto.imagen}
          alt="Artículo Principal"
          className="aspect-[9/16] object-cover md:max-w-sm mb-4 mt-4 md:mt-20"
        />
      </div>

      {/* Detalles del producto */}
      <div className="w-full md:w-7/12 flex flex-col md:items-start p-4 md:p-0">
        <h2 className="font-bold mb-2 text-black text-2xl sm:text-4xl md:text-3xl text-center md:text-left">
          {producto.nombre}
        </h2>

        <div className="flex items-center md:justify-start mb-4">
          <span className="text-lg font-semibold text-slate-700">{discountProduct(producto)}€</span>
          <s className="inline-block text-red-500 text-sm font-semibold px-3 py-2 rounded">{producto.descuento}%</s>
        </div>

        <select className="w-full p-4 bg-white border border-gray-300 text-black rounded-lg mb-4 shadow-lg">
          {producto.tallas.split(",").map((talla) => (
            <option key={talla} value={talla}>
              {talla}
            </option>
          ))}
        </select>

        {/* Botón añadir */}
        <div className="flex items-center justify-center w-full transition-transform transform hover:scale-105">
          {!isProductInCart ? (
            <div
              className="flex items-center justify-center bg-gray-300 rounded-lg px-6 py-2 text-black cursor-pointer w-full"
              onClick={() => addProduct(producto)}
            >
              <ShoppingBag className="mr-2" />
              Añadir al carrito
            </div>
          ) : (
            <div
              className="flex items-center justify-center bg-gray-300 rounded-lg px-6 py-2 text-black cursor-pointer w-full"
              onClick={() => removeProduct(producto._id)}
            >
              <Trash2 className="mr-2" />
              Quitar del carrito
            </div>
          )}
        </div>

        {/* Línea divisora */}
        <hr className="w-full border-t border-gray-300 my-4" />

        {/* Información extra */}
        <p className="text-gray-600 mb-2 text-center md:text-left">{producto.descripcion}</p>
      </div>
    </div>
  );
};

export default DatosArticulo;