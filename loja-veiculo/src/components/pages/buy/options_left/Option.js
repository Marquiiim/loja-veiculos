import styles from './Option.module.css'

function Option({ name = 'Unknown' }) {

    return (
        <li className={styles.option}>
            <input type='checkbox' /> <label>{name}</label>
        </li>
    )
}

export default Option