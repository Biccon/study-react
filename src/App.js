import React, { Component } from "react";
import { hot } from "react-hot-loader";
import TodoWrapper from "./components/TodoWrapper";

class App extends Component {
  render() {
    return (
      <div>
        <TodoWrapper />
      </div>
    );
  }
}

export default hot(module)(App);
