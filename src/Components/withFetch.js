import axios from "axios";
import React, { Component } from "react";

const withFetch = (url) => (WrappedComponent) => {
  return class WithFetch extends Component {
    state = {
      data: {},
      loading: false,
      error: null,
    };

    componentDidMount() {
      this.setState({ loading: true });

      axios
        .get(url)
        .then((response) => this.setState({ data: response.data }))
        .finally(() => this.setState({ loading: false }));
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
};

export default withFetch;

// const getData = (value) => {

//   return function (step) {
//     value += step;
//     console.log(value);
//   };
// };

// const counter = getData(0);
// counter(3); //1
// counter(3); //2
// counter(4); //3
// counter(5); //4
// counter(6); //5
