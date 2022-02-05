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
      to={`/searched/cuisine=${country.name}/-1`}
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
      to={`/searched/intolerances=${country.name}/-1`}
    >
      <p>{intolerance.name}</p>
    </Link>
  ));
};

export let populateDiet = (filters) => {
  return DB.Diets.map((diet) => (
    <button
      key={diet.id}
      className={` ${style.advanceResearchButton} ${
        filters.includes(diet.name) ? style.advanceResearchButtonChecked : ""
      } `}
      href={`./searchedForIntolerance=${diet.name}`}
      //OnClick Go to the page with Recipes With Only That Diet. Im tired. I dont wanna do the old version. Just want to finish this.
    >
      {diet.name}
    </button>
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
