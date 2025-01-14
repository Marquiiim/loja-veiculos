import styles from './Categorys.module.css'

import Carcat from '../../../../img/CarWalkingHome.jpg'

function Categorys() {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <span>
                    Categorias
                </span>
                <div className={styles.cat_cars}>
                    <ul>
                        <li>
                            <span>
                                Carros elétricos
                            </span>
                            <img src={Carcat} alt='Carro' />
                        </li>
                        <li>
                            <span>
                                Hatches
                            </span>
                            <img src={Carcat} alt='Carro' />
                        </li>
                        <li>
                            <span>
                                Picapes
                            </span>
                            <img src={Carcat} alt='Carro' />
                        </li>
                        <li>
                            <span>
                                Sedans
                            </span>
                            <img src={Carcat} alt='Carro' />
                        </li>
                        <li>
                            <span>
                                SUVs
                            </span>
                            <img src={Carcat} alt='Carro' />
                        </li>
                        <li>
                            <span>
                                Conversíves
                            </span>
                            <img src={Carcat} alt='Carro' />
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default Categorys