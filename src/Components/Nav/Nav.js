import "./Nav.css"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
const Nav = () =>
    <>
        <nav className="navBar">
            <Link to='/'>
            <div className='logo'>
                Store    
            </div>
            </Link>
            
            <div className='navMenu'>
                <Link to='/'><p>Home</p></Link>
                <Link to='/category/men'><p>Men</p></Link>
                <Link to='/category/women'><p>Women</p></Link>
                <Link to='/category/kids'><p>Kids</p></Link>
                
                <CartWidget/>
            </div>
        </nav>
    </>
export default Nav;