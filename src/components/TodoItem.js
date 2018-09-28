import React, { Component } from "react";
import "./TodoItem.scss";

class TodoItem extends Component {
  handleOnClick = e => {
    // 클릭하면 complete 토글
    this.setState({
      complete: !this.state.complete
    });
  };
  
  constructor(props) {
    super(props);
    this.state = {
        complete: props.complete
    }
  }

  render() {
    const { children } = this.props;
    const { complete } = this.state;

    return (
      <div className={["todo-item", complete && "complete"].join(" ")}>
        {children}
        <button onClick={this.handleOnClick}>
          {this.state.complete ? "취소" : "완료"}
        </button>
      </div>
    );
  }
}

export default TodoItem;
