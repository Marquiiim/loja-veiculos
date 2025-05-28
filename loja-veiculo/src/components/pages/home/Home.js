import styles from './Home.module.css'

import FrenteLoja from '../../../img/FrenteLoja.png'

import Searched from './add-ons/Searched'

function Home() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.banner}></div>
                <Searched />
            </div>
        </section>
    )
}

export default Home