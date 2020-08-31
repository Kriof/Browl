import React from 'react';
import './Header.css';
import tel from '../../images/main/tel.png';
import mail from '../../images/main/mail.png';
function Header() {
    return (
        <header className="Header">

            <section className="Credentials">
                <div className="contact">
                    <img className="Credentials-icon" src={tel}></img>
                    <h1>737-166-494</h1>
                </div>
                <div className="contact">
                    <img className="Credentials-icon" src={mail}></img>
                    <h1>browlcreative@gmail.com</h1>
                </div>
            </section>
        </header>
    );
}

export default Header;
