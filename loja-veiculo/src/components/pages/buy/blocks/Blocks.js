import { useState } from 'react';

import styles from './Blocks.module.css'

import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { IoIosCalendar } from "react-icons/io";
import { IoIosSpeedometer } from "react-icons/io";
import { SlHeart } from "react-icons/sl";

import Carro1 from '../../../../img/CarroPNG1.png'
import Carro2 from '../../../../img/CarroPNG2.png'

import 'bootstrap/dist/js/bootstrap.bundle.min';

function Blocks({ chassi, ano, modelo, quilometragem, combustivel, motor, cambio, estado, proprietario, telefone}) {

    const [more, setMore] = useState(false)

    const toggleMore = (e) => {
        e.preventDefault()
        setMore(!more)
    }

    const carouselId = `carousel-${chassi}`

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Carro1} className="d-block w-100" alt="Foto do veículo" />
                        </div>
                        <div className="carousel-item">
                            <img src={Carro2} className="d-block w-100" alt="Foto do veículo" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <h3 className={styles.title}>
                    {modelo}
                </h3>
                <div className={styles.info_primary}>
                    <span className={styles.characteristics}>
                        <IoIosCalendar />
                        <span>
                            {ano}
                        </span>
                    </span>
                    <span className={styles.characteristics}>
                        <IoIosSpeedometer />
                        <span>
                            {quilometragem}.0 km
                        </span>
                    </span>
                </div>
                <SlHeart className={styles.heart} />
                <button className={styles.buy_button}>
                    Comprar
                </button>


                <span className={styles.info_secondary} onClick={toggleMore}>
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