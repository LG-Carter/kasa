import { Link } from 'react-router-dom'
import './menu.scss'

function Menu() {
    return (
        <nav>
            <ul>
                <li><Link className='lien_nav' to='/home'>Acceuil</Link></li>
                <li><Link className='lien_nav' to='/about'>A Propos</Link></li>
            </ul>
        </nav>
    )
}

export default Menu