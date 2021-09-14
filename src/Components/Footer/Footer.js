import './Footer.scss'
import * as AiIcons from 'react-icons/ai'
const Footer = () => {
    return(
        <footer>
            <div className='social'>
                <AiIcons.AiOutlineGithub size='50px' cursor='pointer' />
                <AiIcons.AiOutlineLinkedin size='50px' cursor='pointer'/>
            </div>
            <div className="copyright">
            <p>
            © 2021 Copyright 
            Vitale Juan Pablo
            </p>
            </div>
        </footer>
    )
}

export default Footer