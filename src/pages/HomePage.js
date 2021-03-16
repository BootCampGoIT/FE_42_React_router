import React from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  const goCourses = () => {
    props.history.push({
      pathname: "/courses",
      // search: "?query=hello",
      // hash: "world",
      state: {
        from: props.location.pathname,
      },
      fghjklhgfh: "fghjk",
    });
  };
  return (
    <>
      <h2>HomePage</h2>
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
      {/* ========================= */}
      <button type='button' onClick={goCourses}>
        Open Courses
      </button>
    </>
  );
};

export default HomePage;


