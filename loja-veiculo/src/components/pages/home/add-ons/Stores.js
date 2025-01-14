import styles from './Stores.module.css'

import LStore from '../../../../img/LogoMarcHome.png'

function Stores() {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <span>
                    Lojas parceiras
                </span>
                <div className={styles.logos_stores}>
                    <ul>
                        <li>
                            <img src={LStore} alt='logo' />
                        </li>
                        <li>
                            <img src={LStore} alt='logo' />
                        </li>
                        <li>
                            <img src={LStore} alt='logo' />
                        </li>
                        <li>
                            <img src={LStore} alt='logo' />
                        </li>
                        <li>
                            <img src={LStore} alt='logo' />
                        </li>
                        <li>
                            <img src={LStore} alt='logo' />
                        </li>
                        <li>
                            <img src={LStore} alt='logo' />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Stores