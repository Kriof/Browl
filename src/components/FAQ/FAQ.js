import React from "react";
import "./FAQ.css";

function FAQ() {
  return (
    <div>
      <section className="FAQ">
        <h4>Najczęściej zadawane pytania i odpowiedzi</h4>
        <ul className="main">
          <li className="element">
            <div className="question">
              1. Czy zdjęcia są chronione prawem autorskim
            </div>
            <div className="description">
              Tak. Wszystkie zdjęcia posiadają prawa autorskie
            </div>
          </li>
          <li>
            <div className="question">
              1. Czy zdjęcia są chronione prawem autorskim
            </div>
            <div className="description">
              Każa oferta jest stworzona pod klienta. Stawki są uzależnione od
              wielu współczynników m. in. :<br />
              <ul>
                <li>Wydarzenia</li>
                <li>Lokalizacji</li>
                <li>Ilości zdjęć</li>
                <li>Czasu trwania</li>
                <li>Dodatkowych usług</li>
              </ul>
            </div>
          </li>
          <li>
            <div className="question">
              1. Czy zdjęcia są chronione prawem autorskim
            </div>
            <div className="description">
              Zadatek jest kwestią umowną. Jest to preferowany sposób
              zabezpieczenia interesów klienta i fotografa/grafika. Skłania on
              klienta do przemyślanych decyzji i nie blokowania tego samego
              terminu u kilku fotografów naraz.
            </div>
          </li>
          <li>
            <div className="question">
              1. Czy zdjęcia są chronione prawem autorskim
            </div>
            <div className="description">
              Zajmujemy się zleceniami fotograficznymi na terenie podkarpacia i
              okolic. Zleceniami graficznymi nie ograniczamy się do regionu,
              pracę wykonujemy zdalnie.
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default FAQ;
