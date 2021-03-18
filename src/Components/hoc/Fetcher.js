import axios from "axios";
import React, { Component } from "react";

class Fetcher extends Component {
  state = {
    data: {},
  };

  canceled: false;

  getData = () => {
    axios
      .get("https://helloworld-ddee3-default-rtdb.firebaseio.com/tools.json")
      .then(
        (response) => !this.canceled && this.setState({ data: response.data })
      );
    this.props.setFetcher();
  };

  componentWillUnmount() {
    this.canceled = true;
  }

  render() {
    return (
      <>
        <button onClick={this.getData}>Get Result</button>
        <h2>{this.state.data?.tool}</h2>
      </>
    );
  }
}

export default Fetcher;
