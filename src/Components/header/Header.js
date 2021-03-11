import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import Navigation from "../navigation/Navigation";
import { HeaderContainer } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderContainer>
      <h2>LOGO</h2>
      <Navigation routes={mainRoutes} />
    </HeaderContainer>
  );
};

export default Header;
