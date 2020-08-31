import React, { Fragment } from 'react';

const ReviewItems = (props) => {
    // console.log(props)
    const { name, quantity, price, img ,key} = props.product;
    return (
        <Fragment>

            <div className="shop-container">
                <div className="product__img">
                    <img src={img} alt="product img" />
                </div>

                <div className="product__content">
                    <h3 className="product__heading">{name}</h3>
                    <p>Price : ${price}</p>
                    <p>Quantity:  {quantity} </p>
                    <button 
                    onClick={() => props.removeCartItem(key)}
                    className="product__btn">Remove</button>
                </div>
            </div>

        </Fragment>

    );
};

export default ReviewItems;