import React from 'react'
import style from '../style/Card.module.css'
import SquareImg from '../images/Square.jpeg'
function Card() {
  return (
    <div className={style.card}>

      <div className={style.imgBx}>
        <img
          className={style.cardImg}
          src={SquareImg}
          alt="Food"
        />
      </div>
      
      <div className={style.content}>
        <h2>Card One</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

    </div>
  );
}

export default Card
