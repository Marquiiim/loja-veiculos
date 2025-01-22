import styles from './Help.module.css'

function Help() {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <input type="text" placeholder="Digite sua dúvida"></input>
            </div>
        </section>
    )
}

export default Help