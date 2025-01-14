import styles from './Home.module.css'

import Stores from './add-ons/Stores'

import CarHome from '../../../img/CarHome.webp'

function Home() {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <ul>
                    <li>
                        <img src={CarHome} />
                    </li>

                    <li>
                        <img src={CarHome} />
                    </li>

                    <li>
                        <img src={CarHome} />
                    </li>

                    <li>
                        <img src={CarHome} />
                    </li>
                    <li>
                        <img src={CarHome} />
                    </li>
                    <li>
                        <img src={CarHome} />
                    </li>
                </ul>
            </div>

            <Stores />

        </section>
    )
}

export default Home