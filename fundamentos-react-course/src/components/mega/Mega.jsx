import './Mega.css'
import react, { Component, useState } from "react"


export default function Mega(props) {

    const numeroMin = 1;
    const numeroMax = 99;
    // const qtdNumeros = props.quantidade || 6;

    function gerarNumeroAleatorio(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function gerarNumeros(quantidade) {
        let numeros = Array(quantidade);

        for (let i = 0; i < quantidade; i++) {
            let numero = gerarNumeroAleatorio(numeroMin, numeroMax);

            while (numeros.includes(numero)) {
                numero = gerarNumeroAleatorio(numeroMin, numeroMax);
            }

            numeros[i] = numero;
        }
        return numeros.sort((a, b) => a - b);
    }

    function gerar() {
        setNumeros(gerarNumeros(qtdNumeros));
    }

    const [qtdNumeros, setQtdNumeros] = useState(props.quantidade || 6);
    const numerosIniciais = gerarNumeros(qtdNumeros);
    const [numeros, setNumeros] = useState(numerosIniciais);


    return (
        <div className='Mega'>
            <h2>Mega</h2>
            <h3>
                {numeros.join(' - ')}
            </h3>
            <div>
                <label htmlFor="qtdNumero"></label>
                <input
                    type="number"
                    min={6}
                    max={15}
                    name="qtdNumero"
                    id="qtdNumero"
                    value={qtdNumeros}
                    onChange={e => {
                        setQtdNumeros(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                        }} />
                    {/* onChange={e => setQtdNumeros(+e.target.value)} /> */}
            </div>
            <button onClick={_ => gerar()}>Gerar</button>
        </div>
    )
}