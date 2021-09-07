import { useContext } from "react";
import { context } from "../CartContext/CartContext";
import './CartItem.scss'

const CartItem = ({product}) =>{
    const { removeProduct} = useContext(context)

    return(
            // <div className='cartItemBox'>
            //     <img  src={product.product.img} alt={product.product.name} width='250' height='300' />
            //     {product.product.name} x {product.amount} - ${(product.product.price * product.amount).toFixed(3)}
            //     <button onClick={()=>removeProduct(product)}>borrar</button>
            // </div>  
                
                <tr>
                    <td>
                        <div className='cart-info'>
                            <img src={product.product.img} alt='información producto' />
                            <div>
                                <p>
                                    {product.product.name.substring(0, 15)}
                                </p>
                            </div>
                        </div>
                    </td>
                    <td>{product.amount}</td>
                    <td>${(product.product.price * product.amount).toFixed(3)}</td>
                </tr>
                
                
    )
}

export default CartItem;