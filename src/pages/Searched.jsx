import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import _ from "lodash";

import Header from "../components/layout/Header";
import Title from "../components/Title";
import Card from "../components/Card";
import CardContainer from "../components/layout/CardContainer";
import Footer from "../components/layout/Footer";

import utilsStyle from "../style/Utils.module.css";

let baseUrl = "https://api.spoonacular.com";
let apiKey = `&apiKey=${process.env.REACT_APP_API_KEY}`;


function  Searched() {

  let params = useParams();
  const [list, setList] = useState([<p className={utilsStyle.error} >Caricamento ....</p>]);

  useEffect(() => {
      
    let controller = new AbortController();
    let response;
    let completeUrl = "" 

    const responseLoader = async () => {
      try {

        params.filterType == 'diet' ?
          completeUrl = `${baseUrl}/recipes/complexSearch?${params.filterType}=${params.filterName}&sort=meta-score&number=30${apiKey}` 
            :
          completeUrl = `${baseUrl}/recipes/complexSearch?${params.filterType}=${params.filterName}&diet=vegetarian&sort=meta-score&number=30${apiKey}`
        
        
        response = await axios.get(completeUrl, {signal:controller.signal});

        let finalArray = []
        const arrOfRecipes = _.get(response, "data.results");

        for(let element of arrOfRecipes) {
          finalArray.push(
            <Card
              key={`${element.id}`}
              id={`${element.id}`}
              image={`${element.image}`}
              title={element.title}
            />
          )
        }
        
        setList(finalArray);

        controller = null
  
      } catch {
        console.log("Error in Axios Request")
      }
    };
    
    responseLoader()

    return () => controller?.abort()

  }, []);

  return (
    <div className={utilsStyle.background}>
      <Header />
      <Title title="Search Results" />

      <CardContainer>

      { list.length !== 0 && list }

      </CardContainer>

      <Footer white={true} />
    </div>
  );
}

export default Searched;



