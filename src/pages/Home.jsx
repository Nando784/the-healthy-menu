import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import _ from "lodash";

import DB from "../Libs/LocalDB";

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
  const [RecipesByCommunity, setRecipesByCommunity] = useState(
    DB.InitialRecipes
  );

  useEffect(() => {
      
    let controller = new AbortController();
    let response;

    const fetcher = async () => {
      try {

        response = await axios.get(
          `${baseUrl}/recipes/complexSearch?diet=vegetarian&sort=meta-score&number=3${apiKey}`,{signal:controller.signal}
        );

        const arrOfRatings = _.get(response, "data.results");
        setRecipesByRating(arrOfRatings);

        response = await axios.get(
          `${baseUrl}/recipes/complexSearch?diet=vegetarian&sort=popularity&number=3${apiKey}`,{signal:controller.signal}
        );

        let arrOfCommunity = _.get(response, "data.results");
        setRecipesByCommunity(arrOfCommunity);

        controller = null
  
      } catch {
        console.log("Error in Axios Request")
      }
    };
    
    fetcher()

    return () => controller?.abort()

  }, []);

  return (
    <div>
      <Header detach={true} />
      <BackgroundCarousel />

      <BannerContainer />

      <Divider category="rating" />
      <CardContainer>
        <Card
          id={RecipesByRating[0].id}
          image={`${RecipesByRating[0].image}`}
          title={RecipesByRating[0].title}
        />

        <Card
          id={RecipesByRating[1].id}
          image={`${RecipesByRating[1].image}`}
          title={RecipesByRating[1].title}
        />

        <Card
          id={RecipesByRating[2].id}
          image={`${RecipesByRating[2].image}`}
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

export default Home;
