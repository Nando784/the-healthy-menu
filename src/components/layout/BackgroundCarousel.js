import React from 'react'
import style from '../../style/BackgroundCarousel.module.css'
import Carousel from 'react-bootstrap/Carousel';
import Background1920 from "../../images/Background1920.jpg";
import Arrow from '../Arrow'

function BackgroundCarousel() {
  return (
    <>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Background1920}
            alt="Background"
          />
          <Carousel.Caption className={style.caption}>
            <h1>The Healthy Menu</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Arrow />
    </>
  );
}

export default BackgroundCarousel
