import "./Nav.scss"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
const Nav = () =>
    <>
        <div className='logoContainer'>
            <Link to='/'>
            <div className='logo'>
                Store    
            </div>
            </Link>
        </div>
        <nav className="navBar">
            <div className='navMenu'>
                <Link className='linkDecoration' to='/'><p>Home</p></Link>
                <Link className='linkDecoration' to='/category/men'><p>Men</p></Link>
                <Link className='linkDecoration' to='/category/women'><p>Women</p></Link>
                <Link className='linkDecoration' to='/category/kids'><p>Kids</p></Link>
                
                <CartWidget/>
            </div>
        </nav>
    </>
export default Nav;