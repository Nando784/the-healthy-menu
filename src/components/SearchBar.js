import React from "react";
import style from "../style/SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import Container from "react-bootstrap/Container";

function SearchBar() {


  const handleKeyDown = (event) => {
    if (event.keyCode !== 13) {

    } else {
      
      
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
