import React from 'react';
import TodoItems from './TodoItems';

function TodoLists({ todos }) {
  return (
    <div style={{ marginTop: '20px' }}>
      {todos.map(todo => (
        <TodoItems key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoLists;