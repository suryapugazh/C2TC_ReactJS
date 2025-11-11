import React, { Component } from "react";

class TodoItem extends Component {
  handleClick = () => {
    console.log("Clicked");
    this.props.toggleComplete(this.props.todo.id);
  };

  render() {
    const { todo } = this.props;
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <h3>{todo.title}</h3>
        <p
          style={{
            color: todo.completed ? "#00ff3cff" : "#ff0015ff",
          }}
        >
          Status: {todo.completed ? "Completed" : "Pending"}
        </p>
        <button
          onClick={this.handleClick}
          style={{
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          <h4>
            <i>Click to toggle status</i>
          </h4>
        </button>
      </div>
    );
  }
}

export default TodoItem;
