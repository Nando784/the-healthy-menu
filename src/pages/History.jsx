import React from "react";

import Header from "../components/layout/Header";
import Title from "../components/Title";
import CardContainer from "../components/layout/CardContainer";
import Footer from "../components/layout/Footer";

import utilsStyle from "../style/Utils.module.css";


function History() {
  return (
    <div className={utilsStyle.background}>
      <Header />
      <Title title="History" />
      <CardContainer history={true}>

      {
        //TODO:
        //Qua usa lo store di Redux per popolarlo
      }

      </CardContainer>

      <Footer white={true} />
    </div>
  );
}

export default History;
