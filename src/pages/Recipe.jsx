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


let baseUrl = "https://api.spoonacular.com/recipes";
let apiKey = `apiKey=${process.env.REACT_APP_API_KEY}`;


function Recipe() {
  let params = useParams();

  const [recipeInformation, setRecipeInformation] = useState({});
  const [recipeIngredientsUrl, setRecipeIngredientsUrl] = useState("");
  const [recipeToolsUrl, setRecipeToolsUrl] = useState("");

  useEffect(() => {
      
    let controller = new AbortController();
    
    const getRecipeInfo = async () => {
      try {
        let response = await axios.get(`${baseUrl}/${params.id}/information?${apiKey}`,{signal:controller.signal});
        setRecipeInformation(_.get(response, "data"))
        console.log("Get Recipe Info => ", recipeInformation.title)
        controller = null
      } catch {
        console.log("Error in Axios Request")
      }
    };

    const getIngredients = async () => {
      try {
        let response = await axios.get(`${baseUrl}/${params.id}/ingredientWidget.png?measure=metric&${apiKey}`,{signal:controller.signal});
        setRecipeIngredientsUrl(response.data)
        console.log("Get Ingredients => ", response.data)
        let ing = document.getElementById("ingredients")
        ing.innerHTML = response.data
        controller = null
      } catch {
        console.log("Error in Axios Request")
      }
    };

    const getTools = async () => {
      try {
        let response = await axios.get(`${baseUrl}/${params.id}/equipmentWidget.png?${apiKey}`,{signal:controller.signal});
        setRecipeToolsUrl(_.get(response, "data"))
        controller = null
      } catch {
        console.log("Error in Axios Request")
      }
    };

    getRecipeInfo()
    getTools()
    getIngredients()

    return () => controller?.abort()

  }, []);


  return (
    <div className={utilsStyle.background}>
      <Header />

      <Title title={params.name} />

      
      <div className={style.page}>
        <div className={style.RecipeInfoContainer}>
          <p>Portion: {_.get(recipeInformation, "servings")} - Ready In: {_.get(recipeInformation, "readyInMinutes")} Minutes </p>

          <img
            className={style.recipeImage}
            src={_.get(recipeInformation, "image")}
            alt="Food"
          />

          <div id="ingredients">

          </div>



        </div>
      </div>
      

      <Footer white={true} />
    </div>
  );
}

export default Recipe;
