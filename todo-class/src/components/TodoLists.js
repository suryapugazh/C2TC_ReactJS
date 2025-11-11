import React, { Component } from "react";
import TodoItems from "./TodoItems";

class TodoLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: "Wake-up 5AM", completed: true },
        { id: 2, title: "Complete ReactJS", completed: true },
        { id: 3, title: "Prepare resume", completed: true },
        { id: 4, title: "Apply Job", completed: false },
        { id: 5, title: "Got to Sleep", completed: false },
      ],
    };
  }

  toogleComplete = (id) => {
    const updateTodo = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updateTodo });
  };

  render() {
    return (
      <div>
        {this.state.todos.map((todo) => (
          <TodoItems
            key={todo.id}
            todo={todo}
            toggleComplete={this.toogleComplete}
          />
        ))}
      </div>
    );
  }
}

export default TodoLists;
