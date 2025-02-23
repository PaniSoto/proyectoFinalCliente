import { Link } from "react-router-dom";

function ImagenMujer() {
    return (
        <Link to="/mujeres" className="group">
            <img
                className="w-[850px] h-screen object-cover object-top sm:object-cover"
                src="https://github.com/PaniSoto/proyectoFinalCliente/blob/main/src/assets/imagenes/Mujer.jpg?raw=true"
                alt="Enlace a la ropa de mujer"
            />
            <h1 className="absolute right-70 top-85 transform -translate-y-1/2 text-white text-3xl transition-transform duration-300 scale-0 group-hover:scale-110 underline">
                Mujeres
            </h1>
        </Link>
    );
}

export default ImagenMujer;