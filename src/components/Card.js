import React from 'react'
import style from '../style/Card.module.css'

function Card({image, title}) {
  return (
    <div className={style.card}>
      <div className={style.imgBx}>
        <img className={style.cardImg} src={image} alt="Cannot Get Asset From API" />
      </div>

      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
      </div>
    </div>
  );
}

export default Card
