import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const addTodo = (textInput) => ({ type: 'ADD_TODO', payload: textInput });

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter"/>
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li >{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

