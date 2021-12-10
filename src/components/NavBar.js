import React from "react";
import { Link } from "react-router-dom";
import style from "../style/NavBar.module.css";
import { GrRestaurant } from "react-icons/gr";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <header className={style.header}>
      <div className={style.link}>
        <ul>
          <li>
            <Link className={style.link} to="/">
              Dietary
            </Link>
          </li>
          <li>
            <Link className={style.link} to="/favorites">
              Country
            </Link>
          </li>
          <li>
            <Link className={style.link} to="/favorites">
              Course
            </Link>
          </li>
        </ul>
      </div>

      <SearchBar />

      <div>
        <ul>
          <li>
            <Link className={style.link} to="/">
              Intolerances
            </Link>
          </li>
          <li>
            <Link className={style.link} to="/favorites">
              
            </Link>
          </li>
          <li>
            <Link className={style.link} to="/favorites">
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
