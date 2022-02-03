import react from "react"

// desafio 1
export default function Aleatorio(props) {
    const min = props.min;
    const max = props.max;

    // const {min, max} = props;
    
    const valorAleatorio = Math.ceil( Math.random() * (max - min) + min );
    return (
        <div>
            <h2>Componente Aleatório</h2>
            <p><strong>Valor Mínimo:</strong> {min}</p>
            <p><strong>Valor Máximo:</strong> {max}</p>
            <p><strong>Valor Obtido:</strong> {valorAleatorio}</p>
        </div>
    )
}