import React from "react";
import { Link } from "react-router-dom";

const AboutPage = (props) => {
  return (
    <>
      <h2>AboutPage</h2>
      <Link
        to={{
          pathname: "/courses",
          // search: "?query=hello",
          // hash: "world",
          state: {
            from: props.location.pathname,
          },
        }}>
        Open courses
      </Link>
      <button
        type='button'
        onClick={() =>
          props.history.push({
            pathname: props.location.pathname,
            search: "query=Batman",
          })
        }>
        Add search
      </button>
    </>
  );
};

export default AboutPage;
