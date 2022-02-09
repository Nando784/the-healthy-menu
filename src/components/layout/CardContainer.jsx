import React from 'react'
import style from '../../style/CardContainer.module.css'
import utilsStyle from '../../style/Utils.module.css'

function CardContainer(props){
  return (
    <div className={style.cardContainer}>
      {
        props.children ? props.children : errorFor(props.history)
      }
    </div>
  );
}

function errorFor(history){
  if (!history){
    return <p className={utilsStyle.error}>No Result. Retry</p>
  }else{
    return <p className={utilsStyle.error}>No History. <br/> Look for Some Recipes First !</p>
  }
}

export default CardContainer
