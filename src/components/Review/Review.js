import React, {useEffect,useState} from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const saveData = getDatabaseCart();
        // console.log(saveData)
        const dataKey = Object.keys(saveData);
        //  console.log(dataKey)
        const productData = dataKey.map(key =>{
            const product = fakeData.find(pd => pd.key === key)
            // console.log(product)
            product.quantity = saveData[key]
            return product;

        });
        setCart(productData)
            // saveData[key]
        console.log(cart)
            // const producdkey = dataKey.find(orderKey => orderKey === key);
            // console.log(producdkey)

    }, [])
    return (
        <div>
        <h1>This is Review Page.</h1>
        </div>
    );
};

export default Review;