import { useRef, useState } from "react";
import styles from './TodoForm.module.css'
import TodoActions from "./TodoActions";

function TodoForm({ addTodo }) {
    const inputRef = useRef(null)

    const [text, setText] = useState('')

    const onSubmitHandler = (e) => {

        e.preventDefault()

        inputRef.current.value && addTodo(text)
        setText('')
    }
    return <div className={styles.todoFormContainer}>
        <form onSubmit={onSubmitHandler}>
            <input ref={inputRef} placeholder="Geben Sie eine neue Aufgabe ein" type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button title="Add a new todo" type="submit">
                Hinzufügen
            </button>
        </form>

    </div>
}

export default TodoForm;