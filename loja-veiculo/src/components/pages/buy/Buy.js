import { useEffect, useState } from 'react';
import axios from 'axios'

import styles from './Buy.module.css'

import { IoIosSearch } from "react-icons/io";

import Blocks from './blocks/Blocks'

function Buy() {

    const [error, setError] = useState(null)

    const [dados, setDados] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/dados')
            .then((res) => setDados(res.data))
            .catch((err) => {
                console.error(err)
                setError(err.message)
            })
    }, [])

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.search}>
                    <span>
                        Qual veículo você está buscando?
                    </span>
                    <div className={styles.search_options}>
                        <input type='text' placeholder='Marca ou modelo' />
                        <IoIosSearch size='41' className={styles.search_icon} />
                    </div>
                </div>
                <div className={styles.cars}>
                    <div className={styles.title}>
                        Últimas novidades
                    </div>
                    <ul>
                        {dados.map((data) => (
                            <li key={data.chassi}>
                                <Blocks
                                    ano={data.ano}
                                    modelo={data.modelo}
                                    quilometragem={data.quilometragem}
                                    combustivel={data.combustivel}
                                    motor={data.motor}
                                    cambio={data.cambio}
                                    estado={data.estado}
                                    proprietario={data.proprietario}
                                    telefone={data.telefone}
                                />
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Buy