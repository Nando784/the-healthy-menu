import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
import _ from "lodash";

import Header from "../components/layout/Header";
import Title from "../components/Title";
import Footer from "../components/layout/Footer";

import utilsStyle from "../style/Utils.module.css";
import style from "../style/Recipe.module.css"


let baseUrl = "https://api.spoonacular.com";
let apiKey = `?apiKey=${process.env.REACT_APP_API_KEY}`;


function Recipe() {
  let params = useParams();

  const [recipeImageUrl, setRecipeImageUrl] = useState("");

  useEffect(() => {
      
    let controller = new AbortController();
    let response;

    const getRecipeCard = async () => {
      try {

        console.log(`${baseUrl}/recipes/${params.id}/card${apiKey}`)

        response = await axios.get(
          `${baseUrl}/recipes/${params.id}/card${apiKey}`,{signal:controller.signal}
        );

        console.log(response)
        setRecipeImageUrl(_.get(response, "data.url"))
        console.log(recipeImageUrl)

        controller = null
  
      } catch {
        console.log("Error in Axios Request")
      }
    };
    
    getRecipeCard()

    return () => controller?.abort()

  }, []);


  return (
    <div className={utilsStyle.background}>
      <Header />

      <Title title={params.name} />

      <div className={style.recipeImageContainer} >
        <img className={style.recipeImage} src={recipeImageUrl} alt="Recipe" />
      </div>
      

      <Footer white={true} />
    </div>
  );
}

export default Recipe;
