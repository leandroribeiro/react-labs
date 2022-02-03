import react from "react"

export default function IndiretaFilho(props) {
    return (
        <div>
            <div>
                Filho
            </div>
            
            <button onClick={(e) => { props.quandoClicar('Fala tu pai.'); }}>
                Falar
            </button>
        </div>
    )
}