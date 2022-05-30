import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    // destruct.
    const {cart} = props;
    let total =0;
    for(const product of cart){
        total = total + product.price;
    };

    const shipping = 0;
    const tax = (total+shipping)/100;
    const grandTotal = total+shipping+tax;
    
    return (
        <div>
             <h3>Order Summary</h3>
                <h5>Items Ordered: {props.cart.length} </h5>
               <p>Total: {total}</p> 
               <p>Tax: {tax}</p>
               <p>Grand Total:</p>
        </div>
    );
};

export default Cart;