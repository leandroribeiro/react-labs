import react from "react"
import DiretaFilho from "./DiretaFilho"

export default function DiretaPai() {
    return (
        <div>
            <DiretaFilho texto="Gaúcho" idade={50} flamenguista={false}></DiretaFilho>
            <DiretaFilho texto="Romário" idade={60} flamenguista={true}></DiretaFilho>
        </div>
    )
}