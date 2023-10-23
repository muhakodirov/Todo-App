import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import { useEffect, useRef, useState } from 'react';


function App() {
  const [todos, setTodos] = useState([])



  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4()
    }
    console.log(newTodo)
    setTodos([...todos, newTodo])
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