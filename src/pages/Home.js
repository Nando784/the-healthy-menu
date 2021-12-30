import React from "react";
import { useEffect, useState } from "react";

import axios from 'axios';
import _ from 'lodash';

import DB from '../Libs/LocalDB'

import Header from "../components/layout/Header";
import BackgroundCarousel from "../components/layout/BackgroundCarousel";
import BannerContainer from "../components/layout/BannerContainer";
import CardContainer from "../components/layout/CardContainer";
import Card from "../components/Card";
import Divider from "../components/layout/Divider";
import Footer from "../components/layout/Footer";

let baseUrl = "https://api.spoonacular.com";
let apiKey = `&apiKey=${process.env.REACT_APP_API_KEY}`;


function Home() {

  const [RecipesByRating, setRecipesByRating] = useState(DB.InitialRecipes);
  const [RecipesByCommunity, setRecipesByCommunity] = useState(DB.InitialRecipes);
  useEffect(() => {
    loadRecipesByRating(setRecipesByRating);
    loadRecipesByCommunity(setRecipesByCommunity);

  }, []);

  return (
    <div>
      <Header detach={true} />
      <BackgroundCarousel />

      <BannerContainer />

      <Divider category="rating" />
      <CardContainer>
        <Card
          image={` ${RecipesByRating[0].image}`}
          title={RecipesByRating[0].title}
        />

        <Card
          image={` ${RecipesByRating[1].image}`}
          title={RecipesByRating[1].title}
        />

        <Card
          image={` ${RecipesByRating[2].image}`}
          title={RecipesByRating[2].title}
        />
      </CardContainer>

      <Divider category="end" />

      <Divider category="community" />
      <CardContainer>
        <Card
          image={` ${RecipesByCommunity[0].image}`}
          title={RecipesByCommunity[0].title}
        />

        <Card
          image={` ${RecipesByCommunity[1].image}`}
          title={RecipesByCommunity[1].title}
        />

        <Card
          image={` ${RecipesByCommunity[2].image}`}
          title={RecipesByCommunity[2].title}
        />
      </CardContainer>
      <Divider category="end" />

      <Footer />
    </div>
  );
}


async function loadRecipesByRating(setRecipesByRating) {
  let response = await axios.get(
    `${baseUrl}/recipes/complexSearch?sort=meta-score&number=3${apiKey}`
  );
  const arrOfRatings = _.get(response, "data.results");
  setRecipesByRating(arrOfRatings);
}


async function loadRecipesByCommunity(setRecipesByCommunity) {
  let response = await axios.get(
    `${baseUrl}/recipes/complexSearch?sort=popularity&number=3${apiKey}`
  );
  let arrOfCommunity = _.get(response, "data.results");
  setRecipesByCommunity(arrOfCommunity);
}


export default Home;
