import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import { useState } from 'react';
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


  const deleteTodoHandler = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const checkTodoHandler = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }))

  }


  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHnadler = () => {
    setTodos(todos.filter(todo => todo.isCompleted != true))
  }

  let isComletedCount = todos.filter(todo => todo.isCompleted).length

  return (
    <div className='centered'>
      <h1>Todo APP</h1>


      <TodoForm addTodo={addTodoHandler} />
      {todos.length > 0 && <TodoActions resetTodos={resetTodosHandler} deleteComplTodos={deleteCompletedTodosHnadler} isComletedCount={!!isComletedCount} />}
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} checkTodo={checkTodoHandler} />

      {(todos.length > 0 && isComletedCount > 0) && <p> <i> Sie haben <b> {isComletedCount} </b> {isComletedCount > 1 ? 'Aufgaben' : 'Aufgabe'} erledigt.  </i> <br /><br /> {isComletedCount > 3 && 'Du bist heute wirklich produktiv 🤩 '}</p>}
    </div>
  );
}

export default App;
