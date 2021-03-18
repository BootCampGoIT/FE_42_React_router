import React, { createContext, Component } from "react";
import Header from "./header/Header";
import Fetcher from "./hoc/Fetcher";
import Hoc from "./hoc/Hoc";
import Main from "./main/Main";

const message = "Hello";

const data = { key: 1 };
// export const { Provider:MessageProvider, Consumer: MessageConsumer } = createContext();
export const MessageContext = createContext();
// console.dir(MessageContext);

class App extends Component {
  state = {
    isFetcherOpen: true,
  };

  setFetcher = () => {
    this.setState((prev) => ({ isFetcherOpen: !prev.isFetcherOpen }));
  };
  render() {
    return (
      <MessageContext.Provider value={message}>
        {this.state.isFetcherOpen && <Fetcher setFetcher={this.setFetcher} />}
        {/* <Header />
            <Main />
            <Hoc data={data}/> */}
      </MessageContext.Provider>
    );
  }
}

export default App;
