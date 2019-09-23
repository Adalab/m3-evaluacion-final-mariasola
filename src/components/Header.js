import React from "react";
import rickandmortyLogo from "../images/rickandMortyLogo.png";

const Header = () => {
  return (
    <header className="header">
      <img
        className="header_img"
        alt="rick and morty logo"
        src={rickandmortyLogo}
      />
    </header>
  );
};

export default Header;
