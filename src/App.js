import React, { Component } from "react";
import TodoItemList from './components/TodoItemList';
import { hot } from "react-hot-loader";

class App extends Component {
  render() {
    return <TodoItemList />;
  }
}

export default hot(module)(App);
