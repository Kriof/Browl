import React from 'react';
import './Menu.css';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Router,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Photography from '../Photography/Photography';
import App from '../App/App';
import Blog from '../Blog/Blog';
import Graphic from '../Graphic/Graphic';
import FAQ from '../FAQ/FAQ';
import Contact from '../Contact/Contact';
import LandingPage from '../LandingPage/LandingPage';
class Menu extends React.Component {
    render() {
        return (
            <>
                <section className="menu">
                    <ul className="menu-list">
                        <li><Link to='/' >Home</Link></li>
                        <li><NavLink to="/graphic">Grafika</NavLink></li>
                        <li><Link to="/photography">Fotografia</Link></li>
                        {/* <li><Link to="/blog">Blog</Link></li> */}
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contact">Kontakt</Link></li>
                    </ul>

                </section>
            </>
        )
    }
    
}

export default Menu;