import React from 'react';
import {Link} from 'react-router-dom'

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart)
    // const total = cart.reduce((total, product) => total + product.price, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        total = total + element.price;
    }

    let tax = (total * 7 / 100)
    let shippingCost = 0;
    if (total > 35) {
        shippingCost = 0;
    } else if(total>15 && total<=35){
        shippingCost = 4.99;
    }else if(total<=15 && total > 0){
        shippingCost = 10.99;
    }

    const grandTotal = (total + shippingCost + tax)

    const toFixNumber = (numb) =>{
       const nu = numb.toFixed(2);
       return Number(nu);
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Total Items : {cart.length}</p>
            <p>Total Price : $ {toFixNumber(total)}</p>
            <p>Tax 7% : $ {toFixNumber(tax)}</p>
            <p>Shipping Cost : $ {shippingCost}</p>
            <p>Grand Total: $ {toFixNumber(grandTotal)}</p>
            <br/>
            <Link to="/review"><button className="product__btn">Product Review</button> </Link>
        </div>
    );
};

export default Cart;