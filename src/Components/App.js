import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;






// const asyncComponent = ({ loader, loading: Loading }) => {
//   return class AsyncComponent extends Component {
//     state = {
//       component: null,
//     };

//     async componentDidMount() {
//       const { default: component } = await loader();

//       this.setState({ component });
//     }

//     render() {
//       const { component: LoadedComponent } = this.state;

//       return LoadedComponent ? (
//         <LoadedComponent {...this.props} />
//       ) : (
//         <Loading />
//       );
//     }
//   };
// };
