import Header from '../../components/header/header.jsx'
import Banner from '../../components/banner/banner.jsx'
import bannerAbout from '../../assets/bannerAbout.png'
import Footer from '../../components/footer/footer.jsx'
import Collapse from '../../components/collapse/collapse.jsx'



function About () {
    return (
        <div className='about'>
            <Header />
            <Banner imageUrl={ bannerAbout} />
            <Collapse title='Fiabilité'>
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont confirmes aux logements, 
                   et toutes les informations sont régulièrement vérifiées par nos équipes</p>
            </Collapse>
            <Collapse title='Respect'>
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire
                   ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </p>
            </Collapse>
            <Collapse title='Service'>
                <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter
                   si vous avez la moindre question.
                </p>
            </Collapse>
            <Collapse title='Sécurité'>
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux 
                   critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
                </p>
            </Collapse>
            <Footer />
        </div>
    )
}

export default About;