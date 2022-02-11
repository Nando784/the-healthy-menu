import React from "react";
import { useNavigate } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

import style from "../style/SearchBar.module.css";
import Container from "react-bootstrap/Container";

function SearchBar() {

  let navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      let query = event.target.value ? event.target.value : '*'  
      navigate(`/searched/diet/vegetarian/${query}`);
      window.location.reload();
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);



  return (
    <Container className={style.searchContainer} fluid="xxl">
      <Container className={style.search} fluid="xxl">
        <FaSearch className={style.icon} />
        <input
          className={style.searchInput}
          type="text"
          placeholder="Search..."
        />
      </Container>
    </Container>
  );
}

export default SearchBar;
