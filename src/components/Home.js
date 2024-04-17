// Made by Mehta Aditya Mehul - 8866740, Patel Pratikkumar Harshadbhai – 8868235 and Patel Meet Vimalkumar – 8882879
import React, { useState, useEffect } from 'react';
import '../index.css';

// Home component
function Home({ addTodo, todos: initialTodos, toggleComplete, deleteTodo }) {
  const [newTodo, setNewTodo] = useState('');
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

//  Hooks
  useEffect(() => {
    let intervalId;

    if (isTimerRunning) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            setIsTimerRunning(false);
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isTimerRunning, minutes, seconds]);

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
  };

  const resetTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setIsTimerRunning(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  const sampleTodos = [
    { id: 1, text: 'Complete final project for Trends in Web Development', completed: false },
    { id: 2, text: 'Research about the frameworks of web development', completed: true },
    { id: 3, text: 'Land a job in this industry', completed: false }
  ];

  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
    } else {
      setResult(result + value);
    }
  };

  return (
    <div className="home-container">
      <div className="column">
        {/* To-Do List */}
        <h1>To-Do List</h1>
        <img src="/to-do_icon.png" alt="To-Do List" className="column-image" />
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a todo..."   
          />
          <img src="/add-todo.png" alt="Add" className="icon-button" onClick={() => addTodo(newTodo)} />
        </form>

        <ul>
          {sampleTodos.map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
              <img src="/delete-todo.png" alt="Delete" className="icon-button" onClick={() => deleteTodo(todo.id)} />
            </li>
          ))}
        </ul>
      </div>

      <div className="column">
        {/* Pomodoro Timer */}
        <div className="row">
          <h1>Pomodoro Timer</h1>
          <img src="/pomodoro_icon.png" alt="Pomodoro Timer" className="column-image" />
          <div className="timer">
            <span>{minutes.toString().padStart(2, '0')}:</span>
            <span>{seconds.toString().padStart(2, '0')}</span>
          </div>
          <div className="timer-controls">
            {!isTimerRunning ? (
              <button onClick={startTimer}>Start</button>
            ) : (
              <button onClick={stopTimer}>Stop</button>
            )}
            <button onClick={resetTimer}>Reset</button>
          </div>
        </div>

        {/* Calculator */}
        <div className="row">
          <h1>Calculator</h1>
          <div className="calculator">
            <input type="text" value={result} disabled />
            <div className="buttons">
              {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 'C', 0, '=', '+'].map((value, index) => (
                <button key={index} onClick={() => handleClick(value)}>{value}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;