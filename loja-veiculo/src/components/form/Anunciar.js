import React, { useState, useEffect } from 'react'
import axios from 'axios'

import styles from './Anunciar.module.css'

function Anunciar() {

    const [dados, setDados] = useState([])

    const [chassi, setChassi] = useState('')
    const [ano, setAno] = useState('')
    const [modelo, setModelo] = useState('')
    const [quilometragem, setQuilometragem] = useState('')
    const [combustivel, setCombustivel] = useState('')
    const [motor, setMotor] = useState('')
    const [cambio, setCambio] = useState('')
    const [estado, setEstado] = useState('')
    const [proprietario, setProprietario] = useState('')
    const [telefone, setTelefone] = useState('')

    const [duplicateError, setDuplicateError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/dados')
            .then((res) => setDados(res.data))
            .catch((err) => console.error(err))
    }, [])

    const sendData = () => {
        setIsLoading(true)
        setDuplicateError(false)

        axios.post('http://127.0.0.1:5000/api/dados', { chassi, ano, modelo, quilometragem, combustivel, motor, cambio, estado, proprietario, telefone })
            .then((res) => {
                alert(res.data.message)
                setDados([...dados, { chassi, ano, modelo, quilometragem, combustivel, motor, cambio, estado, proprietario, telefone }])

                setChassi('')
                setAno('')
                setModelo('')
                setQuilometragem('')
                setCombustivel('')
                setMotor('')
                setCambio('')
                setEstado('')
                setProprietario('')
                setTelefone('')
            })
            .catch(
                (err) => {
                    console.error(err.response?.data || err)
                    if (err.response?.data?.error === 'Equipamento já cadastrado!') {
                        setDuplicateError(true)
                        setIsLoading(false)
                    }
                }
            )
    }

    return (
        <section className={styles.content}>
            <h1>
                Cadastre seu carro
            </h1>

            {duplicateError && (<span className={styles.error_duplicate}>Veículo já cadastrado!</span>)}

            <form className={styles.form} onSubmit={(e) => {
                e.preventDefault()
                sendData()
            }}>
                <fieldset>
                    <legend>
                        Informações do Veículo
                    </legend>

                    <div className={styles.form_info}>
                        <label>
                            Número do chassi
                        </label>
                        <input
                            type="text"
                            placeholder="EX: 9BWZZZ377VT004251"
                            value={chassi}
                            onChange={(e) => setChassi(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.form_info}>
                        <label>
                            Ano do veículo
                        </label>
                        <input
                            type="text"
                            placeholder="EX: 2026 / 2027"
                            value={ano}
                            onChange={(e) => setAno(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.form_info}>
                        <label>
                            Modelo do veículo
                        </label>
                        <input
                            type="text"
                            placeholder="EX: FIAT ARGO"
                            value={modelo}
                            onChange={(e) => setModelo(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.form_info}>
                        <label>
                            Quilometragem
                        </label>
                        <input
                            type="text"
                            placeholder="EX: 1000.0"
                            value={quilometragem}
                            onChange={(e) => setQuilometragem(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.form_info}>
                        <label>
                            Tipo de combustível
                        </label>
                        <input
                            type="text"
                            placeholder="EX: Álcool, Elétrico, Gasolina Comum / Aditivada"
                            value={combustivel}
                            onChange={(e) => setCombustivel(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.form_info}>
                        <label>
                            Potência do motor
                        </label>
                        <input
                            type="text"
                            placeholder="EX: 1.0 / 1.6"
                            value={motor}
                            onChange={(e) => setMotor(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.form_info}>
                        <label>
                            Tipo de câmbio
                        </label>
                        <input
                            type="text"
                            placeholder="EX: Automático / Manual"
                            value={cambio}
                            onChange={(e) => setCambio(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.form_info}>
                        <label>
                            Estado do veículo
                        </label>
                        <select
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            required
                        >

                            <option value=''>Selecione uma opção</option>
                            <option value='Usado'>Usado</option>
                            <option value='Novo'>Novo</option>
                        </select>
                    </div>

                    <legend>
                        Informações do Proprietário
                    </legend>

                    <div className={styles.form_info}>
                        <label>
                            Nome proprietário
                        </label>
                        <input
                            type="text"
                            placeholder="Digite seu nome Completo"
                            value={proprietario}
                            onChange={(e) => setProprietario(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.form_info}>
                        <label>
                            Número do proprietário
                        </label>
                        <input
                            type="text"
                            placeholder="EX: (XX) XXXXX-XXXX"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            required
                        />
                    </div>

                </fieldset>
                <button type="submit">
                    {isLoading ? 'Anunciando...' : 'Anunciar'}
                </button>
            </form>
        </section>
    )
}

export default Anunciar