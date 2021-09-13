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
        <section className='cart-container'>
            <div className='cart-list'>
                <table>
                <tbody>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th></th>
                </tr>
                {cart.map(product =>
                <CartItem product={product} key={product.product.id} />
                )}
                </tbody>
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
            <div className='cart-options'>
                <button onClick={()=>clear()}>Vaciar el Carrito</button>
                <Link to='/form'><button>Comprar</button></Link>
            </div>
        </section>
    )
} else{
        return(
            <section className="cart-empty-container">
                <h2>¡Ups!</h2>
                <p>
                    Tu carrito está vacío.
                </p>
                <p>¿No sabes que comprar? ¡Miles de productos te esperan ! </p>
                <Link to='/'><button>Seguir Comprando</button></Link>
            </section>
        )
    }
}



export default Cart;




