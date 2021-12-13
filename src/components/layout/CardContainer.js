import React from 'react'
import style from '../style/CardContainer.module.css'
import Card from '../Card'

function CardContainer() {
  return (
    <div className="card-container">
      <Card>Tutti Gli Elementi Da Passare alla Card</Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
}

export default CardContainer
