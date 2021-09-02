import { useContext } from "react";
import { context } from "../CartContext/CartContext";
import './CartItem.scss'

const CartItem = ({product}) =>{
    const { removeProduct} = useContext(context)

    return(
            <div className='cartItemBox'>
                {product.product.name} x {product.amount} - ${product.product.price * product.amount}
                <p>{product.amount}</p>
                <button onClick={()=>removeProduct(product)}>borrar</button>
            </div>  
    )
}

export default CartItem;