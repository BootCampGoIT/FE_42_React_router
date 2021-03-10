import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import CoursesPage from "../../pages/CoursesPage";
import DefaultPage from "../../pages/DefaultPage";
import HomePage from "../../pages/HomePage";
import { MainContainer } from "./MainStyled";



const Main = () => {
  return (
    <MainContainer>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact={false} path='/courses' component={CoursesPage} />
        <Route component={DefaultPage} />
      </Switch>
    </MainContainer>
  );
};

export default Main;
