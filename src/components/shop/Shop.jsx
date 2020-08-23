import React ,{useState}from 'react';
import fakeData from '../../fakeData'
import './shop-style.css'
import Product from '../product/Product'

const Shop = () => {
    const firstTen = fakeData.slice(0,10)
    const [products, setProducts] = useState(firstTen)
    // console.log(products)
    return (
        <div className="shop-container">
            <div className="product-container">
            {
                products.map(product=><Product key={product.key} product={product}></Product>)
            }
            </div>
            <div className="cart-container">
                <h2>Cart List</h2>
            </div>
        </div>
    );
};

export default Shop;