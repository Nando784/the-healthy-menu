import React from "react";
import style from "../style/SearchBar.module.css";

function SearchBar() {
  return (
    <input className={style.search} type="text" placeholder="Search..." />
  );
}

export default SearchBar;
