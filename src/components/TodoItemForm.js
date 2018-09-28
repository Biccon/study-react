import React, { Component } from "react";
import "./TodoItemForm.scss";

class TodoItemForm extends Component {
  state = {
    todotext: ""
  };
  handleOnChange = e => {
    this.setState({
      todotext: e.target.value
    });
  };
  handleAdd = handleAddTodo => {
    handleAddTodo(this.state.todotext);
    this.setState({
      todotext: ""
    });
  };
  render() {
    const { handleAddTodo } = this.props;
    return (
      <div className="todo-form">
        <input
          type="text"
          id="todo"
          onChange={this.handleOnChange}
          value={this.state.todotext}
          placeholder="wat to do?"
        />
        <button onClick={() => this.handleAdd(handleAddTodo)}>Submit</button>
      </div>
    );
  }
}

export default TodoItemForm;
