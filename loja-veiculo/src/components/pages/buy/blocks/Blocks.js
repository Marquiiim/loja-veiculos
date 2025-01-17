import styles from './Blocks.module.css'

import Volvo from '../../../../img/VolvoBuyRoute.jpg'

import { SlArrowDown } from "react-icons/sl";
import { IoIosCalendar } from "react-icons/io";
import { IoIosSpeedometer } from "react-icons/io";

function Blocks() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src={Volvo} alt='Carro' />
                <h3 className={styles.title}>
                    Volvo <span>XC40</span>
                </h3>
                <p>
                    2.0 turbo de 190 ou 252 cv e transmissão automática
                </p>
                <div className={styles.info_primary}>
                    <span>
                        <IoIosCalendar /> <span>2024/2025</span>
                    </span>
                    <span>
                        <IoIosSpeedometer /> <span>0 km</span>
                    </span>
                </div>
                <button>
                    Comprar
                </button>
                <span className={styles.info_secondary}>
                    Mais informações <SlArrowDown size='10' />
                </span>
            </div>
        </div>
    )
}

export default Blocks