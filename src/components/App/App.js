import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
  BrowserRouter,
} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Blog from '../Blog/Blog';
import Graphic from '../Graphic/Graphic';
import Photography from '../Photography/Photography';
import FAQ from '../FAQ/FAQ';
import Contact from '../Contact/Contact';

// import LandingPage from '../LandingPage/LandingPage';
// import LandingPage from '../LandingPage/LandingPage';
// import LandingPage from '../LandingPage/LandingPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Menu />
        {/* <Switch> */}
          <Route path='/' exact component={LandingPage} />
          <Route path='/graphic' component={Graphic} />
          <Route path='/photography' component={Photography} />
          <Route path='/blog' component={Blog} />
          <Route path='/faq' component={FAQ} />
          <Route path='/contact' component={Contact} />
        {/* </Switch> */}
      </BrowserRouter>
  <footer>© Browl {new Date().getFullYear()} - Grafika, Fotografia, Strony</footer>
    </div>
  );
}

export default App;
