import React ,{useState,useEffect}from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart]= useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data =>setProducts(data))
    }, []);

    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (selectedProduct) =>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
    };

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    return (
        <>
        <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product" />
            </div>
        <div className='shop-container'>
            
            <div className='product-container'>
                {/* <h2>Products : {products.length} </h2> */}
                {
                    displayProducts.map(
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
        </>
    );
};

export default Shop;