import { useContext } from "react";
import { context } from "../CartContext/CartContext";

const Cart = () => {

    const { cart , removeProduct , clear } = useContext(context)
    return ( 
        <div>
            Cart
            {cart.map(product =>
                <div key={product.product.id}>
                    {product.product.name} x {product.amount} - ${product.product.price * product.amount}
                    <p>{product.amount}</p>
                    <button onClick={()=>removeProduct(product)}>borrar</button>
                </div>
            )}
            <button onClick={()=>clear()}>Vaciar el Carrito</button>
        </div>
    )
}


export default Cart;




// const Cart = () => {
//     return(
//         <p> Carrito de Compras</p>
//     )
// }

// export default Cart;