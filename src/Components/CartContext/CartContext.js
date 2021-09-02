import { createContext, useState } from "react";


export const context = createContext();

const {Provider} = context;

const CustomProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    
    const isInCart = (id) => {
        return cart.find(p => p.product.id === id)
    }
    
    const addProduct = (product) => {
        if (isInCart(product.product.id) == null){
            return setCart([...cart,product])
        }
    }

    const removeProduct = (product) =>{
        const index = cart.indexOf(product);
        cart.splice(index, 1);
        setCart([...cart])
    }

    const clear = () => {
        setCart([])
    }

    
    const consumeContext = {cart, addProduct, removeProduct, clear}

    return(
        <Provider value = {consumeContext}>
            {children}
        </Provider>
    )
}

export default CustomProvider; 