import React from 'react'

import Header from "../components/layout/Header";
import Title from "../components/Title";
import ButtonContainer from "../components/layout/ButtonContainer";
import Footer from "../components/layout/Footer";

import utilsStyle from "../style/Utils.module.css";

import { populateDiet } from "../Libs/Library";


function Dietary() {
  return (
    <div className={utilsStyle.background}>
      <Header />
      <Title title="Dietary" />
      <ButtonContainer>{populateDiet()}</ButtonContainer>

      <Footer white={true} />
    </div>
  );
}

export default Dietary
