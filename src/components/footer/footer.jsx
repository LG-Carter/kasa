import './footer.scss'
import Logo from '../../assets/LOGO_footer.png'


function Footer () {
    return <footer className='footer'>
        <footer className='footer'>
			<img src={Logo} className='logo' alt="Kasa - agence de location d'appartements entre particuliers" />
			<p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
		</footer>

     </footer>
}

export default Footer