import React, { useState } from "react";

export default (props) => {

    const [numbers, setNumbers] = useState(Array(props.numbers).fill(0));

    function gerarNumerosNaoContido(array) {
        const max = 60;
        const min = 1;
        const newNumber = parseInt(Math.random() * (max - min)) + min;
        return array.includes(newNumber) ? gerarNumerosNaoContido(array) : newNumber;
    }

    function gerarNumeros() {
        const newNumbers = Array(props.numbers)
            .fill(0)
            // .reduce((a, e) => { }, [])
            // .reduce(a => [...a, gerarNumerosNaoContido(a)], [])
            .reduce((a, e) => {
                const newNumber = gerarNumerosNaoContido(a);
                // console.log(a, e, newNumber);
                return [...a, newNumber]
            }, [])
            .sort((a, b) => a - b)

        setNumbers(newNumbers)
    }

    return (
        <React.Fragment>
            <h3>Gerador da Mega Sena</h3>
            <h4>{numbers.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Número</button>
        </React.Fragment>
    )
}