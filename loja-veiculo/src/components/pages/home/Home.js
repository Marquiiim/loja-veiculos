import styles from './Home.module.css'

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
        </section>
    )
}

export default Home