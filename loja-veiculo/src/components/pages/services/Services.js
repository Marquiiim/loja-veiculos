import styles from './Services.module.css'

import Wash from '../../../img/WashCar.webp'

import SearchServices from './add-ons/SearchServices'

function Services() {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left_service}>
                    <h1>
                        Temos uma oportunidade única para você experimentar!
                    </h1>
                    <p>
                        Aproveite: Lavagem para o seu carro em nossos lava-rápidos.
                    </p>
                    <h3>
                        <span>R$</span>19<span>,99</span>
                    </h3>
                </div>
                <div className={styles.right_services}>
                    <img src={Wash} alt='Lave seu carro'/>
                </div>
            </div>

            <SearchServices />
        </section>
    )
}

export default Services