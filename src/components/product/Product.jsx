import React from "react";
import "./product-style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'


const Product = (props) => {
	//  console.log(props);
	const { img, name, seller, price, stock,key} = props.product;
	return (
		<div className="product">
			<div className="product__img">
				<img src={img} alt="product img" />
			</div>
			<div className="product__content">
				<h3 className="product__heading"> <Link to={`/product/${key}`}>{name}</Link> </h3>
				<p>
					<small>by: {seller}</small>
				</p>
				<p>Price : ${price}</p>
				<p>Stock : only {stock} left in stock - Order soon.</p>
				{
					props.addToProductBtn && (
						<button 
						 className="product__btn"
						 onClick={() => props.productAddHandler(props.product)}>
						 <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>)
					/* props.addToProductBtn ? <button className="product__btn" onClick={() => props.productAddHandler(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button> : false */
				}
				
			</div> 
		</div>
	);
};

export default Product;
