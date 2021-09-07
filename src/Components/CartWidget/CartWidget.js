import { useContext } from "react"
import { Link } from "react-router-dom"
import { context } from "../CartContext/CartContext";
import * as AiIcons from 'react-icons/ai';
import './CartWidget.scss'

const CartWidget = () => {
    
const {cart} = useContext(context)
return(

    <Link className='cartBadge' to="/cart">
    <AiIcons.AiOutlineShoppingCart className='iconCart'/>
    {cart.length ? <span className='iconBadge'>{cart.length}</span> : null}
    </Link>
)

}
export default CartWidget;