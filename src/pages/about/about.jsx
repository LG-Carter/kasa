import Header from '../../components/header/header.jsx'
import Banner from '../../components/banner/banner.jsx'
import bannerAbout from '../../assets/bannerAbout.png'
import Footer from '../../components/footer/footer.jsx'
import Collapse from '../../components/collapse/collapse.jsx'



function About () {
    return (
        <div>
            <Header />
            <Banner imageUrl={ bannerAbout} />
            <Collapse title='test 1'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ullam corporis, quibusdam sapiente eos officia tempore optio rem exercitationem placeat ipsum minima mollitia, necessitatibus vel incidunt quo, consectetur repudiandae. Doloremque.</p>
            </Collapse>
            <Collapse title='test 2'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ullam corporis, quibusdam sapiente eos officia tempore optio rem exercitationem placeat ipsum minima mollitia, necessitatibus vel incidunt quo, consectetur repudiandae. Doloremque.</p>
            </Collapse>
            <Collapse title='test 3'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ullam corporis, quibusdam sapiente eos officia tempore optio rem exercitationem placeat ipsum minima mollitia, necessitatibus vel incidunt quo, consectetur repudiandae. Doloremque.</p>
            </Collapse>
            <Footer />
        </div>
    )
}

export default About;