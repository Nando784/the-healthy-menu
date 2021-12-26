import React from 'react'
import style from '../style/Card.module.css'
import SampleSalad from '../images/SampleSalad.jpg'
function Card({image, title, description}) {
  return (
    <div className={style.card}>
      <div className={style.imgBx}>
        <img className={style.cardImg} src={SampleSalad} alt="Food" />
        {
        /*Sostituire l'immagine SRC con la props 'image'*/
        /*MOdifica il css e aggiungi qualche classe. Se la props open è true allora la card deve essere aperta e non con l'animazione*/
        }
      </div>

      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card
