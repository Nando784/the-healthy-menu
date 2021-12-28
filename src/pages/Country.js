import React from 'react'

import Header from "../components/layout/Header";
import Title from "../components/Title";
import ButtonContainer from "../components/layout/ButtonContainer";
import Footer from "../components/layout/Footer";

import utilsStyle from '../style/Utils.module.css'

import { populateCountryes } from "../Libs/Library";

function Country() {
  return (
    <div className={utilsStyle.background}>
      <Header />
      <Title title="Country" />
      <ButtonContainer>{populateCountryes()}</ButtonContainer>

      <Footer white={true} />
    </div>
  );
}

export default Country
