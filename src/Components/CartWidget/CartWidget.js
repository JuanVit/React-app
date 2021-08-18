import { useContext } from "react"
import { Link } from "react-router-dom"
import { context } from "../CartContext/CartContext";

const CartWidget = () => {
    
const {cart} = useContext(context)

return(

    <Link to="/cart">
    <i class="fas fa-shopping-cart"></i>
    {cart.length ? cart.length : null}
    </Link>
)

}
export default CartWidget;