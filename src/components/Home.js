// Made by Mehta Aditya Mehul - 8866740
import React, { useState } from 'react';

function Home({ addTodo, todos: initialTodos, toggleComplete, deleteTodo }) {
  const [newTodo, setNewTodo] = useState('');

  // Sample todo data
  const sampleTodos = [
    { id: 1, text: 'Complete homework', completed: false },
    { id: 2, text: 'Read a book', completed: true },
    { id: 3, text: 'Go for a run', completed: false }
  ];

  // Initialize todos with sample data
  const [todos, setTodos] = useState(sampleTodos); 

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a todo..."   
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;