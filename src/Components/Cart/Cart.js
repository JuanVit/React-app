import { useContext, useState, useEffect } from "react";
import { context } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import './Cart.scss';


const Cart = () => {

    const { cart , clear } = useContext(context)
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        if (cart.length > 0) {
        setTotalPrice(
            cart
                .map((product) => product.amount * product.product.price)
                .reduce((total, valor) => total + valor)
        );
        }
    }, [cart]);

    if(cart.length){
        return ( 
        <section className='cartContainer'>
            <div className='cartList'>
                <table>
                <tbody>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                </tr>
                </tbody>
                {cart.map(product =>
                <CartItem product={product} key={product.product.id} />
                )}
                </table>
                <div className='total-price'>
                    <table className='total-table'>
                        <tbody>
                            <tr>
                                <td>
                                Total:
                                </td>
                                <td>
                                    $ {totalPrice.toFixed(3)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button onClick={()=>clear()}>Vaciar el Carrito</button>
            <button><Link to='/form'>Comprar</Link></button>
            
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




