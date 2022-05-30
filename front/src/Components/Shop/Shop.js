import React ,{useState,useEffect}from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';


const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart]= useState([]);


    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]) ;

    const handleAddToCart = (product)=>{
        const newCart = [... cart,product];
        setCart(newCart);
        //save to localStorage
        addToDb(product.key);
        // console.log(product);
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
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;