import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';


const Product = (props) => {
    const{name,img,price,stock,seller,star}= props.product

    return (

        <div className='d-flex'>
            <div>
                 <img src={img} alt="" />
            </div> 
            <div>
            <h3 className='text-primary'>{name}</h3>
            <h5>Price: {price} USD</h5>
            <p><small>By: {seller}</small></p>
            <p>Only: {stock} left! Order Soon :) </p>
              <Rating 
                    className=' my-2'
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating> <br />
            <button onClick={()=>props.handleAddToCart(props.product)}  className='btn btn-warning'> <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
            <hr  className='text-green'/> 
            </div>
        </div>
    );
};

export default Product;