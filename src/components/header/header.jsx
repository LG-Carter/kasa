import Logo from '../../assets/logo.png'
import Menu from '../menu/menu.jsx'
import './header.scss'

function Header() {
   return( 
   <header className='header'>
        <h1>
            <img src={Logo} alt="Kasa" />
        </h1>
        <Menu />
    </header>
)}

export default Header