import React from "react";
import withFetch from "../withFetch";
import withToggle from "../withTogle";

const url = "https://helloworld-ddee3-default-rtdb.firebaseio.com/tools.json";


const Hoc = (props) => {
  console.log("props :>> ", props);
  return <h2>Hello</h2>;
};

// export default withToggle(Hoc);
export default withFetch(url)(Hoc);
