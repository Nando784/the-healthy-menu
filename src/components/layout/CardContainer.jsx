import React from 'react'
import style from '../../style/CardContainer.module.css'
import Card from '../Card'

function CardContainer() {
  return (
    <div className={style.cardContainer}>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardContainer
