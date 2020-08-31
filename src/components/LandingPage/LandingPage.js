import React from 'react';
import './LandingPage.css';
import logoBrowl from '../../images/main/logoBrowl.png'
import gwarancja from '../../images/icons/gwarancja.svg';
import jakosc from '../../images/icons/jakosc.svg';
import kontakt from '../../images/icons/kontakt.svg';
import pomysl from '../../images/icons/pomysl.svg';


function LandingPage() {
    return (
        <>
            <section className="LandingPage">
                <div className="logo">
                    <img src={logoBrowl} />
                </div>
                <div className="text-container">
                    <h4>Cześć</h4>
                    <p>Jako zgrany zespół wykonamy projekt dostosowany do Twoich indywidualnych potrzeb.</p>
                    <p>Zapewniamy skuteczne i efektywne działania z zakresu reklamy i projektowania.</p>
                    <p>Zaprojektujemy dla Ciebie: Logo, materiały reklamowe, Stronę internetową.</p>
                    <p>Poprowadzimy Twój fanpage w socialmediach oraz wiele, wiele innych</p>
                    <p>Oferujemy Ci wysoką jakość w konkurencyjnych cenach!</p>
                    <p className="text-container-wait">Napisz. To właśnie na Ciebie czekamy! :)</p>

                </div>
                <div className="icon-section">
                    {/* <div className="icon-row"> */}
                    <div className="row">
                        <div className="column">
                            <img src={pomysl} alt="pomysl" />
                            <p>Poszukujemy kreatywnych koncepcji do konkretnego zlecenia. Indywidualnie podchodzimy do klienta i jego potrzeb</p>
                        </div>
                        <div className="column">
                            <img src={gwarancja} alt="gwarancja" />
                            <p>Gwarantujemy rzetelność i szybką obsługę. <br/>Zadbamy o wszystkie kluczowe elementy Twojego projektu.</p>
                        </div>
                    </div>


                    {/* </div>
                    <div className="icon-row"> */} 
                    <div className="row">
                        <div className="column">
                            <img src={jakosc} alt="jakosc" />
                            <p>Dbamy o niepowtarzalność i jakość wykonywanej przez nas pracy.</p>
                        </div>
                        <div className="column">
                            <img src={kontakt} alt="kontakt" />
                            <p>Zapewniamy stały kontakt z klientem podczas realizacji projektu.</p>
                        </div>
                    </div>

                    {/* </div> */}
                </div>
            </section>
        </>
    );
}

export default LandingPage;