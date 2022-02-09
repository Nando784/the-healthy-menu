import React from "react";

import { Link } from "react-router-dom";

import Card from "../components/Card";
import style from "../style/Buttons.module.css";
import DB from "./LocalDB";

export let populateCountryes = () => {
  return DB.Countryes.map((country) => (
    <Link
      key={country.id}
      className={style.advanceResearchButton}
      to={`/searched/cuisine/${country.name.replace(" ","")}/*`}
    >
      <p>{country.name}</p>
    </Link>
  ));
};

export let populateIntolerances = () => {
  return DB.Intolerances.map((intolerance) => (
    <Link
      key={intolerance.id}
      className={style.advanceResearchButton}
      to={`/searched/intolerances/${intolerance.name.replace(" ", "")}/*`}
    >
      <p>{intolerance.name}</p>
    </Link>
  ));
};

export let populateDiet = () => {
  return DB.Diets.map((diet) => (
    <Link
      key={diet.id}
      className={style.advanceResearchButton}
      to={`/searched/diet/${diet.name.replace(" ", "")}/*`}
    >
      {diet.name}
    </Link>
  ));
};

export let populateHistory = (history) => {
  if (history.length > 0) {
    return (
      <>
        {history.map((element) => (
          <Card
            key={element.id}
            id={element.id}
            image={element.image}
            title={element.title}
          />
        ))}
      </>
    );
  } else {
    return;
  }
};
