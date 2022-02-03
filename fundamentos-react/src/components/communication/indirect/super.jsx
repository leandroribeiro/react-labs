import React, { useState } from "react";
import Sub from "./sub";

export default (props) => {
    const [label, setTexto] = useState('Valor');
    const [num, setNum] = useState(0);

    function quandoClicar(valorGerado) {
        setNum(valorGerado);
        setTexto('Gerado');
    }

    return (
        <div>
            <h4>{label}: {num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    );

};