import styles from './Help.module.css'

import FAQ from '../../../img/FAQimg.png'

function Help() {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.banner}>
                    <div className={styles.banner_left}>
                        <h1>Bem-vindo a central de ajuda <span>Marcos Veículos</span></h1>
                        <p>
                            Tire todas as suas dúvidas ou acione <strong>nossos canais de atendimento</strong>
                        </p>
                    </div>
                    <div className={styles.banner_right}>
                        <img src={FAQ} alt='FAQ AJUDA'/>
                    </div>
                </div>
                <input type="text" placeholder="Digite sua dúvida"></input>

                <div className={styles.doubts}>
                    <h3>
                        Dúvidas frequentes
                    </h3>
                    <ol>
                        <li>
                            <a href=''>
                                Quais dados consigo alterar no meu cadastro?
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                Onde faço essas alterações?
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                Cancelamento de cadastro
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                Quais dados cadastrai NÃO posso alterar?
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                Quais palavras ou caracteres não podem ser inseridos no campo de observação?
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                Porque o campo de observação do meu anúncio não aparece?
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                O que é Comparador?
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                O que é Cardelivery?
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                Quem vai levar o Carro até minha casa?
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                Termos de Uso e Política de Privacidade
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Help