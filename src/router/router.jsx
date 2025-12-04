import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Error from '../pages/error/error';
import Footer from '../components/footer/footer.jsx';
import Logement from '../pages/logement/logement.jsx';

export default function Routing () {
    return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>;
          <Route path='/home' element={<Home />}/>;
          <Route path='/about' element={<About />}/>
          <Route path='/logement/:id' element={<Logement />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
)};