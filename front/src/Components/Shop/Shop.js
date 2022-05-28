import React ,{useState,useEffect}from 'react';
import './Shop.css';
import Product from '../Product/Product';


const Shop = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]) ;

    const handleAddToCart = (product)=>{
        console.log(product);
    };

    return (
        <div className='shop-container'>

            <div className='product-container'>
                {/* <h2>Products : {products.length} </h2> */}
                {
                    products.map(
                        product=>
                        <Product 
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>
                        
                    )
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <h5>Items Ordered: </h5>
            </div>

        </div>
    );
};

export default Shop;