import React from "react";
import If from './if'

function Conditional(props) {
    return <div>
        <h2>O número é {props.numero}</h2>
        <If test={props.numero % 2 === 0}>
            <span>Par</span>
        </If>
        <If test={props.numero % 2 === 1}>
            <span>Impar</span>
        </If>

    </div>
}

export default Conditional