import styles from './Todo.module.css'
import { RiTodoFill, RiDeleteBinFill, RiCheckFill } from "react-icons/ri";


function Todo({ todo, deleteTodo, index }) {


    return <div className={styles.todo}>

        <RiTodoFill className={styles.todoIcon} />
        <div className={styles.todoText}>
            {todo}
        </div>
        <RiDeleteBinFill className={styles.deleteIcon} onClick={() => deleteTodo(index)} />
        <RiCheckFill className={styles.checkIcon} />

    </div>
}

export default Todo;