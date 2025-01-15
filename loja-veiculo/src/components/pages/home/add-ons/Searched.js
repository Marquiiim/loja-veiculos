import Caright from '../../../../img/CarRightHome.jpg'

import styles from './Searched.module.css'

function Searched() {


    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <span>
                    Carros mais buscados
                </span>
                <div className={styles.searcheds_cars}>
                    <ul>
                        <li>
                            <span>
                                <h3>
                                    Toyota
                                </h3>
                                <span>Hilux</span>
                            </span>
                            <img src={Caright} />
                        </li>
                        <li>
                            <span>
                                <h3>
                                    Fiat
                                </h3>
                                <span>
                                    Palio
                                </span>
                            </span>
                            <img src={Caright} />
                        </li>
                        <li>
                            <span>
                                <h3>
                                    Toyota
                                </h3>
                                <span>
                                    Corolla
                                </span>
                            </span>
                            <img src={Caright} />
                        </li>
                        <li>
                            <span>
                                <h3>
                                    Volkswagen
                                </h3>
                                <span>
                                    Gol
                                </span>
                            </span>
                            <img src={Caright} />
                        </li>
                        <li>
                            <span>
                                <h3>
                                    Fiat
                                </h3>
                                <span>
                                    Palio
                                </span>
                            </span>
                            <img src={Caright} />
                        </li>
                        <li>
                            <span>
                                <h3>
                                    Honda
                                </h3>
                                <span>
                                    Civic
                                </span>
                            </span>
                            <img src={Caright} />
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Searched