import styles from './Button.module.css'

function Button(props) {

    return (
        <button className={styles.button} onClick={props.onClick} title={props.title} disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button;