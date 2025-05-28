import styles from './Reasons.module.css'

import { ImBullhorn } from "react-icons/im";
import { ImCreditCard } from "react-icons/im";
import { ImCogs } from "react-icons/im";

function Reasons() {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <ul>
                    <li>
                        <h3>
                            <ImBullhorn size='65' />
                            Milhares de compradores!
                        </h3>
                        <span>
                            + 999 milhões de visitar por mês
                        </span>
                    </li>
                    <li>
                        <h3>
                            <ImCreditCard size='65' />
                            Planos para todos os bolsos
                        </h3>
                        <span>
                            Escolha o melhor plano para vender e parcele em até 10x
                        </span>
                    </li>
                    <li>
                        <h3>
                            <ImCogs size='65' />
                            Prático, intuitivo e muito fácil!
                        </h3>
                        <span>
                            Anuncie seu carro no site ou no App e ative seu anúncio em poucos passos
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Reasons