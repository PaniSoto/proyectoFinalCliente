export const discountProduct = (product) => {
    return (product.precio - (product.precio * product.descuento / 100));
}