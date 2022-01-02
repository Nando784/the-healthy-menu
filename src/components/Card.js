import React from 'react'
import { Link } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { addRecipe } from "../app/action"

import style from '../style/Card.module.css'
import utilsStyle from "../style/Utils.module.css";


function Card({id, image, title}) {
  const dispatcher = useDispatch()
  let recipe = {
    id:id,
    image:image,
    title:title
  }

  return (
    <Link
      className={utilsStyle.link}
      to={`/recipe/${title}/${id}`}
      onClick={() => dispatcher(addRecipe(recipe))}
    >
      <div className={style.card}>
        <div className={style.imgBx}>
          <img
            className={style.cardImg}
            src={image}
            alt="Cannot Get Asset From API"
          />
        </div>

        <div className={style.content}>
          <h2 className={style.title}>{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default Card
