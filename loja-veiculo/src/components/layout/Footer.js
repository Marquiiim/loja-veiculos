import styles from './Footer.module.css'

function Footer() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logo_bottom}>
                    <span className={styles.logo}>
                        Marcos Veículos
                    </span>
                    <div className={styles.logo_others}>
                        <span>Uma empresa ###</span>
                        <span>Uma empresa ###</span>
                    </div>
                </div>
                <div className={styles.copyright}>
                    &copy; 1995-2025 Marcos Veículos S.A. CNPJ: 00.000.000/0000-00 Todos os direitos reservados.
                </div>
            </div>
        </div>
    )
}

export default Footer