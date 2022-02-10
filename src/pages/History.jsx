import React from "react";
import { useSelector } from "react-redux";

import Header from "../components/layout/Header";
import Title from "../components/Title";
import CardContainer from "../components/layout/CardContainer";
import Footer from "../components/layout/Footer";

import utilsStyle from "../style/Utils.module.css";
import { populateHistory } from "../Libs/Library"

function History() {
  const history = useSelector((store)=> store.history)

  return (
    <div className={utilsStyle.background}>
      <Header />
      <Title title="History" />
      <CardContainer history={true}>

      {
        populateHistory(history)
      }

      </CardContainer>

      <Footer white={true} />
    </div>
  );
}

export default History;



