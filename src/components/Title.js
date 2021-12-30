import React from 'react'
import utilsStyle from '../style/Utils.module.css'

function Title({title}) {
  return (
    <>
      <h1 className={utilsStyle.title}>{title}</h1>
    </>
  );
}

export default Title
