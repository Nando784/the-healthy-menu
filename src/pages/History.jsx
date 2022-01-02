import React from "react";
import { useSelector } from "react-redux";

import Header from "../components/layout/Header";
import Title from "../components/Title";
import CardContainer from "../components/layout/CardContainer";
import Footer from "../components/layout/Footer";

import utilsStyle from "../style/Utils.module.css";
import { populateHistory } from "../Libs/Library"

function History() {
  //Con use Selector selezioniamo lo state globale "(state)" e gli diciamo che, in questo caso, vogliamo l'oggetto "history" che si trova dentro lo stato
  const history = useSelector((state)=> state.history)

  console.log("history =>" + history) //in console lo stampa come [Object object] per dire che è un array che contiene oggetti
  if (history.length > 0 ){
    console.log("element =>" + history[0].id + " " + history[0].title)
  }else{
    console.log("no element in history")
  }



  return (
    <div className={utilsStyle.background}>
      <Header />
      <Title title="History" />
      <CardContainer history={true}>

      {
        //TODO FAI LA COSA QUI DENTRO COME SI DEVE
        populateHistory(history)
      }

      </CardContainer>

      <Footer white={true} />
    </div>
  );
}

export default History;



