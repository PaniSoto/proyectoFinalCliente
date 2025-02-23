import { Link } from "react-router-dom";

function ImagenHombre() {
    return (
        <Link to="/hombres" className="group">
            <div className="relative w-[50vw] h-screen">
                <img
                    className="w-full h-full object-cover object-top"
                    src="https://github.com/PaniSoto/proyectoFinalCliente/blob/main/src/assets/imagenes/Hombre.jpg?raw=true"
                    alt="Enlace a la ropa de hombre"
                />

                <h2 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl transition-transform duration-300 scale-0 group-hover:scale-110 underline">
                    Hombres
                </h2>
            </div>



        </Link>
    );
}

export default ImagenHombre;