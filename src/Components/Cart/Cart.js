import { useContext } from "react";
import { context } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import './Cart.css';


const Cart = () => {

    const { cart , clear } = useContext(context)
    if(cart.length){
        return ( 
        <section className='cartContainer'>
            <div className='cartList'>
            {cart.map(product =>
                <CartItem product={product} key={product.product.id} />
            )}
            </div>
            <button onClick={()=>clear()}>Vaciar el Carrito</button>
        </section>
    )
} else{
        return(
            <section className="cartContainer">
                <p>
                    Tu carrito está vacío.
                </p>
                <Link to='/'><button>Seguir Comprando</button></Link>
            </section>
        )
    }
}



export default Cart;




