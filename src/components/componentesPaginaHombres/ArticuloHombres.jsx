import { ShoppingBag } from "lucide-react";
import Corasao from "./corasao";

function ArticuloHombres() {
    return (
        <article className="rounded-xl bg-whiteshadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 relative">
            <a href="#">
                <div className="relative flex items-end overflow-hidden rounded-xl group h-full">
                    <img className="aspect-[10/15] object-cover" src="https://www.dariobeltran.com/12255-large_default/camisa-algodon-hombre-azul.jpg" alt="Product Photo" />

                    <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full opacity-0 transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-90 bg-opacity-80">
                        <h3 className="text-lg font-semibold text-slate-800">Adobe Photoshop CC 2022</h3>
                        <div>
                            <span className="text-sm font-semibold text-slate-700">16€</span>
                            <s className="inline-block text-red-500 text-xs font-semibold px-2 py-1 rounded">20€</s>
                            <div className="flex items-center justify-between">
                                <div className="transition-transform transform hover:scale-110">
                                    <ShoppingBag className="text-black" />
                                </div>
                                <Corasao />
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </article>
    );
}

export default ArticuloHombres;