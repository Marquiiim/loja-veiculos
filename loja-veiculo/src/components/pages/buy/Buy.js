import styles from './Buy.module.css'

import { IoIosSearch } from "react-icons/io";

import Blocks from './blocks/Blocks'

function Buy() {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.search}>
                    <span>
                        Qual veículo você está buscando?
                    </span>
                    <div className={styles.search_options}>
                    <input type='text' placeholder='Marca ou modelo' />
                    <IoIosSearch size='41' className={styles.search_icon} />
                    </div>
                </div>
                <div className={styles.cars}>
                <div className={styles.title}>
                    Últimas novidades
                </div>
                    <ul>
                        <Blocks />
                        <Blocks />
                        <Blocks />
                        <Blocks />
                        <Blocks />
                        <Blocks />
                        <Blocks />
                        <Blocks />
                        <Blocks />
                        <Blocks />
                        <Blocks />
                        <Blocks />
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Buy