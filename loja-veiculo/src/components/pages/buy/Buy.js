import styles from './Buy.module.css'

import OptionsLeft from './options_left/OptionsLeft'

function Buy() {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                    <h1>
                        Compras de carro
                    </h1>
                <div className={styles.buy_options}>
                    <div className={styles.options_left}>
                        <OptionsLeft />
                    </div>
                    <div className={styles.cars}>
                        <ul>
                            <li>teste</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Buy