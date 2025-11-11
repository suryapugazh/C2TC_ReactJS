import React from "react";
import TodoLists from "./components/TodoLists";

function App() {
  const todos = [
    { id: 1, title: "Wake-up 5AM", completed: true },
    { id: 2, title: "Complete ReactJS", completed: true },
    { id: 3, title: "Prepare resume", completed: true },
    { id: 4, title: "Apply Job", completed: false },
    { id: 5, title: "Got to Sleep", completed: false },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo Lists - Hooks</h1>
      <TodoLists todos={todos} />
    </div>
  );
}

export default App;
