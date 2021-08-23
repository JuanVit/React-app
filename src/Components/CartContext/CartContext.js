import { createContext, useState } from "react";
import { findDOMNode } from "react-dom";

export const context = createContext();

const {Consumer, Provider} = context;

const CustomProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addProduct = (product) => {

        setCart([...cart,product])
    }

    const removeProduct = (product) =>{
        const index = cart.indexOf(product);
        cart.splice(index, 1);
        setCart([...cart])
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (product) => {
        
    }
    
    const consumeContext = {cart, addProduct, removeProduct, clear}

    return(
        <Provider value = {consumeContext}>
            {children}
        </Provider>
    )
}

export default CustomProvider; 