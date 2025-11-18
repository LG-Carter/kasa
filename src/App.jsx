import Home from './pages/home/home';
import About from './pages/about/about';
import Error from './pages/error/error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )};

export default App;
