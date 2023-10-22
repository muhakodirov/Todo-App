import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import './App.css'
import { useEffect, useRef, useState } from 'react';


function App() {
  const [todos, setTodos] = useState([])



  const addTodoHandler = (text) => {

    setTodos([...todos, text])
  }

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((todo, idx) => idx !== index))
  }


  return (
    <div className='centered'>
      <h1>Todo APP</h1>

      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />

    </div>
  );
}

export default App;
