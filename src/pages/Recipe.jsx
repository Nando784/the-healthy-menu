import React from "react";
import { useParams } from "react-router-dom";

import Header from "../components/layout/Header";
import Title from "../components/Title";
import Footer from "../components/layout/Footer";

import utilsStyle from "../style/Utils.module.css";

function Recipe() {
  let params = useParams();

  return (
    <div className={utilsStyle.background}>
      <Header />

      <Title title={params.name} />

      <Footer white={true} />
    </div>
  );
}

export default Recipe;
