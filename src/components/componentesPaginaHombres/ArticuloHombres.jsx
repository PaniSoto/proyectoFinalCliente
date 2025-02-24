import { ShoppingBag } from "lucide-react";
import Favoritos from "./Favoritos";

function ArticuloHombres({ imagenProducto,nombreProducto, precioProducto, descuentoProducto }) {
    return (
        <article className="rounded-xl bg-whiteshadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 relative m-auto">
            <a href="#">
                <div className="relative flex items-end overflow-hidden rounded-xl group h-full">
                    <img className="aspect-[9/16] object-cover" src={imagenProducto} alt="Imagen del producto" />

                    <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transition-transform duration-300 
    opacity-90 translate-y-0 group-hover:translate-y-0 group-hover:opacity-90 md:translate-y-full md:opacity-0">
                        <h3 className="text-lg font-semibold text-slate-800">{nombreProducto}</h3>
                        <div>
                            <span className="text-sm font-semibold text-slate-700">{precioProducto}</span>
                            <s className="inline-block text-red-500 text-xs font-semibold px-2 py-1 rounded">{descuentoProducto}</s>
                            <div className="flex items-center justify-between">
                                <div className="transition-transform transform hover:scale-110">
                                    <ShoppingBag className="text-black" />
                                </div>
                               <Favoritos />
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </article>
    );
}

export default ArticuloHombres;