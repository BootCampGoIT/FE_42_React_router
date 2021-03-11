import React, { Component } from "react";
import Navigation from "../Components/navigation/Navigation";
import { coursesRoutes } from "../routes/coursesRoutes";
import NavigationContent from "../Components/navigation/NavigationContent";

class CoursesPage extends Component {
  state = {
    courses: [],
    from: "",
  };

  componentDidMount() {
    this.setState({ from: this.props.location.state?.from });
    // this.props.history.push(`${this.props.match.url}/list`);
  }

  addCourse = (course) => {
    this.setState((prev) => ({
      courses: [...prev.courses, { ...course, id: `${new Date()}` }],
    }));
  };

  goBack = () => {
    this.props.history.push(this.state.from);
  };

  render() {
    return (
      <>
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
          debitis?
        </h2>
        <button
          type='button'
          onClick={this.goBack}
          disabled={!this.state.from && "disabled"}>
          Go Back
        </button>
        <Navigation routes={coursesRoutes} match={this.props.match.url} />
        <NavigationContent
          routes={coursesRoutes}
          match={this.props.match.url}
          courses={this.state.courses}
          addCourse={this.addCourse}
        />
      </>
    );
  }
}

export default CoursesPage;

// const CoursesPage = () => {
//   const history = useHistory();
//   const match = useRouteMatch();

//   useEffect(() => {
//     history.push(`${match.url}/list`);
//   }, [history, match.url]);

//   return (
//     <>
//       <Navigation match={match.url} />
//       <Content match={match.url} />
//     </>
//   );
// };

// export default CoursesPage;
