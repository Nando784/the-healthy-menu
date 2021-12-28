import React from 'react'

import Container from 'react-bootstrap/Container'
import style from '../../style/Buttons.module.css'

function ButtonContainer(props) {
  return (
    <Container className={style.buttonContainer}>{props.children}</Container>
  )
}



export default ButtonContainer
