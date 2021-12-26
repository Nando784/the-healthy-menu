import React from 'react'
import style from '../../style/CardContainer.module.css'


function CardContainer(props){
  return (
    <div className={style.cardContainer}>
      {
        props.children ? props.children : <p>Nessun Risultato. Riprova</p>
      }
    </div>
  );
}

export default CardContainer
