import styles from './SearchServices.module.css'

import Blocks from '../blocks/Blocks'

import { useState } from 'react'

function SearchServices() {

    const [selectedItem, setSelectedItem] = useState(null)

    const options = {
        item1: <Blocks name='Lavagem completa' price='199'/>,
        item2: <Blocks name='Funilaria completa' price='419'/>,
        item3: <Blocks name='Estética automotiva' price='259'/>,
        item4: <Blocks name='Manutenção geral' price='59'/>
    }

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <ul>
                    <li onClick={() => setSelectedItem("item1")}>
                        Lavagem
                    </li>
                    <li onClick={() => setSelectedItem("item2")}>
                        Funilaria
                    </li>
                    <li onClick={() => setSelectedItem("item3")}>
                        Estética
                    </li>
                    <li onClick={() => setSelectedItem("item4")}>
                        Manutenção
                    </li>
                </ul>
            </div>
            <div className={styles.display}>
                {selectedItem ? options[selectedItem] : options["item1"]}
            </div>
        </section>
    )
}

export default SearchServices