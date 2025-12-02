import { NavLink } from 'react-router-dom'
import './menu.scss'

function Menu() {
    return (
        <nav>
            <ul>
                <li><NavLink className='lien_nav' to='/home'>Acceuil</NavLink></li>
                <li><NavLink className='lien_nav' to='/about'>A Propos</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu