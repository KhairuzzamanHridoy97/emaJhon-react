import React from 'react';
import useProducts from '../hooks/useProducts';
import useCart from '../hooks/useCart';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            <h2>{products.length}</h2>
            <h3>{cart.length}</h3>
            <h2>This is Overview</h2>
        </div>
    );
};

export default OrderReview;