import React from 'react';

const Product = (props) => {
    const{name,img,price,stock,seller}= props.product

    return (

        <div className='d-flex'>
            <div>
                 <img src={img} alt="" />
            </div> 
            <div>
            <h3 className='text-primary'>This is {name}</h3>
            <h5>Price: {price} USD</h5>
            <p><small>By: {seller}</small></p>
            <p>Only: {stock} left! Order Soon :) </p>
            <button onClick={()=>props.handleAddToCart(props.product)}  className='btn btn-warning'>Add To Cart</button>
            <hr  className='text-green'/> 
            </div>
        </div>
    );
};

export default Product;