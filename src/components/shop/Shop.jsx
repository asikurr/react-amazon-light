import React ,{useState, useEffect}from 'react';
import fakeData from '../../fakeData'
import './shop-style.css'
import Product from '../product/Product'
import Cart from '../cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import {Link} from 'react-router-dom'

const Shop = () => {
    const firstTen = fakeData.slice(0,10)
    const [products, setProducts] = useState(firstTen)
    const [cart, setCart] = useState([])
    // console.log(cart)
    const productAddHandler = (product) =>{
        // console.log("product clicked !",product)
        const cartKey = product.key;
        // console.log(product)
        const sameProduct = cart.find(pd => pd.key === cartKey );
        console.log(sameProduct)
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const other = cart.filter(pd => pd.key !== cartKey)
            newCart = [...other, sameProduct]
        }else{
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDatabaseCart(cartKey, count)
        // const newCart = [...cart, product]
        // // console.log(newCart)
        // setCart(newCart);
        // const sameProduct = newCart.filter(pd => pd.key === product.key );
        // // console.log(sameProduct)
        // const count = sameProduct.length
    }
    
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKey = Object.keys(saveCart);
        const currentKey = productKey.map(existingKey =>{
            const product = fakeData.find(pd => pd.key === existingKey)
            product.quantity = saveCart[existingKey]
            return product;
        })
        setCart(currentKey)
       
    }, []);


    return (
        <div className="shop-container">
            <div className="product-container">
            {
                products.map(product=>
                <Product 
                    addToProductBtn={true}
                    productAddHandler={productAddHandler}
                    key={product.key} 
                    product={product}>
                </Product>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                 <Link to="/review"><button className="product__btn">Product Review</button> </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;