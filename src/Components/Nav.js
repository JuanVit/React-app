import "./Styles/Nav.css"
import CartWidget from "./CartWidget";
import userWelcome from "./ItemListContainer";
import Logo from "./logo.png"
const Nav = () =>
    <>
        <nav className="navBar">
            <div className='logoContainer'>
                <img className='logo' src={Logo} alt='Logo'/>
                <p>E-Books</p>
            </div>
            <div className='navMenu'>
                <input className='searchBar' type='search' placeholder='Buscar aquí'/>
                <p>Mi Cuenta</p>
                <p>Iniciar Sesión</p>
                <CartWidget/>
            </div>
        </nav>
        <userWelcome/>
    </>
export default Nav;