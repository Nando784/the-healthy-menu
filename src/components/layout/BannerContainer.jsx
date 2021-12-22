import React from 'react'
import Container from "react-bootstrap/Container";

import style from '../../style/BannerContainer.module.css'
import Banner from '../Banner'

import VeganIcon from "../../images/VeganIcon.png";
import ChefIcon from '../../images/ChefIcon.png';
import RatingIcon from "../../images/RatingIcon.png";
import StoreIcon from "../../images/StoreIcon.png";



function BannerContainer() {
  return (
    <Container className={style.BannerContainer} fluid>
      <Banner
        icon={VeganIcon}
        title={"100% Vegan"}
        message={
          "On this site you will find only Vegan and Vegetarian recipes. The environment will be happy!"
        }
      />

      <Banner
        icon={ChefIcon}
        title={"You. The Chef!"}
        message={
          "Each recipe is detailed and will show you step by step how to proceed. You'll become a real chef!"
        }
      />

      <Banner
        icon={RatingIcon}
        title={"Best Recipes"}
        message={
          "Thanks to the evaluation system you will be able to see the recipes most voted by the community."
        }
      />

      <Banner
        icon={StoreIcon}
        title={"Restaurant Level"}
        message={
          "Impress your friends with the best recipes. They'll feel like they are in a real restaurant."
        }
      />
    </Container>
  );
}

export default BannerContainer
