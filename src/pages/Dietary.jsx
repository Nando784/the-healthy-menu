import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/layout/Header";
import Title from "../components/Title";
import ButtonContainer from "../components/layout/ButtonContainer";
import Footer from "../components/layout/Footer";

import utilsStyle from "../style/Utils.module.css";

import { populateDiet } from "../Libs/Library";
import { addDietary, removeDietary } from '../app/action'

function Dietary() {



  const dietary = useSelector((state)=> state.dietaryReducer.dietary)
  console.log(dietary)

  return (
    <div className={utilsStyle.background}>
      <Header />
      <Title title="Dietary" />
      <ButtonContainer>{populateDiet(dietary)}</ButtonContainer>

      <Footer white={true} />
    </div>
  );
}




export default Dietary
