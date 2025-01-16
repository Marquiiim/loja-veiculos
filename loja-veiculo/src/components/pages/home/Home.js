import styles from './Home.module.css'

import Stores from './add-ons/Stores'
import Categorys from './add-ons/Categorys'
import Searched from './add-ons/Searched'

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
            <Categorys />
            <Searched />

        </section>
    )
}

export default Home