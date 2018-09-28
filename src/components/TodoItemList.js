import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "./TodoItemList.scss";

class TodoItemList extends Component {
  renderTodoItem = (todos = []) => {
    return todos.map((todo, idx) => {
      return (
        <TodoItem>
          {idx + 1} {todo}
        </TodoItem>
      );
    });
  };

  render() {
    const { todo } = this.props;
    console.log(todo);
    return <div className="todo-list">{this.renderTodoItem(todo)}</div>;
  }
}

export default TodoItemList;
