import react from "react"

export default function DiretaFilho(props) {
    return (
        <div>
            <div>{props.texto}</div>
            <div>{props.idade}</div>
            <div>Flamenguista: {props.flamenguista ? 'Sim' : 'Não'}</div>
        </div>
    )
}