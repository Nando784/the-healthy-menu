import React from 'react'
import style from '../style/Utils.module.css'

function Title({title}) {
  return (
    <>
      <h1 className={style.title}>{title}</h1>
    </>
  )
}

export default Title
