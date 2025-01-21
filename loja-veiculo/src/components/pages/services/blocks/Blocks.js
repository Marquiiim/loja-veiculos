import styles from './Blocks.module.css'

function Blocks({ name, price }) {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h3>
                    {name}
                </h3>
                <span>
                    A partir de R$ <h3>{price}</h3><span>,99</span>
                </span>
                <div className={styles.prices}>
                    <span className={styles.addon1}>
                        Preço imbatível
                    </span>
                    <span className={styles.addon2}>
                        Mais agendados
                    </span>
                </div>
                <p>
                    Agende imediatamente!
                </p>
                <div className={styles.list_services}>
                    <ul>
                        <li>
                            <h3>
                                Carro pequeno
                            </h3>
                            <span>
                                Por {price}<span>,99</span>
                            </span>
                        </li>
                        <li>
                            <h3>
                                Carro médio
                            </h3>
                            <span>
                                Por {price}<span>,99</span>
                            </span>
                        </li>
                        <li>
                            <h3>
                                Carro grande
                            </h3>
                            <span>
                                Por {price}<span>,99</span>
                            </span>
                        </li>
                    </ul>
                    <button>Agendar</button>
                </div>
            </div>
        </div>
    )
}

export default Blocks