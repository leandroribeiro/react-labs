import Link from "next/link"
import styles from '../styles/Layout.module.css'
import Cabecalho from '../components/cabecalho'

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <Cabecalho titulo={props.titulo ?? "Mais um exemplo"}></Cabecalho>
                <Link href="/">Voltar</Link>
            </div>

            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    )
}