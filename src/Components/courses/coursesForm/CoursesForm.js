import React, { Component } from "react";

class CoursesForm extends Component {
  state = {
    courseName: "",
    modulesCount: "",
  };

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addCourse(this.state);
  };
  render() {
    const { courseName, modulesCount } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='courseName'
            value={courseName}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          <input
            type='text'
            name='modulesCount'
            value={modulesCount}
            onChange={this.onHandleChange}
          />
        </label>
        <button type='submit'>Add course</button>
      </form>
    );
  }
}

export default CoursesForm;
