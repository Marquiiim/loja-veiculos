import styles from './Home.module.css'

import Searched from './add-ons/Searched'

function Home() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.banner}>
                    <p>
                        Na <span>Marcos Veículos</span>, seu novo carro te espera! <span>Preço justo</span>, <span>qualidade</span> e <span>confiança</span>. Vem fazer um ótimo negócio!
                    </p>
                </div>
                <Searched />
            </div>
        </section>
    )
}

export default Home