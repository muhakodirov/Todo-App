import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import { useEffect, useRef, useState } from 'react';
import TodoActions from './components/Todos/TodoActions';


function App() {
  const [todos, setTodos] = useState([])



  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4()
    }

    setTodos([...todos, newTodo])

  }

  // id = 324
  // todo.id = 324
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const checkTodoHandler = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }))

  }


  return (
    <div className='centered'>
      <h1>Todo APP</h1>


      <TodoForm addTodo={addTodoHandler} />
      <TodoActions />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} checkTodo={checkTodoHandler} />

    </div>
  );
}

export default App;
