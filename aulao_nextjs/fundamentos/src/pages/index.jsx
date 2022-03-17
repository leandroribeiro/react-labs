import Link from "next/link"
import Navegador from "../components/Navegador"

export default function Index() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap: 'wrap'
        }}>
            <Navegador destino="/estiloso" titulo="Estiloso" cor="violet" />
            <Navegador destino="/exemplo" titulo="Exemplo" cor="darkgreen" />
            <Navegador destino="/jsx" titulo="JSX" />
            <Navegador destino="/navegacao" titulo="Navegação #01" />
            <Navegador destino="/cliente/RJ/123" titulo="Navegação #02" />
            <Navegador destino="/estado" titulo="Componente com Estado" />
        </div>
    )
}
