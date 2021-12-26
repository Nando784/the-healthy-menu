import React from 'react'

import Header from "../components/layout/Header";
import CardContainer from "../components/layout/CardContainer";
import Footer from "../components/layout/Footer";

import utilsStyle from "../style/Utils.module.css";

import { populateCountryes } from "../Libs/Library";


function Dietary() {
  return (
    <div className={utilsStyle.background}>
      <Header />

      <CardContainer>{populateCountryes()}</CardContainer>

      <Footer white={true} />
    </div>
  );
}

export default Dietary
