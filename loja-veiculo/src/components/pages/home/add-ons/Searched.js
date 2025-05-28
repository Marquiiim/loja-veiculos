import Caright from '../../../../img/CarRightHome.jpg'

import styles from './Searched.module.css'

function Searched() {


    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <fieldset className={styles.field}>
                    <legend className={styles.title}>
                        Categorias
                    </legend>
                    <ul>
                        <li>
                            <span>
                                <h3>
                                    Hatch
                                </h3>
                            </span>
                            <img src={Caright} alt='Categoria Hatch' />
                        </li>
                        <li>
                            <span>
                                <h3>
                                    SUV
                                </h3>
                            </span>
                            <img src={Caright} alt='Categoria SUV' />
                        </li>
                        <li>
                            <span>
                                <h3>
                                    Sedan
                                </h3>
                            </span>
                            <img src={Caright} alt='Categoria Sedan' />
                        </li>
                        <li>
                            <span>
                                <h3>
                                    Minivan
                                </h3>
                            </span>
                            <img src={Caright} alt='Categoria Minivan' />
                        </li>
                        <li>
                            <span>
                                <h3>
                                    Picape
                                </h3>
                            </span>
                            <img src={Caright} alt='Categoria Picape' />
                        </li>
                        <li>
                            <span>
                                <h3>
                                    Esportivo
                                </h3>
                            </span>
                            <img src={Caright} alt='Categoria Esportivo' />
                        </li>
                    </ul>
                </fieldset>
            </div>
        </section>
    )
}

export default Searched