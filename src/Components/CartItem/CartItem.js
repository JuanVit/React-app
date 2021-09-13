import { useContext } from "react";
import { context } from "../CartContext/CartContext";
import './CartItem.scss'
import * as BoxIcons from 'react-icons/bi'

const CartItem = ({product}) =>{
    const { removeProduct} = useContext(context)

    return(
                <tr>
                    <td>
                        <div className='cart-info'>
                            <img src={product.product.img} alt='información producto' />
                            <div className='cart-info-text'>
                                <p>
                                    {product.product.name.substring(0, 15)}
                                </p>
                                <p>
                                    $ {product.product.price}
                                </p>
                            </div>
                        </div>
                    </td>
                    <td>{product.amount}</td>
                    <td>${(product.product.price * product.amount).toFixed(3)}</td>
                    <td>
                        <BoxIcons.BiTrash onClick={() => removeProduct(product)} color='#990000' size='25px' cursor='pointer' />
                    </td>
                </tr>
                
                
    )
}

export default CartItem;