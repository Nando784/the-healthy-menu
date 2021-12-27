import React from 'react'
import style from '../style/Card.module.css'
import SampleSalad from '../images/SampleSalad.jpg'
function Card({image, title, description}) {
  return (
    <div className={style.card}>
      <div className={style.imgBx}>
        <img className={style.cardImg} src={SampleSalad} alt="Food" />
        {
        //Sostituire l'immagine SRC con la props 'image'
        //Cambiare il design. Non serve la descrizione. Serve solo il titolo e l'immagine. Fai la card un po' piu' piccola e alza l'immagine.
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
