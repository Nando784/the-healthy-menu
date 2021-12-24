import React from 'react'
import style from '../../style/Divider.module.css'

import Rating from '../../images/Rating.png'
import Community from '../../images/Community.png'


import Container from 'react-bootstrap/Container';

function Divider({ category }) {
  return (
    <>
        {categorySelector(category)}
    </>
  )
}

function categorySelector(category){
  switch(category){
    case 'rating': 
      return (
        <Container fluid className={`${style.divider} ${style.top}`}>
          <img className={style.icon} src={Rating} alt="Divider_Icon" />
          <h3 class={style.title}>
            <strong>Highest Score</strong>
          </h3>
          <hr style={{ width: "40%", margin: "0" }} />
        </Container>
      )

    case 'community': 
      return (
        <Container fluid className={`${style.divider} ${style.top}`}>
          <img className={style.icon} src={Community} alt="Divider_Icon" />
          <h3 class={style.title}>
            <strong>Most Popular Recipes</strong>
          </h3>
          <hr style={{ width: "40%", margin: "0" }} />
        </Container>
      )

    case 'end': 
      return (
        <Container fluid className={`${style.divider} ${style.bottom}`}>
        <hr style={{ width: "90%", margin: "0" }} />
        </Container>
      )

  }
}


export default Divider
