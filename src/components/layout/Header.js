import React from 'react';
import style from '../../style/Header.module.css';
import NavBar from '../NavBar'

function Header() {
  return (
    <div className={style.header}>
      <NavBar />
    </div>
  );
}

export default Header;
