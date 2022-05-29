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

interface SorteioProps {
    min: number,
    max: number
}

function Sorteio(props: SorteioProps) {
    const random = Math.random() * (props.max - props.min) + props.min
    return (
        <Card title="Sorteio de um Número" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{random}</strong>
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

export default connect(mapStateToProps)(Sorteio)
