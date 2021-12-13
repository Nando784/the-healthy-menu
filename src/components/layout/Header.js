import React from "react";
import NavBar from '../NavBar'
import PageLogo from '../PageLogo'

function Header() {
  return (
    <div style={{ backgroundColor: "#f0f0f0" }}>
      <NavBar />
      <PageLogo />
    </div>
  );
}

export default Header;
