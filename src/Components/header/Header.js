import React from "react";
import { HeaderContainer } from "./HeaderStyled";
import Navigation from "./navigation/Navigation";

const Header = () => {
  return (
    <HeaderContainer>
      <h2>LOGO</h2>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
