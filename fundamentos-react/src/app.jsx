import './app.css'
import React from "react";

import First from './components/basics/first'
import Second from './components/basics/second'
import Third from './components/basics/third'
import Card from './components/layout/card'
import Repeat from './components/basics/repeat'
import Conditional from "./components/basics/conditional";
import ConditionalIf from "./components/basics/conditionalIf";
import Root from './components/communication/direct/root';
import Super from './components/communication/indirect/super';
import Input from './components/forms/input';
import Contador from './components/counter/counter';
import Mega from './components/mega-sena/mega';

function App(props) {
    return <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#1 -Exercicio X" color="blue">
                <First></First>
            </Card>

            <Card titulo="#2 - Exercicio Y" color="green">
                <Second titulo="Esse é o titulo" subtitulo="Esse é o subtitulo"></Second>
                <Second titulo="Opa" subtitulo="Epa"></Second>
            </Card>

            <Card titulo="#3 - Com filhos" color="red">
                <Third>
                    <ul>
                        <li>Pera</li>
                        <li>Uva</li>
                        <li>Maça</li>
                    </ul>
                </Third>
            </Card>

            <Card titulo="#4 - Repeticao" color="purple">
                <Repeat></Repeat>
            </Card>


            <Card titulo="#5 - Condicional" color="pink">
                <Conditional numero={10}></Conditional>
            </Card>

            <Card titulo="#6 - Condicional If" color="orange">
                <ConditionalIf numero={13}></ConditionalIf>
            </Card>

            <Card titulo="#7 - Comunicação Direta" color="cyan">
                <Root sobrenome="Leite"></Root>
            </Card>

            <Card titulo="#8 - Comunicação Indireta" color="blue">
                <Super></Super>
            </Card>

            <Card titulo="#9 - Input" color="green">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Contador" color="pink">
                <Contador step={10} value={100}></Contador>
            </Card>

            <Card titulo="#11 - Gerador MegaSena" color="red">
                <Mega numbers={6}></Mega>
            </Card>

        </div>

    </div>
}

export default App