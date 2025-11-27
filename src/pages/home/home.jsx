import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import BannerImg from '../../assets/Banner_img.png';
import Galerie from '../../components/galerie/galerie';
import './home.scss';

function Home() {
    return (
        <div className='home'>
            <Header />
            <Banner title='Chez vous, partout et ailleurs' imageUrl={BannerImg} />
            <Galerie />
        </div>
    )
  
}

export default Home