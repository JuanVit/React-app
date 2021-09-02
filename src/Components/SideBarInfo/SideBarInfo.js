import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const SideBarInfo = [
    {
        title: 'Home', 
        icon: <AiIcons.AiFillHome />, 
        path: '/',
        cName: 'nav-text'
    },
    {
        title: 'Men', 
        icon: <IoIcons.IoMdMan />, 
        path: '/category/men',
        cName: 'nav-text'
    },
    {
        title: 'Woman', 
        icon: <IoIcons.IoMdWoman/>, 
        path: '/category/women',
        cName: 'nav-text'
    },
    {
        title: 'Kids', 
        icon: <FaIcons.FaBaby />, 
        path: '/category/kids',
        cName: 'nav-text'
    }
]

export default SideBarInfo;