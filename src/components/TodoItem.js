import React, { Component } from "react";
import "./TodoItem.scss";

class TodoItem extends Component {
  render() {
    const { children, complete } = this.props;
    return (
      <div className="todo-item">
        {complete} {children}
      </div>
    );
  }
}

export default TodoItem;
