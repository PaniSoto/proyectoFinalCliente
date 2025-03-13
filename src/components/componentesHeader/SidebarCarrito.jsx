import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { Trash2, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../Hook/useCart";
import { discountProduct } from "../Hook/discountProduct";

export default function SidebarCarrito({ open, onClose }) {
    const { cart, removeProduct, increaseQuantity, decreaseQuantity, totalPrice } = useCart();
    const { isAuthenticated, setIsLoginOpen } = useAuth();

    const handleClick = () => {
        if (isAuthenticated) {
            // Acción cuando el usuario está autenticado (ejemplo: mostrar un mensaje o redirigir)
            console.log("Ya estás autenticado");
        } else {
            // Mostrar el componente Login si no está autenticado
            onClose();
            setIsLoginOpen(true);
        }
    };

    return (
        <Dialog open={open} onClose={onClose} className="absolute z-50">
            <DialogBackdrop
                transition
                className="fixed inset-0 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
            />
            <div className="fixed inset-0 flex items-center">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                        <DialogPanel
                            transition
                            className="pointer-events-auto w-screen h-screen sm:max-w-md sm:h-[calc(100vh-2rem)] transform transition duration-500 ease-in-out"
                        >
                            <div className="flex flex-col bg-white shadow-xl rounded-lg h-full md:mt-4 md:mr-5">
                                <div className="flex flex-col overflow-y-auto p-6 sm:p-8">
                                    <div className="flex items-start justify-between">
                                        <DialogTitle className="text-lg font-medium text-gray-900">
                                            Carrito
                                        </DialogTitle>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button
                                                type="button"
                                                onClick={onClose}
                                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                            >
                                                <X aria-hidden="true" className="size-6" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <div className="flow-root">
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                {cart.map((product) => (
                                                    <li key={product._id} className="flex py-6">
                                                        <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                            <img alt={product.nombre} src={product.imagen} className="size-full w-full object-cover object-top" />
                                                        </div>
                                                        <div className="ml-4 flex flex-1 flex-col">
                                                            <div>
                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                    <h3>
                                                                        <a href={product.href}>{product.name}</a>
                                                                    </h3>
                                                                    <p className="ml-4">{discountProduct(product)}€</p>
                                                                </div>
                                                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                                            </div>
                                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                                <p className="text-gray-500">Cantidad {product.quantity}</p>
                                                                <button className="text-xs" onClick={() => decreaseQuantity(product._id)}>
                                                                    -
                                                                </button>
                                                                <button className="text-xs" onClick={() => increaseQuantity(product._id)}>
                                                                    +
                                                                </button>
                                                                <div className="flex">
                                                                    <button type="button" className="font-medium" onClick={() => removeProduct(product._id)} >
                                                                        <Trash2 className="text-red-500 hover:text-red-400" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 p-6 sm:p-8">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>{totalPrice.toFixed(2)}€</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">Envío y impuestos calculados en la caja de pago.</p>
                                    <div className="mt-6">
                                        <a
                                            onClick={handleClick}
                                            className="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-green-700"
                                        >
                                            Comprar
                                        </a>
                                    </div>
                                    <p className="mt-3 text-center text-sm text-black">O{' '}</p>
                                    <div className="mt-3 flex justify-center text-center text-sm text-gray-500">

                                        <button
                                            type="button"
                                            onClick={onClose}
                                            className="font-medium text-gray-200  hover:text-indigo-400"
                                        >
                                            Continua comprando
                                            <span aria-hidden="true"> &rarr;</span>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    );
}