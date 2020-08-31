import React, {useEffect,useState} from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../reviewItems/ReviewItems';
import Cart from '../cart/Cart';
import './review.style.css'
import happyImg from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);
    const [img, setImg] = useState(false)

    const handleOrderPlaced = () => {
       setCart([]);
       setImg(true)
       processOrder();
    }
        // console.log(cart)
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const cartProduct = productKeys.map(key =>{
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = saveCart[key]
            return product;

        });
        setCart(cartProduct)
    }, []);

    const removeCartItem = (cartKey) => {
        // console.log("cartKey",cartKey)
        const newCart = cart.filter(pd => pd.key !== cartKey)
        setCart(newCart)
        removeFromDatabaseCart(cartKey)

    }


    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItems 
                    removeCartItem = {removeCartItem}
                    key={pd.key} product = {pd}/>)
                }
                {
                    img && <img src={happyImg} alt=""/>
                }
        
            </div>

            <div className="float-right">
                <Cart cart={cart}>
                    <button onClick={handleOrderPlaced} className="product__btn">Place Order</button>
                </Cart>
            </div>

        </div>
    );
};

export default Review;