import { useState } from 'react';

import styles from './Blocks.module.css'

import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { IoIosCalendar } from "react-icons/io";
import { IoIosSpeedometer } from "react-icons/io";
import { SlHeart } from "react-icons/sl";

function Blocks({ ano, modelo, quilometragem, combustivel, motor, cambio, estado, proprietario, telefone }) {

    const [more, setMore] = useState(false)

    const toogleMore = (e) => {
        e.preventDefault()
        setMore(!more)
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src='sem nome' alt='' />
                <h3 className={styles.title}>
                    {modelo}
                </h3>
                <div className={styles.info_primary}>
                    <span>
                        <IoIosCalendar /> <span>{ano}</span>
                    </span>
                    <span>
                        <IoIosSpeedometer /> <span>{quilometragem}.0 km</span>
                    </span>
                </div>
                <SlHeart className={styles.heart}/>
                <button>
                    Comprar
                </button>
                

                <span className={styles.info_secondary} onClick={toogleMore}>
                    {more ? (
                        <>Menos informações <SlArrowUp size='10' /></>
                    )
                        :
                        (
                            <>Mais informações <SlArrowDown size='10' /></>
                        )
                    }
                </span>

                {more &&
                    <div className={styles.more_options}>
                        <ul>
                            <li>
                                <span>Motor:</span>
                                <span>{motor}</span>
                            </li>
                            <li>
                                <span>Cambio:</span>
                                <span>{cambio}</span>
                            </li>
                            <li>
                                <span>Estado do veículo:</span>
                                <span>{estado}</span>
                            </li>
                            <li>
                                <span>Tipo de combustível:</span>
                                <span>{combustivel}</span>
                            </li>
                            <li>
                                <span>Proprietário:</span>
                                <span>{proprietario}</span>
                            </li>
                            <li>
                                <span>Número do proprietário: </span>
                                <span>{telefone}</span>
                            </li>
                        </ul>
                    </div>}

            </div>
        </div>
    )
}

export default Blocks