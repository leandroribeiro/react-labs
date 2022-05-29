import './Intervalo.css'
import React from "react";
import Card from "./Card";
import {connect} from "react-redux";


interface IRootState {
    numeros: {
        min: number,
        max: number
    };
}

interface SomaProps{
    min: number,
    max: number
}

function Soma(props: SomaProps) {
    return (
        <Card title="Soma dos Números" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{props.min + props.max}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state: IRootState) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

export default connect(mapStateToProps)(Soma)

