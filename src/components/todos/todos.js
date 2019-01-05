import React from 'react';
import AddTodo from './addTodo.js';
import TodoList from './TodoList.js';

import './style.css';

export default () => {
  return (
    <div className="todos">
      <AddTodo />
      <TodoList />
    </div>
  );
}