import React ,{useState}from 'react';
import fakeData from '../../fakeData'
import './shop-style.css'
import Product from '../product/Product'
import Cart from '../cart/Cart';

const Shop = () => {
    const firstTen = fakeData.slice(0,10)
    const [products, setProducts] = useState(firstTen)
    const [cart, setCart] = useState([])
    // console.log(products)
    const productAddHandler = (product) =>{
        // console.log("product clicked !",product)
        const newCart = [...cart, product]
        // console.log(newCart)
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
            {
                products.map(product=>
                <Product 
                    productAddHandler={productAddHandler}
                    key={product.key} 
                    product={product}>
                </Product>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;