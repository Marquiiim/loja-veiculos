import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'

import { VscAccount } from "react-icons/vsc";
import { VscHeart } from "react-icons/vsc";
import { VscReport } from "react-icons/vsc";

function Navbar({ onShowModal }) {

    return (
        <nav>
            <div className={styles.logo}>
                <h1>
                    <Link to='/'>
                        MARCOS VEÍCULOS
                    </Link>
                </h1>
            </div>

            <div className={styles.options_website}>
                <ul>
                    <li>
                        <Link to='/buy'>
                            Comprar
                        </Link>
                    </li>
                    <li>
                        <Link to='/sell'>
                            Vender
                        </Link>
                    </li>
                    <li>
                        <Link to='/services'>
                            Serviços
                        </Link>
                    </li>
                    <li>
                        <Link to='/help'>
                            Ajuda
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={styles.options_right}>
                <span>
                    <VscAccount /> Entrar
                </span>
                <a href=''>
                    <VscHeart size='20' />
                </a>
                <a href=''>
                    <VscReport size='20' />
                </a>
            </div>
        </nav>
    )
}

export default Navbar