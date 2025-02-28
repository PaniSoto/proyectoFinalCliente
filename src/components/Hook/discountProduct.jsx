let products;
// fetch("http://localhost:3000/api/productos?search&categoria=Camisas")
    fetch("http://localhost:3000/api/productos")
    .then((response) => response.json())
    .then((productosRecibidos) => products = productosRecibidos);

    console.log(products);
export const discountProduct = (_id) => {
    const product = products.find(item => item._id === _id);
    return (product.precio - (product.precio * product.descuento / 100));
}