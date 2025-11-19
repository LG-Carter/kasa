import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Banner from '../../components/banner/banner';
import BannerImg from '../../assets/Banner_img.png';
import Card from '../../components/card/card.jsx';
import './home.scss';

function Home() {
    return (
        <div className='home'>
            <Header />
            <Banner title='Chez vous, partout et ailleurs' imageUrl={BannerImg} />
            <Card />
            <Footer />
        </div>
    )
  
}

export default Home