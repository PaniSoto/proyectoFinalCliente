import { ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../Hook/useCart";
import { discountProduct } from "../Hook/discountProduct";
import { Link } from "react-router-dom";

function ArticuloHombres({ producto }) {
    const { addProduct, removeProduct, cart } = useCart();
    const isProductInCart = checkProductInCart();

    const checkProductInCart = () => {
        return cart.some((item) => item._id === producto._id);
    };

    return (
        <article className="rounded-xl bg-whiteshadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 relative m-auto">
            <div className="relative flex items-end overflow-hidden rounded-xl group h-full">
                <Link to={`/producto/${producto._id}`}>
                    <img className="aspect-[9/16] object-cover cursor-pointer" src={producto.imagen} alt="Imagen del producto" />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transition-transform duration-300 
    opacity-90 translate-y-0 group-hover:translate-y-0 group-hover:opacity-90 md:translate-y-full md:opacity-0">
                    <h3 className="text-lg font-semibold text-slate-800">{producto.nombre}</h3>
                    <div>
                        <span className="text-sm font-semibold text-slate-700">{discountProduct(producto)}€</span>
                        <s className="inline-block text-red-500 text-xs font-semibold px-2 py-1 rounded">{producto.descuento}%</s>
                        <div className="flex items-center justify-center">
                            <div className="flex items-center justify-center transition-transform transform hover:scale-110">
                                {
                                    !isProductInCart ? (
                                        <div className="flex items-center bg-gray-300 rounded-full px-3 py-2 text-black cursor-pointer" onClick={() => addProduct(producto)}>
                                            <ShoppingBag className="mr-2" />
                                            Añadir al carrito
                                        </div>
                                    ) : (
                                        <div className="flex items-center bg-gray-300 rounded-full px-3 py-2 text-black cursor-pointer" onClick={() => removeProduct(producto._id)}>
                                            <Trash2 className="mr-2" />
                                            Quitar del carrito
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </article>
    );
}

export default ArticuloHombres;