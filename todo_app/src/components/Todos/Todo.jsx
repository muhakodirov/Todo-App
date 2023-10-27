import styles from './Todo.module.css'
import { RiTodoFill, RiDeleteBinFill, RiCheckboxCircleLine } from "react-icons/ri";
import TodoActions from './TodoActions';


function Todo({ todo, deleteTodo, checkTodo }) {


    return <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''} `}>

        <RiTodoFill className={styles.todoIcon} />
        <div className={styles.todoText}>
            {todo.text}
        </div>
        <RiDeleteBinFill className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)} />
        <RiCheckboxCircleLine className={styles.checkIcon} onClick={() => checkTodo(todo.id)} />

    </div>
}

export default Todo;