import React, { Component } from "react";
import TodoItem from "./TodoItem";
import './TodoItemList.scss';

class TodoItemList extends Component {
  state = {
    todo: ['할 일', '할 일2']
  };

  addTodoItem = text => {
    this.setState({
      todo: [...this.state.todo, text]
    });
  };

  renderTodoItem = () => {
    return this.state.todo.map(todo => {
      return <TodoItem complete='ggaa'>{todo}</TodoItem>;
    });
  };

  render() {
    return <div className="todo-list">{this.renderTodoItem()}</div>;
  }
}

export default TodoItemList;
