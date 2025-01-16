import styles from './Blocks.module.css'

import Volvo from '../../../../img/VolvoBuyRoute.jpg'

import { SlArrowDown } from "react-icons/sl";

function Blocks() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src={Volvo} alt='Carro' />
                <span>
                    Volvo XC40
                </span>
                <p>
                    a partir de <span>R$ 209.900</span>
                </p>
                    <button>
                        Comprar
                    </button>
                    <span className={styles.informations}>
                        Mais informações <SlArrowDown size='10'/>
                    </span>
                </div>
            </div>
    )
}

export default Blocks