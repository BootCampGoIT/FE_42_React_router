import React, { useEffect } from "react";
import Content from "../Components/courses/content/Content";
import Navigation from "../Components/courses/navigation/Navigation";
import { useHistory, useRouteMatch } from "react-router-dom";

const CoursesPage = () => {
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    history.push(`${match.url}/list`);
  }, [history, match.url]);

  return (
    <>
      <Navigation match={match.url} />
      <Content match={match.url} />
    </>
  );
};

export default CoursesPage;

// class CoursesPage extends Component {
//   state = {};

//   componentDidMount() {
//     this.props.history.push(`${this.props.match.url}/list`);
//   }

//   render() {
//     return (
//       <>
//         <Navigation match={this.props.match.url} />
//         <Content match={this.props.match.url} />
//       </>
//     );
//   }
// }

// export default CoursesPage;
