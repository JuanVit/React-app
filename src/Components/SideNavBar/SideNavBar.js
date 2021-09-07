
import * as AiIcons from 'react-icons/ai';
import SideBarInfo from '../SideBarInfo/SideBarInfo';
import { Link } from "react-router-dom";
import { useState } from 'react';
import './SideNavBar.scss';
import { IconContext } from 'react-icons';
import CartWidget from '../CartWidget/CartWidget';

const SideNavBar = () =>  {
        const [sideBar ,setSideBar] = useState(false)
        const showSideBar = () => {
            setSideBar(!sideBar)
        }

        return(
        <>
        <IconContext.Provider value={{color:'black', size:'20px'}}>
            <div className='sideNavBar'>
                <Link to='#' className='menuBars' onClick={showSideBar}>
                <AiIcons.AiOutlineBars />
                </Link>
                <h1>Ship Market</h1>
                <CartWidget />
            </div>
            <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideBar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menuBars' onClick={showSideBar}>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SideBarInfo.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    } )}
                </ul>
            </nav>
        </IconContext.Provider>
        </>

        );
}

export default SideNavBar;