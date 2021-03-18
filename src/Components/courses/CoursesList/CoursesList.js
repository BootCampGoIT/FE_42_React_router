import React from "react";
import { MessageContext } from "../../App";

const CoursesList = () => {
  return (
    <>
      <MessageContext.Consumer>{(message) => <h2>{message}</h2>}</MessageContext.Consumer>
    </>
  );
};

export default CoursesList;
