import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import * as serviceWorker from './serviceWorker';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Blog from './components/Blog/Blog';
import Graphic from './components/Graphic/Graphic';
import Photography from './components/Photography/Photography';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
ReactDOM.render(
  <React.StrictMode>
      <App/>
        {/* <Route path='/' component={App} /> */}
        {/* <Route path='/graphic' component={Graphic} />
        <Route path='/photography' component={Photography} />
        <Route path='/blog' component={Blog} />
        <Route path='/faq' component={FAQ} />
        <Route path='/contact' component={Contact} /> */}

  </React.StrictMode >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
