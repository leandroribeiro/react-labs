import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(value) {
    if (value.length <= 0) return -1;
    const n = parseInt(value);
    if (n < 0) return -1;
    if (n === 0) return 1;
    return calcFactorial(n - 1) * n;
}

function calcStatus(value) {
    if (value.length <= 0) return -1;
    const n = parseInt(value);
    return (value % 2 === 0 ? "Odd (Par)" : "Even (Impar)");
}

function UseEffect(props) {

    // Exercise 01 : begin"

    const [number, setNumber] = useState(1);
    const [factorial, setFactorial] = useState(1);

    useEffect(() => {
        setFactorial(calcFactorial(number))
    }, [number]);

    useEffect(() => {
        if (factorial > 100000) {
            document.title = "Very large num!!!";
        }
        else {
            document.title = `Factorial of ${number}`;
        }
    }, [factorial]);

    // Exercise 01 : end

    // Exercise 02 : begin

    useEffect(() => {
        setStatus(calcStatus(number))
    }, [number]);

    const [status, setStatus] = useState('?');

    // Exercise 02 : end

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{factorial}</span>
                </div>
                <input
                    type="number"
                    className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
