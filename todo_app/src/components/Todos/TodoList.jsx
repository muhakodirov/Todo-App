import Todo from "./Todo";
import TodoActions from "./TodoActions";
import styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo, checkTodo }) {

    return <div className={styles.todoListContainer}>
        {!todos.length && <h2>Die Todo-Liste ist leer ☹️ </h2>}
        {todos.map(todo => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} checkTodo={checkTodo} />)}
    </div>
}

export default TodoList;