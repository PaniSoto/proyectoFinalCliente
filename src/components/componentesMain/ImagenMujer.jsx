import { Link } from "react-router-dom";

function ImagenMujer() {
    return (
        <Link href="/mujeres" className="group">
            <img
                className="w-[850px] h-[737px] object-cover object-top"
                src="./src/assets/imagenes/Mujer.jpg"
                alt="Enlace a la ropa de mujer"
            />
            <h1 className="absolute right-70 top-85 transform -translate-y-1/2 text-white text-3xl transition-transform duration-300 scale-0 group-hover:scale-110 underline">
                Mujeres
            </h1>
        </Link>
    );
}

export default ImagenMujer;