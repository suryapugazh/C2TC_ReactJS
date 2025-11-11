import React from "react";

function TodoItems({ todo }) {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p
        style={{
          color: todo.completed ? "#00ff3cff" : "#ff0015ff",
        }}
      >
        Status: {todo.completed ? "Completed" : "Pending"}
      </p>
    </div>
  );
}

export default TodoItems;
