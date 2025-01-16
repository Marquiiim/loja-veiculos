import styles from './OptionsLeft.module.css'

import OptionB from './Option'

function OptionsLeft() {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <ul>
                    <label className={styles.title_search}>
                        Procurar:
                    </label>
                    <input type='text' />
                    <OptionB name='Hatch' />
                    <OptionB name='Sedã' />
                    <OptionB name='SUV' />
                    <OptionB name='Picapes' />
                    <OptionB name='Utilitários' />
                    <OptionB name='Elétrico' />
                    <OptionB name='Híbrido' />
                    <OptionB name='Crossover' />
                    <OptionB name='Minivan' />
                    <OptionB name='Perua' />
                    <OptionB name='Esportivo' />
                    <OptionB name='Furgão' />
                    <OptionB name='Station Wagon' />
                    <OptionB name='Cupê' />
                    <OptionB name='Conversível' />
                    <OptionB name='Luxo' />
                </ul>
            </div>
        </section>
    )
}

export default OptionsLeft