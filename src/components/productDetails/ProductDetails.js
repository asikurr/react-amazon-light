import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData'
import Product from '../product/Product';

const ProductDetails = () => {
    const {productkey} = useParams(); 
    const product = fakeData.find(data => data.key === productkey)
    // console.log(product)
    return (
        <div>
            <h1>Product Details</h1>
            <Product addToProductBtn={false} product={product}/>
        </div>
    );
};

export default ProductDetails;