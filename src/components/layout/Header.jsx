import React from 'react';
import style from '../../style/Header.module.css';
import Container from 'react-bootstrap/Container';

import NavBar from '../NavBar'
import SearchBar from '../SearchBar'

function Header({detach}) {
  return (
    <Container fluid className={ detach && style.header }>
      <NavBar />
      <SearchBar />
    </Container>
  );
}

export default Header;
