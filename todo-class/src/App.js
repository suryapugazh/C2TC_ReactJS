import React, { Component } from "react";
import TodoLists from './components/TodoLists';

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>To-do Lists</h1>
        <TodoLists />
      </div>
    );
  }
}

export default App;
