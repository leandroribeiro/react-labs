import Cabecalho from "../components/cabecalho"
import Layout from "../components/Layout"

export default function Exemplo() {
    return (
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="Fundamentos de Next.JS & React"></Cabecalho>
            <Cabecalho titulo="Aprenda Next na prática"></Cabecalho>
        </Layout>
    )
}