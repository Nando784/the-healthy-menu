import React from 'react'
import style from '../../style/Divider.module.css'

import Rating from '../../images/Rating.png'
import Community from '../../images/Community.png'


import Container from 'react-bootstrap/Container';

function Divider({ category }) {
  return (
    <>
      <Container fluid className={style.divider}>
        {categorySelector(category)}
      </Container>
    </>
  )
}

function categorySelector(category){
  switch(category){
    case 'rating': 
      return (
        <>
          <img className={style.icon} src={Rating} alt="Divider_Icon" />
          <h3 class={style.title}>
            <strong>Highest Score</strong>
          </h3>
          <hr style={{ width: "40%", margin: "0" }} />
        </>
      )

    case 'community': 
      return (
        <>
          <img className={style.icon} src={Community} alt="Divider_Icon" />
          <h3 class={style.title}>
            <strong>Most Popular Recipes</strong>
          </h3>
          <hr style={{ width: "40%", margin: "0" }} />
        </>
      )

    case 'end': 
      return (
        <>
        <hr style={{ width: "90%", margin: "0" }} />
        </>
      )

  }
}


export default Divider
