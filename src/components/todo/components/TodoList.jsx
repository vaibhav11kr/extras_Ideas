import React from "react";
import "./TodoList.css";
const TodoList = ({todo, setComplete, setDelete}) => {
  return (
    <div className="todolist-main">
      <ul className="list">
        {todo.map((item, idx) => {
          return (
            <li className="list-item" key={idx}>
              <p>{item.value}</p>
              <span className="mark" onClick={()=>setComplete(item.id)}>{item.completed ? "✅":"☑️"}</span>
              <span className="del" onClick={()=>setDelete(item.id)}>🗑️</span>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default TodoList;
