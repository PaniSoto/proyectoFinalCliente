import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DatosArticulo = () => {

  const { _id } = useParams();

  const [producto, setProducto] = useState(null);

  useEffect(() => {

    

    // Llamada a la API
    fetch(`http://localhost:3000/api/productos/${_id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Producto no encontrado");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Producto recibido:", data);
        setProducto(data);  // Guardamos el producto en el estado
      })
  }, [_id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex min-h-screen w-full p-8 bg-gray-100">
      <div className="w-1/2 p-4 flex justify-center items-center">
        <img
          src={producto.imagen} 
          alt="Artículo Principal"
          className="w-full max-w-md mb-4"
        />
        {/* {console.log("Imagen del producto:", producto[0].imagen)} */}
      </div>
      <div className="w-1/2 p-8 bg-white flex flex-col justify-center">
        <h1 className="text-2xl font-bold mb-2">{producto.nombre}</h1>
        <p className="text-lg text-gray-700 mb-4">{producto.precio} €</p>
        <img
          src="icono_tacón.jpg"
          alt="Icono Tacón"
          className="mb-4"
        />
        <div className="mb-4">
          <label className="block text-gray-700">Talla:</label>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>36</option>
            <option>37</option>
            <option>38</option>
            <option>39</option>
            <option>40</option>
            <option>41</option>
          </select>
        </div>
        <button className="w-full p-3 bg-green-500 text-white rounded mb-4">
          Añadir a mi cesta
        </button>
        <p className="text-gray-600 mb-2">Ref {producto.referencia}</p>
        <p className="text-gray-600 mb-2">{producto.descripcion}</p>
        <p className="text-gray-600">Altura del tacón: {producto.alturaTacón} cm</p>
      </div>
    </div>
  );
};

export default DatosArticulo;
