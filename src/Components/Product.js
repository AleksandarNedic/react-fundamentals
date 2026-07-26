import './Product.css'

function Product(props) {
    return (
        <div className="product-card">
           <h2>{props.name}</h2>
            <p>Price: ${props.price}</p>
            <p>
                {props.stock ? 'In stock' : 'Out of stock'}
            </p>
            <button>Buy</button>
        </div>
    );
}

export default Product;

