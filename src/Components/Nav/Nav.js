import "./Nav.css"
import CartWidget from "../CartWidget/CartWidget";
import userWelcome from "../ItemListContainer/ItemListContainer";
import Logo from "../logo.png"
const Nav = () =>
    <>
        <nav className="navBar">
            <div className='logoContainer'>
                <p>Logo</p>
            </div>
            <div className='navMenu'>
                <p>Home</p>
                <p>Products</p>
                <CartWidget/>
            </div>
        </nav>
        <userWelcome/>
    </>
export default Nav;