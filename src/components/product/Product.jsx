import React from "react";
import "./product-style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
	// console.log(props);
	const { img, name, seller, price, stock} = props.product;
	return (
		<div className="product">
			<div className="product__img">
				<img src={img} alt="product img" />
			</div>
			<div className="product__content">
				<h3 className="product__heading">{name}</h3>
				<p>
					<small>by: {seller}</small>
				</p>
				<p>Price : ${price}</p>
				<p>Stock : only {stock} left in stock - Order soon.</p>
				<button className="product__btn" onClick={() => props.productAddHandler(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
			</div> 
		</div>
	);
};

export default Product;
