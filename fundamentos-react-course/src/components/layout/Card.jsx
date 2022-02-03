import './Card.css'
import react from "react"

export default function Card(props) {
    const estilo = {
        backgroundColor: props.cor || '#F00',
        borderColor: props.cor || '#F00'
    }
    
    return (
        <div className="Card" style={estilo}>
            <div className='Title'>{props.titulo}</div>
            <div className='Content'>{props.children}</div>
        </div>
    )
}