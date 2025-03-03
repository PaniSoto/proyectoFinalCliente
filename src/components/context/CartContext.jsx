import { createContext, useState, useEffect } from "react";
import { discountProduct } from "../Hook/discountProduct";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(
        localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    );
    console.log(JSON.parse(localStorage.getItem("cart")))

    // Guardar carrito en localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("Carrito guardado en localStorage");
    }, [cart]);

    const addProduct = (product) => {
        const productInCartIndex = cart.findIndex((item) => item._id === product._id);

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart);
            newCart[productInCartIndex].quantity += 1;
            setCart(newCart);
        } else {
            setCart(prevState => [
                ...prevState,
                { ...product, quantity: 1 }
            ]);
        }
    };

    const removeProduct = (_id) => {
        setCart(cart.filter((item) => item._id !== _id));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart"); // También lo borra del localStorage
    };

    const increaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item._id === productId && item.quantity < item.stock
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item._id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const totalPrice = cart
        .map(item => item.descuento !== undefined ? discountProduct(item) * item.quantity : item.precio * item.quantity)
        .reduce((acc, curr) => acc + curr, 0);

    return (
        <CartContext.Provider value={{ cart, addProduct, removeProduct, clearCart, increaseQuantity, decreaseQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};