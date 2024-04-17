import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './index.css';
import Navbar from './/components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: Date.now(), text: newTodoText, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home addTodo={addTodo} todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}  />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;