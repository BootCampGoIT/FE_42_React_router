import React from "react";
import { Switch, Route } from "react-router-dom";
import CoursesList from "../CoursesList/CoursesList";

const Content = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match}/list`} component={CoursesList} />
      <Route path={`${match}/create`} render={() => <h2>Create</h2>} />
    </Switch>
  );
};

export default Content;
