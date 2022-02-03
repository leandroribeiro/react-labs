import react, { useState } from "react"
import IndiretaFilho from "./IndiretaFilho"

export default function IndiretaPai() {
    const [mensagem, setMensagem] = useState('');

    function falaFilho(msg) {
        setMensagem(msg);
    }

    return (
        <div>
            <h3>Pai</h3>
            <span><i>{mensagem}</i></span>
            <IndiretaFilho quandoClicar={falaFilho}></IndiretaFilho>
        </div>
    )
}