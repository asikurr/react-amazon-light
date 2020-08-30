import React, {useEffect,useState} from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../reviewItems/ReviewItems';

const Review = () => {
    const [cart, setCart] = useState([]);
        console.log(cart)
    useEffect(() => {
        const saveData = getDatabaseCart();
        // console.log(saveData)
        const dataKeys = Object.keys(saveData);
        //  console.log(dataKey)
        const productData = dataKeys.map(key =>{
            const product = fakeData.find(pd => pd.key === key)
            // console.log(product)
            product.quantity = saveData[key]
            return product;

        });
        setCart(productData)
    }, [])
    return (
        <div>
        <h1>This is Review Page. {cart.length}</h1>
        {
            cart.map(pd => <ReviewItems key={pd.key} product = {pd}/>)
        }
        
        </div>
    );
};

export default Review;