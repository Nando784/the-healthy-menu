import React from "react";
import { useSelector } from "react-redux";

import Header from "../components/layout/Header";
import Title from "../components/Title";
import CardContainer from "../components/layout/CardContainer";
import Footer from "../components/layout/Footer";

import utilsStyle from "../style/Utils.module.css";
import { populateHistory } from "../Libs/Library"

function  Searched() {
  //const history = useSelector((state)=> state.history) state.filter ?

  return (
    <div className={utilsStyle.background}>
      <Header />
      <Title title="Search Results" />

      <CardContainer>

      {
       // populateHistory(history)
      }

      </CardContainer>

      <Footer white={true} />
    </div>
  );
}

export default Searched;



