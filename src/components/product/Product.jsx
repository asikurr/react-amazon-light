import React from "react";
import "./product-style.css";

const Product = (props) => {
	console.log(props.product);
	const { img, name, seller, price, stock } = props.product;
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
			</div>
		</div>
	);
};

export default Product;
