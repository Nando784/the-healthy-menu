import React from "react";

import style from '../style/Banner.module.css'

function Banner({ icon, title, message }) {
  return (
    <div className={style.banner}>
      <img className={style.icon} src={icon} alt={title} />
      <div className={style.textContainer}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.message}>{message}</p>
      </div>
    </div>
  );
}

export default Banner;
