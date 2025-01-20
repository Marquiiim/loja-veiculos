import styles from './Sell.module.css'

import SellCar from '../../../img/CarSellRoute.png'

import { useState } from 'react'

function Sell() {

    const [isChecked, setIsChecked] = useState(false)

    function check() {
        setIsChecked(!isChecked)
    }

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left_sell}>
                    <h1>Vender carros é fácil e rápido com o  <span>maior do Brasil</span></h1>
                    <p>Somos uma loja virtual automotiva com maior audiência do brasil para anunciar e vender seu carro. Não deixe para depois.</p>
                    <button>Anunciar meu carro</button>
                    <div>
                        <div onClick={check} className={`${styles.checkbox} ${isChecked ? styles.checked : ''}`}></div><span>Quero receber descontos, ofertas e informações.</span>
                    </div>
                </div>
            </div>
            <div className={styles.right_sell}>
                <img src={SellCar} alt="Venda seu carro" />
            </div>
        </section>
    )
}

export default Sell