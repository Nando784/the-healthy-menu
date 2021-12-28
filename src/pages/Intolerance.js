import React from 'react'

import Header from "../components/layout/Header";
import Title from "../components/Title";
import ButtonContainer from "../components/layout/ButtonContainer";
import Footer from "../components/layout/Footer";

import utilsStyle from "../style/Utils.module.css";

import { populateIntolerances } from "../Libs/Library";

function Intolerance() {
  return (
    <div className={utilsStyle.background}>
      <Header />
      <Title title="Intolerance" />
      <ButtonContainer>{populateIntolerances()}</ButtonContainer>

      {/** Aggiungere il "Search" Button con lo state per attendere il caricamento */}

      <Footer white={true} />
    </div>
  );
}

export default Intolerance
