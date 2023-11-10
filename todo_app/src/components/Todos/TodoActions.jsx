import Button from "../UI/Button";
import { AiFillDelete } from 'react-icons/ai';
import { BiReset } from 'react-icons/bi';
import styles from './TodoAction.module.css'

function TodoActions({ resetTodos, deleteComplTodos, isComletedCount }) {



    return <div className={styles.container}>

        <Button title='Delete all Todos' onClick={resetTodos} isComletedCount={isComletedCount}>
            <BiReset />  {/* Children props */}
        </Button>

        <Button title='Delete completed Todos' onClick={deleteComplTodos} disabled={!isComletedCount}>
            <AiFillDelete />
        </Button>


    </div>
}

export default TodoActions;