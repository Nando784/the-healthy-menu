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
  const [originalRecipeUrl, setOriginalRecipeUrl] = useState("");
  const [isVisible, setVisibility] = useState("hidden");

  
  useEffect(() => {
    let controller = new AbortController();
    let imageResponse;
    let originalLinkResponse;

    const getRecipeCard = async () => {
      try {
        imageResponse = await axios.get(
          `${baseUrl}/recipes/${params.id}/card${apiKey}`,{signal:controller.signal}
        );

        setRecipeImageUrl(_.get(imageResponse, "data.url"))
        
        controller = null
  
      } catch {
        console.log("Error in Axios Request")
      }
    };

    const getOriginalRecipeUrl = async () => {
      try {
        originalLinkResponse = await axios.get(
          `${baseUrl}/recipes/${params.id}/information${apiKey}`,{signal:controller.signal}
        );

        setOriginalRecipeUrl(_.get(originalLinkResponse, "data.sourceUrl"))
        setVisibility("visible")
        controller = null
  
      } catch {
        console.log("Error in Axios Request")
      }
    };
    
    
    getRecipeCard()
    getOriginalRecipeUrl()

    return () => controller?.abort()

  }, []);


  return (
    <div className={utilsStyle.background}>
      <Header />

      <Title title={params.name} />

      <div className={style.recipeImageContainer} >
        <img className={style.recipeImage} src={recipeImageUrl} alt="Recipe" />
      </div>

      <div className={style.linkContainer}>
        <a href={originalRecipeUrl} target="_blank" rel="noreferrer" style={{visibility: isVisible}} className={style.link}> Original Recipe ... </a>
      </div>
      
      <Footer white={true} />
    </div>
  );
}

export default Recipe;
