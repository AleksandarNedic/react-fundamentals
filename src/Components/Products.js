
import Product from "./Product";



const products = [
    { name: 'Iphone 14', price: 1200, stock:true },
    { name: 'Iphone 15', price: 1500, stock:false },
    { name: 'Samsung S25 Ultra', price: 1800, stock:true },
];

function Products() {
    return (
        <>
            <h1>Products</h1>
            {products.map((product, index) => (
                <Product
                    key={index}
                    name={product.name}
                    price={product.price}
                    stock={product.stock}
                />
            ))}
        </>
    )

    }

    export default Products;






