import React from 'react';
import './App.css';
import Logo from './components/Logo'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="todo-list-app">
      <Logo />

      <div className="container-todo-list">
        <h2>My ToDos</h2>
        <TodoList />
      </div>
    </div>

  );
}

export default App;
