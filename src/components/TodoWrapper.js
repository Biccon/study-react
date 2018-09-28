import React, { Component } from "react";
import TodoItemForm from "./TodoItemForm";
import TodoItemList from "./TodoItemList";
import "./TodoWrapper.scss";

class TodoWrapper extends Component {
  state = {
    todo: ["할 일1", "할 일2", "할", "일3"]
  };
  handleAddTodo = text => {
    this.setState({
      todo: [...this.state.todo, text]
    });
  };
  render() {
    console.log("todowrapper : ", this.state.todo);
    return (
      <div className="todo-wrapper">
        <TodoItemForm handleAddTodo={this.handleAddTodo} />
        <TodoItemList todo={this.state.todo} />
      </div>
    );
  }
}

export default TodoWrapper;
