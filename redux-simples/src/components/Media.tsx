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

interface MediaProps {
    min: number,
    max: number
}

function Media(props: MediaProps) {

    return (
        <Card title="Media dos Números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(props.min + props.max)/2}</strong>
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

export default connect(mapStateToProps)(Media)
