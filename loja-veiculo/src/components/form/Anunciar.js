import styles from './Anunciar.module.css'

function Anunciar() {

    return (
        <section className={styles.content}>
            <h1>
                Cadastre seu carro
            </h1>
            <form className={styles.form}>
                <fieldset>
                    <legend>
                        Informações do Veículo
                    </legend>

                    <div className={styles.form_info}>
                        <label>
                            Número do chassi
                        </label>
                        <input type="text" placeholder="EX: 9BWZZZ377VT004251" />
                    </div>

                    <div className={styles.form_info}>
                        <label>
                            Número do chassi
                        </label>
                        <input type="text" placeholder="EX: 2026 / 2027" />
                    </div>

                    <div className={styles.form_info}>
                        <label>
                            Modelo do veículo
                        </label>
                        <input type="text" placeholder="EX: FIAT ARGO" />
                    </div>

                    <div className={styles.form_info}>
                        <label>
                            KM's rodados
                        </label>
                        <input type="text" placeholder="EX: 1000.0" />
                    </div>

                    <div className={styles.form_info}>
                        <label>
                            Tipo de combustível
                        </label>
                        <input type="text" placeholder="EX: Álcool, Elétrico, Gasolina Comum / Aditivada" />
                    </div>

                    <div className={styles.form_info}>
                        <label>
                            Potência do motor
                        </label>
                        <input type="text" placeholder="EX: 1.0 / 1.6" />
                    </div>

                    <div className={styles.form_info}>
                        <label>
                            Tipo de câmbio
                        </label>
                        <input type="text" placeholder="EX: Automático / Manual" />
                    </div>

                    <div className={styles.form_info}>
                        <label>
                            Estado do veículo
                        </label>
                        <select>

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
                        <input type="text" placeholder="Digite seu nome Completo" />
                    </div>

                    <div className={styles.form_info}>
                        <label>
                            Número do proprietário
                        </label>
                        <input type="text" placeholder="Digite seu número de telefone" />
                    </div>

                </fieldset>
                <button type="submit">
                    Anunciar
                </button>
            </form>
        </section>
    )
}

export default Anunciar