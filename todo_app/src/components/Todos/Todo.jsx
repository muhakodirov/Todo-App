import styles from './Todo.module.css'
import { RiTodoFill, RiDeleteBinFill, RiCheckFill } from "react-icons/ri";


function Todo({ todo, deleteTodo }) {


    return <div className={styles.todo}>

        <RiTodoFill className={styles.todoIcon} />
        <div className={styles.todoText}>
            {todo.text}
        </div>
        <RiDeleteBinFill className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)} />
        <RiCheckFill className={styles.checkIcon} />

    </div>
}

export default Todo;