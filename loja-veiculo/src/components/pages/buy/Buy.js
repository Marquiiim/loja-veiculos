import { useEffect, useState } from 'react';
import axios from 'axios'

import styles from './Buy.module.css'

import { IoIosSearch } from "react-icons/io";

import Blocks from './blocks/Blocks'

function Buy() {

    const [error, setError] = useState(null)

    const [dados, setDados] = useState([])
    const [filteredDados, setFilteredDados] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/dados')
            .then((res) => {
                setDados(res.data)
                setFilteredDados(res.data)
            })
            .catch((err) => {
                console.error(err)
                setError(err.message)
            })
    }, [])

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredDados(dados)
        } else {
            const filtered = dados.filter(item => item.modelo.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            )
            setFilteredDados(filtered)
        }
    })

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.search}>
                    <span>
                        Qual veículo você está buscando?
                    </span>
                    <div className={styles.search_options}>
                        <input type='text' placeholder='Digite o modelo do veículo'
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <IoIosSearch size='41' className={styles.search_icon} />
                    </div>
                </div>
                <div className={styles.cars}>
                    <div className={styles.title}>
                        {searchTerm ? `Resultados de ${searchTerm}` : 'Últimas novidades'}
                    </div>
                    <ul>
                        {filteredDados.map((data) => (
                            <li key={data.id}>
                                <Blocks
                                    chassi={data.chassi}
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
                    {searchTerm && filteredDados.length === 0 && (
                        <p className={styles.noResults}>Nenhum veículo do modelo "{searchTerm}" encontrado.</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Buy