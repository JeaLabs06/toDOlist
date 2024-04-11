// src/App.js
import React, { useState } from 'react';
import './App.css'; // Import your CSS for styling

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">ToDo List</h1>
      <div className="inputContainer">
        <input
          className="input"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button className="addButton" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <div className="todosContainer">
        {todos.map((todo) => (
          <div key={todo.id} className="todoItem">
            <span>{todo.text}</span>
            <button className="deleteButton" onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;