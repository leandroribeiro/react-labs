import './App.css'
import Intervalo from "./components/Intervalo";
import Soma from "./components/Soma";
import Media from "./components/Media";
import Sorteio from "./components/Sorteio";

export const App = () => {

    return (
        <div className="App">
            <h1>Exercício Redux (Simples)</h1>
            <div className="linha">
                <Intervalo></Intervalo>
            </div>
            <div className="linha">
                <Soma></Soma>
                <Media></Media>
                <Sorteio></Sorteio>
            </div>
        </div>
    )
}
