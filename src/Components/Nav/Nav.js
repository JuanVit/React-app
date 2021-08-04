import "./Nav.css"
import CartWidget from "../CartWidget/CartWidget";
const Nav = () =>
    <>
        <nav className="navBar">
            <div className='logo'>
                Store
            </div>
            <div className='navMenu'>
                <p>Home</p>
                <p>Products</p>
                <CartWidget/>
            </div>
        </nav>
    </>
export default Nav;