import { Link } from "react-router-dom";

function ImagenHombre() {
    return (

        <Link href="/hombres" className="group">
            <img
                className="w-[850px] h-[737px] object-cover object-top"
                src="../src/assets/imagenes/Hombre.jpg"
                alt="Enlace a la ropa de hombre"
            />
            <h1 className="absolute left-70 top-85 transform -translate-y-1/2 text-white text-3xl transition-transform duration-300 scale-0 group-hover:scale-110 underline">
                Hombres
            </h1>
        </Link>
    );
}

export default ImagenHombre;