import React from 'react'

import Background from "../components/Background";
import Header from "../components/layout/Header";
import CardContainer from "../components/layout/CardContainer";

import style from '../style/Country.module.css'

import { populateCountryes } from "../Libs/Library";

function Country() {
  return (
    <div className={style.background}>
      <Header />
      {
        /*
          Okay, allora, il problema è grosso.
          Praticamente il Background non si ripete perché io dico che il CardContainer ha sempre una dimensione predefinita, infatti cambia anche con le media query.
          Questo, sostanzialmente, non va bene.
          Perché se inserisco un numero indefinito di card, tutte quelle che non rientrano nella prima linea finiscono fuori la grandezza del div e succede un bordello.
          Tipo nella pagina dei Country.
          Ora. In teoria posso provare a tenere 100% come height perché dovrebbe adattarsi al contenuto, ma nel dubbio vedi se c'è un altra proprietaà che si adatta al contenuto.
          Questo è importante da fixare sia per la home che per tutte le altre pagine dove poi verranno create Card in modo dinamico.
          Che bella la vita.
        */


      }
      <CardContainer>
        {populateCountryes()}
      </CardContainer>
    </div>
  );
}

export default Country
