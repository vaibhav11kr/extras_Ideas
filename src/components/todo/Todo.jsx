import React, { useEffect, useState } from "react";
import "./Todo.css";
import TodoList from "./components/TodoList";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState('');
  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodo(storedTodos);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo]);


  const addTodo = () => {
    if (text.trim() !== '') {
      const newTodo = { id: Date.now(), value: text, completed: false };
      setTodo([newTodo, ...todo]);
      setText('');
    }
  }

  const handleChange = (e) => {
    if(e.keyCode === 13){
      addTodo();
    }else{
      setText(e.target.value)
    }    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  }

  const setDelete = (id) => {
    setTodo(todo.filter(item => item.id !== id))
  }

  const setComplete = (id) => {
    setTodo(todo.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      } else {
        return item
      }
    }))
  }

  return (
    <div className="main">
      <div className="todo-main">
        <div className="todo-header">
          <h1>To-Do App</h1>
          <h3>Your Todo here</h3>
          <form onSubmit={handleSubmit}>
            <div className="todo-input">
              <input
                type="text"
                name="input"
                id="input"
                placeholder="Enter your todos here..."
                className="input-box"
                value={text}
                onChange={handleChange}
              />
              <button type="submit" className="todo-btn">
                Add Todo
              </button>
            </div>
          </form>
        </div>
        <TodoList todo={todo} setComplete={setComplete} setDelete={setDelete} />
      </div>
    </div>
  );
};

export default Todo;
